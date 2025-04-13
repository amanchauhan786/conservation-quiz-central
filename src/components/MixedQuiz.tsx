
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCcw } from 'lucide-react';
import { getAllQuestions } from '@/data/weekData';
import QuizOption from './QuizOption';

const MixedQuiz = () => {
  const [questions, setQuestions] = useState(getAllQuestions().filter(q => q.options.length > 0));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  
  const totalQuestions = 20; // Limit to 20 questions for the mixed quiz
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  useEffect(() => {
    // Shuffle questions and take only the first totalQuestions
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, totalQuestions));
  }, []);
  
  useEffect(() => {
    // Reset state when moving to new question
    setSelectedOption(null);
    setIsChecking(false);
  }, [currentQuestionIndex]);
  
  const currentQuestion = questions[currentQuestionIndex];
  
  if (!currentQuestion) {
    return (
      <div className="nptel-container py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Loading quiz questions...</h2>
      </div>
    );
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
    if (currentQuestionIndex < totalQuestions - 1) {
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
    // Reshuffle questions for a new quiz
    const shuffled = [...getAllQuestions().filter(q => q.options.length > 0)]
      .sort(() => 0.5 - Math.random())
      .slice(0, totalQuestions);
    
    setQuestions(shuffled);
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
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild variant="outline">
              <Link to="/learn">Return to Learning</Link>
            </Button>
            <Button onClick={restartQuiz} className="flex items-center space-x-2">
              <RefreshCcw className="h-4 w-4" />
              <span>Take Another Quiz</span>
            </Button>
            <Button asChild>
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
        <h1 className="text-2xl font-bold">Mixed Quiz</h1>
        <Button asChild variant="outline">
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
              <span>{currentQuestionIndex < totalQuestions - 1 ? 'Next' : 'Finish Quiz'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default MixedQuiz;
