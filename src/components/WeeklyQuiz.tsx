import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCcw } from 'lucide-react';
import { Linkedin, Github } from 'lucide-react';
import { getWeekbyId } from '@/data/weekData';
import QuizOption from './QuizOption';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from './AuthProvider';

const WeeklyQuiz = () => {
  const { weekId } = useParams<{ weekId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  const week = getWeekbyId(parseInt(weekId || "1"));
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{
    question: string;
    correctAnswer: string;
    userAnswer: string;
  }>>([]);
  
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
    } else {
      // Record incorrect answer
      setIncorrectAnswers([...incorrectAnswers, {
        question: currentQuestion.text,
        correctAnswer: currentQuestion.correctAnswer,
        userAnswer: selectedOption
      }]);
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < week.questions.length - 1) {
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
          quiz_type: 'weekly',
          week_id: week.id,
          score: score,
          total_questions: week.questions.length
        })
        .select();
      
      if (attemptError) throw attemptError;
      
      // Save incorrect answers if any
      if (incorrectAnswers.length > 0 && attemptData && attemptData[0]) {
        const incorrectAnswersToSave = incorrectAnswers.map(item => ({
          attempt_id: attemptData[0].id,
          user_id: user.id,
          week_id: week.id,
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
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsChecking(false);
    setScore(0);
    setQuizCompleted(false);
    setIncorrectAnswers([]);
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
              
              {incorrectAnswers.length > 0 && (
                <div className="w-full mt-6">
                  <h3 className="text-lg font-medium mb-4">Questions to Review:</h3>
                  <div className="space-y-4">
                    {incorrectAnswers.map((item, index) => (
                      <div key={index} className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                        <p className="font-medium">{item.question}</p>
                        <p className="text-sm mt-2">Your answer: <span className="text-red-600 dark:text-red-400">{item.userAnswer}</span></p>
                        <p className="text-sm">Correct answer: <span className="text-green-600 dark:text-green-400">{item.correctAnswer}</span></p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4 w-full">
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <Link to="/learn">Return to Learning</Link>
              </Button>
              <Button onClick={restartQuiz} className="flex items-center space-x-2 w-full sm:w-auto">
                <RefreshCcw className="h-4 w-4" />
                <span>Restart Quiz</span>
              </Button>
              <Button asChild className="w-full sm:w-auto">
                <Link to="/quiz/weekly">All Quizzes</Link>
              </Button>
            </div>
            
            {/* Follow Aman Section */}
            <div className="w-full flex flex-col items-center mt-6 pt-4 border-t">
              <h3 className="text-lg font-semibold mb-4">Follow Aman</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/aman-chauhan-128552256" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={32} />
                </a>
                <a 
                  href="https://github.com/amanchauhan786" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gray-600 transition-colors"
                >
                  <Github size={32} />
                </a>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="nptel-container py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-center sm:text-left">Week {week.id} Quiz: {week.title}</h1>
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
