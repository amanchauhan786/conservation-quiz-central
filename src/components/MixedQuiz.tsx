
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from './AuthProvider';
import { useToast } from '@/hooks/use-toast';
import { weeks } from '@/data/weekData';
import QuizOption from './QuizOption';
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Progress } from "@/components/ui/progress";

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

// Random int in range
const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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
  
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const generateRandomMixedQuestions = () => {
    // First, let's extract all questions from all weeks
    const allQuestions: Question[] = [];
    
    weeks.forEach(week => {
      const weekQuestions = week.content.questions.map(q => ({
        ...q,
        week_id: week.id // Add the week_id to each question
      }));
      allQuestions.push(...weekQuestions);
    });
    
    // Now, let's shuffle and select 10 random questions
    const shuffled = shuffleArray(allQuestions);
    const selectedQuestions = shuffled.slice(0, 10);
    
    setQuestions(selectedQuestions);
    setLoading(false);
  };
  
  useEffect(() => {
    generateRandomMixedQuestions();
  }, []);
  
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
        variant: "success",
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
          await supabase.from('incorrect_answers').insert({
            user_id: user.id,
            week_id: currentQuestion.week_id,
            question_text: currentQuestion.text,
            user_answer: selectedOption,
            correct_answer: currentQuestion.correctAnswer
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
      await supabase.from('quiz_attempts').insert({
        user_id: user!.id,
        quiz_type: 'mixed',
        score: score,
        total_questions: questions.length
      });
    } catch (error) {
      console.error("Error saving quiz attempt:", error);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
    generateRandomMixedQuestions();
  };
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-conservation-water"></div>
      </div>
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
              correct={isAnswered ? option === currentQuestion.correctAnswer : undefined}
              incorrect={isAnswered ? (selectedOption === option && option !== currentQuestion.correctAnswer) : undefined}
              disabled={isAnswered}
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
