
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCcw } from 'lucide-react';
import { getWeekbyId } from '@/data/weekData';
import QuizOption from './QuizOption';
import { useToast } from '@/hooks/use-toast';

const WeeklyQuiz = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const week = getWeekbyId(parseInt(weekId || "1"));
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const currentQuestion = week?.questions[currentQuestionIndex];
  const progress = week?.questions ? ((currentQuestionIndex + 1) / week.questions.length) * 100 : 0;
  
  useEffect(() => {
    if (!week) {
      navigate('/quiz/weekly');
      toast({
        title: "Week not found",
        description: "The requested quiz week could not be found.",
        variant: "destructive"
      });
    }
  }, [week, navigate, toast]);
  
  useEffect(() => {
    // Reset state when moving to new question
    setSelectedOption(null);
    setIsChecking(false);
  }, [currentQuestionIndex]);
  
  if (!week || !currentQuestion) {
    return null;
  }
  
  const handleOptionSelect = (option: string) => {
    if (isChecking) return;
    setSelectedOption(option);
  };
  
  const handleCheckAnswer = () => {
    if (!selectedOption) return;
    
    setIsChecking(true);
    
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < week.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsChecking(false);
    setScore(0);
    setQuizCompleted(false);
  };
  
  if (quizCompleted) {
    return (
      <div className="nptel-container py-8">
        <Card className="max-w-3xl mx-auto">
          <CardHeader className="text-center bg-conservation-green/10">
            <CardTitle>Quiz Completed!</CardTitle>
            <CardDescription>Week {week.id}: {week.title}</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              <CheckCircle className="h-16 w-16 text-conservation-green" />
              <h2 className="text-2xl font-semibold">Your Score: {score}/{week.questions.length}</h2>
              <p className="text-lg">
                {score === week.questions.length ? 
                  "Perfect! You've mastered this week's content." : 
                  score >= week.questions.length / 2 ? 
                    "Good job! Keep studying to improve your score." : 
                    "Keep practicing. Review the week's content and try again."}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild variant="outline">
              <Link to="/learn">Return to Learning</Link>
            </Button>
            <Button onClick={restartQuiz} className="flex items-center space-x-2">
              <RefreshCcw className="h-4 w-4" />
              <span>Restart Quiz</span>
            </Button>
            <Button asChild>
              <Link to="/quiz/weekly">All Quizzes</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="nptel-container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Week {week.id} Quiz: {week.title}</h1>
        <Button asChild variant="outline">
          <Link to="/quiz/weekly">Back to Quizzes</Link>
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Question {currentQuestionIndex + 1} of {week.questions.length}</span>
          <span>Score: {score}/{currentQuestionIndex + (isChecking ? 1 : 0)}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      
      <Card className="mb-6">
        <CardHeader className="bg-conservation-green/10">
          <CardTitle>Question {currentQuestionIndex + 1}</CardTitle>
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
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevQuestion}
            disabled={currentQuestionIndex === 0}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>
          
          {!isChecking ? (
            <Button 
              onClick={handleCheckAnswer} 
              disabled={!selectedOption}
            >
              Check Answer
            </Button>
          ) : (
            <Button 
              onClick={handleNextQuestion} 
              className="flex items-center space-x-2"
            >
              <span>{currentQuestionIndex < week.questions.length - 1 ? 'Next' : 'Finish Quiz'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default WeeklyQuiz;
