
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from './AuthProvider';
import { useToast } from '@/hooks/use-toast';
import { weeks } from '@/data/weekData';
import QuizOption from './QuizOption';
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy, ChevronRight, Linkedin, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

// Define Quiz Question type
interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
  week_id: number; // Add week_id property
}

// Shuffle an array
const shuffleArray = (array: any[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const MixedQuiz = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [incorrectAnswers, setIncorrectAnswers] = useState<{question: Question, userAnswer: string}[]>([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(10);
  
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const generateRandomMixedQuestions = () => {
    // First, let's extract all questions from all weeks
    const allQuestions: Question[] = [];
    
    weeks.forEach(week => {
      if (week.content && Array.isArray(week.content.questions)) {
        const weekQuestions = week.content.questions.map(q => ({
          ...q,
          week_id: week.id // Add the week_id to each question
        }));
        allQuestions.push(...weekQuestions);
      }
    });
    
    // Now, let's shuffle and select the requested number of questions
    const shuffled = shuffleArray(allQuestions);
    const selectedQuestions = shuffled.slice(0, numberOfQuestions);
    
    setQuestions(selectedQuestions);
    setLoading(false);
  };
  
  useEffect(() => {
    // Only generate questions if quiz has started
    if (quizStarted) {
      generateRandomMixedQuestions();
    } else {
      setLoading(false);
    }
  }, [quizStarted, numberOfQuestions]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };
  
  const handleCheckAnswer = async () => {
    if (!selectedOption) return;
    
    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      toast({
        title: "Correct!",
        description: `That's the right answer.`,
        variant: "default",
      });
    } else {
      // Track incorrect answer
      setIncorrectAnswers(prev => [...prev, {
        question: currentQuestion,
        userAnswer: selectedOption
      }]);
      
      toast({
        title: "Incorrect",
        description: `The correct answer is: ${currentQuestion.correctAnswer}`,
        variant: "destructive",
      });

      // Save incorrect answer to Supabase if user is logged in
      if (user) {
        try {
          // Create a quiz attempt first if this is the first incorrect answer
          let attemptId = localStorage.getItem('currentMixedQuizAttemptId');
          
          if (!attemptId) {
            const { data: attemptData, error: attemptError } = await supabase
              .from('quiz_attempts')
              .insert({
                user_id: user.id,
                quiz_type: 'mixed',
                score: 0, // Will be updated at end
                total_questions: questions.length,
                week_id: null // Mixed quiz has no specific week
              })
              .select('id')
              .single();
              
            if (attemptError) {
              console.error("Error creating quiz attempt:", attemptError);
              return;
            }
            
            attemptId = attemptData.id;
            localStorage.setItem('currentMixedQuizAttemptId', attemptId);
          }
          
          await supabase.from('incorrect_answers').insert({
            user_id: user.id,
            week_id: currentQuestion.week_id,
            question_text: currentQuestion.text,
            user_answer: selectedOption,
            correct_answer: currentQuestion.correctAnswer,
            attempt_id: attemptId
          });
        } catch (error) {
          console.error("Error saving incorrect answer:", error);
        }
      }
    }
    
    setIsAnswered(true);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizCompleted(true);
      // Save quiz attempt to Supabase if user is logged in
      if (user) {
        saveQuizAttempt();
      }
    }
  };
  
  const saveQuizAttempt = async () => {
    try {
      const attemptId = localStorage.getItem('currentMixedQuizAttemptId');
      
      if (attemptId) {
        // Update existing attempt with final score
        await supabase.from('quiz_attempts').update({
          score: score,
        }).eq('id', attemptId);
      } else {
        // Create new attempt
        await supabase.from('quiz_attempts').insert({
          user_id: user!.id,
          quiz_type: 'mixed',
          score: score,
          total_questions: questions.length
        });
      }
      
      // Clear stored attempt ID
      localStorage.removeItem('currentMixedQuizAttemptId');
    } catch (error) {
      console.error("Error saving quiz attempt:", error);
    }
  };
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setLoading(true);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
    // Clear any previous attempt ID
    localStorage.removeItem('currentMixedQuizAttemptId');
  };
  
  const handleRestart = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-conservation-water"></div>
      </div>
    );
  }
  
  if (!quizStarted) {
    return (
      <Card className="max-w-3xl mx-auto mt-4">
        <CardHeader className="bg-conservation-water/10">
          <CardTitle>Mixed Quiz</CardTitle>
          <CardDescription>Test your knowledge with questions from all weeks</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Number of Questions</h3>
            <div className="space-y-3">
              <Slider
                value={[numberOfQuestions]}
                onValueChange={(value) => setNumberOfQuestions(value[0])}
                min={5}
                max={20}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between">
                <span>5</span>
                <span>10</span>
                <span>15</span>
                <span>20</span>
              </div>
              <p className="text-center font-medium mt-2">Selected: {numberOfQuestions} questions</p>
            </div>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button 
              onClick={handleStartQuiz} 
              size="lg"
              className="w-full sm:w-auto"
            >
              Start Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const passingScore = Math.ceil(questions.length * 0.6);
    const passed = score >= passingScore;
    
    return (
      <Card className="max-w-3xl mx-auto mt-4">
        <CardHeader className={passed ? "bg-green-100 dark:bg-green-900/20" : "bg-amber-100 dark:bg-amber-900/20"}>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-conservation-water" />
            Quiz Results
          </CardTitle>
          <CardDescription>Mixed Quiz - Questions from all weeks</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <div className="text-3xl font-bold mb-2">
              {score} / {questions.length}
            </div>
            <Progress value={percentage} className="h-3" />
            <p className="mt-2 text-sm text-muted-foreground">You scored {percentage}%</p>
          </div>
          
          <div className="mb-8">
            {passed ? (
              <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-100 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold mb-1">Well Done!</h3>
                <p>You've passed the quiz with a good score.</p>
              </div>
            ) : (
              <div className="p-4 bg-amber-50 dark:bg-amber-900/10 rounded-lg border border-amber-100 text-center">
                <XCircle className="h-12 w-12 text-amber-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold mb-1">Keep Learning</h3>
                <p>You need {passingScore} correct answers to pass. Review the materials and try again.</p>
              </div>
            )}
          </div>
          
          {incorrectAnswers.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Questions to Review</h3>
              <div className="space-y-4">
                {incorrectAnswers.map((item, index) => (
                  <div key={index} className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100">
                    <div className="flex items-start gap-2">
                      <Badge variant="outline" className="mt-1">Week {item.question.week_id}</Badge>
                      <div>
                        <p className="font-medium mb-2">{item.question.text}</p>
                        <p className="text-sm text-red-600">Your answer: {item.userAnswer}</p>
                        <p className="text-sm text-green-600">Correct answer: {item.question.correctAnswer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            <Button 
              variant="outline" 
              onClick={handleRestart}
              className="flex items-center gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              Try Again
            </Button>
            
            <Button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ChevronRight className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </div>
          
          <div className="text-center mt-8 pt-4 border-t">
            <p className="text-sm text-muted-foreground mb-2">Follow Aman on</p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/in/aman-chauhan-128552256" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-500 hover:text-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/amanchauhan786" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="max-w-3xl mx-auto mt-4">
      <CardHeader className="bg-conservation-water/10">
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">Mixed Quiz</Badge>
          <Badge>Question {currentQuestionIndex + 1} of {questions.length}</Badge>
        </div>
        <CardTitle>
          {currentQuestion.text}
        </CardTitle>
        <CardDescription>
          From Week {currentQuestion.week_id}: {weeks.find(w => w.id === currentQuestion.week_id)?.title}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={index}
              option={option}
              selected={selectedOption === option}
              isCorrect={isAnswered ? option === currentQuestion.correctAnswer : null}
              isChecking={isAnswered}
              onSelect={() => handleOptionSelect(option)}
            />
          ))}
        </div>
        
        <div className="mt-8 flex justify-end">
          {!isAnswered ? (
            <Button 
              onClick={handleCheckAnswer} 
              disabled={!selectedOption}
              className="min-w-32"
            >
              Check Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion}
              className="min-w-32"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MixedQuiz;
