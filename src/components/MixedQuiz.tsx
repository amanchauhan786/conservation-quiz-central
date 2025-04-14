
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCcw, Settings } from 'lucide-react';
import { getAllQuestions } from '@/data/weekData';
import QuizOption from './QuizOption';
import { Slider } from "@/components/ui/slider";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from './AuthProvider';
import { useToast } from '@/hooks/use-toast';

const MixedQuiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState(getAllQuestions().filter(q => q.options.length > 0));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questionCount, setQuestionCount] = useState(20);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{
    question: string;
    correctAnswer: string;
    userAnswer: string;
    weekId: number;
  }>>([]);
  
  const { user } = useAuth();
  const { toast } = useToast();
  
  const totalQuestions = questionCount;
  const progress = quizStarted ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;
  
  useEffect(() => {
    if (quizStarted) {
      // Shuffle questions and take only the first totalQuestions
      const shuffled = [...getAllQuestions().filter(q => q.options.length > 0)]
        .sort(() => 0.5 - Math.random());
      setQuestions(shuffled.slice(0, totalQuestions));
    }
  }, [quizStarted, totalQuestions]);
  
  useEffect(() => {
    // Reset state when moving to new question
    setSelectedOption(null);
    setIsChecking(false);
  }, [currentQuestionIndex]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsChecking(false);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
  };
  
  const handleOptionSelect = (option: string) => {
    if (isChecking) return;
    setSelectedOption(option);
  };
  
  const handleCheckAnswer = () => {
    if (!selectedOption || !currentQuestion) return;
    
    setIsChecking(true);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      // Record incorrect answer
      setIncorrectAnswers([...incorrectAnswers, {
        question: currentQuestion.text,
        correctAnswer: currentQuestion.correctAnswer,
        userAnswer: selectedOption,
        weekId: currentQuestion.weekId
      }]);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
      saveQuizResults();
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const saveQuizResults = async () => {
    if (!user) return;
    
    try {
      // Save quiz attempt
      const { data: attemptData, error: attemptError } = await supabase
        .from('quiz_attempts')
        .insert({
          user_id: user.id,
          quiz_type: 'mixed',
          week_id: null, // mixed quiz doesn't have a specific week
          score: score,
          total_questions: totalQuestions
        })
        .select();
      
      if (attemptError) throw attemptError;
      
      // Save incorrect answers if any
      if (incorrectAnswers.length > 0 && attemptData && attemptData[0]) {
        const incorrectAnswersToSave = incorrectAnswers.map(item => ({
          attempt_id: attemptData[0].id,
          user_id: user.id,
          week_id: item.weekId,
          question_text: item.question,
          correct_answer: item.correctAnswer,
          user_answer: item.userAnswer
        }));
        
        const { error: incorrectError } = await supabase
          .from('incorrect_answers')
          .insert(incorrectAnswersToSave);
        
        if (incorrectError) throw incorrectError;
      }
      
      toast({
        title: "Progress saved",
        description: "Your quiz results have been saved to your profile.",
      });
      
    } catch (error: any) {
      console.error('Error saving quiz results:', error);
      toast({
        title: "Error saving progress",
        description: "There was an error saving your quiz results.",
        variant: "destructive"
      });
    }
  };
  
  const restartQuiz = () => {
    setQuizStarted(false);
  };
  
  if (!quizStarted) {
    return (
      <div className="nptel-container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Mixed Quiz Setup</h1>
          <Button asChild variant="outline">
            <Link to="/quiz/weekly">Back to Quizzes</Link>
          </Button>
        </div>
        
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="bg-conservation-water/10">
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configure Your Quiz
            </CardTitle>
            <CardDescription>Select the number of questions for your mixed quiz</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Number of Questions: {questionCount}
              </label>
              <div className="px-4">
                <Slider
                  value={[questionCount]}
                  min={5}
                  max={50}
                  step={5}
                  onValueChange={(value) => setQuestionCount(value[0])}
                />
              </div>
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>5</span>
                <span>25</span>
                <span>50</span>
              </div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg mb-6">
              <p className="text-sm">
                This quiz will randomly select {questionCount} questions from all available weeks.
                Your progress will be saved and available in your personalized dashboard.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              onClick={handleStartQuiz} 
              className="w-full"
            >
              Start Quiz
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  if (!currentQuestion) {
    return (
      <div className="nptel-container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Loading quiz questions...</h2>
      </div>
    );
  }
  
  if (quizCompleted) {
    return (
      <div className="nptel-container py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center bg-conservation-water/10">
            <CardTitle>Mixed Quiz Completed!</CardTitle>
            <CardDescription>Comprehensive Assessment</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              <CheckCircle className="h-16 w-16 text-conservation-water" />
              <h2 className="text-2xl font-semibold">Your Score: {score}/{totalQuestions}</h2>
              <p className="text-lg">
                {score === totalQuestions ? 
                  "Perfect! You've mastered the course content." : 
                  score >= totalQuestions / 2 ? 
                    "Good job! Keep studying to improve your score." : 
                    "Keep practicing. Review the course content and try again."}
              </p>
              
              {incorrectAnswers.length > 0 && (
                <div className="w-full mt-6">
                  <h3 className="text-lg font-medium mb-4">Questions to Review:</h3>
                  <div className="space-y-4">
                    {incorrectAnswers.map((item, index) => (
                      <div key={index} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <p className="font-medium">{item.question}</p>
                        <p className="text-sm mt-2">Your answer: <span className="text-red-600 dark:text-red-400">{item.userAnswer}</span></p>
                        <p className="text-sm">Correct answer: <span className="text-green-600 dark:text-green-400">{item.correctAnswer}</span></p>
                        <p className="text-xs mt-1 text-muted-foreground">From Week {item.weekId}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link to="/learn">Return to Learning</Link>
            </Button>
            <Button onClick={restartQuiz} className="flex items-center space-x-2 w-full sm:w-auto">
              <RefreshCcw className="h-4 w-4" />
              <span>Take Another Quiz</span>
            </Button>
            <Button asChild className="w-full sm:w-auto">
              <Link to="/quiz/weekly">Weekly Quizzes</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="nptel-container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">Mixed Quiz ({questionCount} Questions)</h1>
        <Button asChild variant="outline" className="hidden sm:flex">
          <Link to="/quiz/weekly">Back to Quizzes</Link>
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Question {currentQuestionIndex + 1} of {totalQuestions}</span>
          <span>Score: {score}/{currentQuestionIndex + (isChecking ? 1 : 0)}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-conservation-water/10">
          <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
          <CardDescription className="text-xs">Week {currentQuestion.weekId}</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-lg mb-6">{currentQuestion.text}</p>
          
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => (
              <QuizOption
                key={index}
                option={option}
                selected={selectedOption === option}
                isCorrect={isChecking ? option === currentQuestion.correctAnswer : null}
                isChecking={isChecking}
                onSelect={() => handleOptionSelect(option)}
              />
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center space-x-2 w-full sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          {!isChecking ? (
            <Button 
              onClick={handleCheckAnswer} 
              disabled={!selectedOption}
              className="w-full sm:w-auto"
            >
              Check Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion} 
              className="flex items-center space-x-2 w-full sm:w-auto"
            >
              <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'Finish Quiz'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
      
      <div className="flex justify-center sm:hidden mt-4">
        <Button asChild variant="outline" size="sm">
          <Link to="/quiz/weekly">Back to Quizzes</Link>
        </Button>
      </div>
    </div>
  );
};

export default MixedQuiz;
