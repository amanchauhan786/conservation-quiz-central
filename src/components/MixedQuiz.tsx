
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, RefreshCcw } from 'lucide-react';
import { Linkedin, Github } from 'lucide-react';
import QuizOption from './QuizOption';
import { useToast } from '@/hooks/use-toast';
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from './AuthProvider';
import { weeks } from '@/data/weekData';
import { Question } from '@/types';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MixedQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();

  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionsCount, setQuestionsCount] = useState(10);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{
    question: string;
    correctAnswer: string;
    userAnswer: string;
  }>>([]);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex + 1) / questions.length) * 100 : 0;

  // Load all available questions
  useEffect(() => {
    const loadQuestions: Question[] = [];
    
    weeks.forEach(week => {
      if (week.questions && Array.isArray(week.questions)) {
        // Add weekId to each question
        const questionsWithWeekId = week.questions.map(q => ({
          ...q,
          weekId: week.id
        }));
        loadQuestions.push(...questionsWithWeekId);
      }
    });

    // Ensure we have questions
    if (loadQuestions.length === 0) {
      // Fallback questions if no questions are available
      const fallbackQuestions: Question[] = [
        {
          text: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Tech Multi Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
          correctAnswer: "Hyper Text Markup Language",
          weekId: 1
        },
        {
          text: "Which tag is used to create a hyperlink in HTML?",
          options: ["<link>", "<a>", "<href>", "<url>"],
          correctAnswer: "<a>",
          weekId: 1
        },
        {
          text: "What is the correct CSS syntax for making all the paragraphs bold?",
          options: ["p {text-weight: bold;}", "p {font-weight: bold;}", "p.all {font-weight: bold;}", "<p style='font-weight: bold;'>"],
          correctAnswer: "p {font-weight: bold;}",
          weekId: 2
        },
        {
          text: "What does CSS stand for?",
          options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
          correctAnswer: "Cascading Style Sheets",
          weekId: 2
        },
        {
          text: "Which JavaScript method is used to access an HTML element by id?",
          options: ["getElementById()", "getElement(id)", "getElementsById()", "elementById()"],
          correctAnswer: "getElementById()",
          weekId: 3
        }
      ];
      setAllQuestions(fallbackQuestions);
    } else {
      setAllQuestions(loadQuestions);
    }
  }, []);

  // Reset state when moving to new question
  useEffect(() => {
    if (quizStarted && currentQuestion) {
      setSelectedOption(null);
      setIsChecking(false);
    }
  }, [currentQuestionIndex, quizStarted, currentQuestion]);

  const handleStartQuiz = () => {
    // Ensure questions count is within reasonable limits
    const count = Math.min(Math.max(1, questionsCount), allQuestions.length);
    
    // Shuffle and select requested number of questions
    const shuffledQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions.slice(0, count));
    
    // Reset quiz state
    setCurrentQuestionIndex(0);
    setScore(0);
    setIncorrectAnswers([]);
    setQuizStarted(true);
    setQuizCompleted(false);
  };

  const handleOptionSelect = (option: string) => {
    if (isChecking || !currentQuestion) return;
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
        userAnswer: selectedOption
      }]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
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
          score: score,
          total_questions: questions.length
        })
        .select();

      if (attemptError) throw attemptError;

      // Save incorrect answers if any
      if (incorrectAnswers.length > 0 && attemptData && attemptData[0]) {
        const incorrectAnswersToSave = incorrectAnswers.map(item => ({
          attempt_id: attemptData[0].id,
          user_id: user.id,
          question_text: item.question,
          correct_answer: item.correctAnswer,
          user_answer: item.userAnswer,
          week_id: 0 // Default week_id for mixed quiz
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
            <CardTitle>Mixed Quiz Completed!</CardTitle>
            <CardDescription>Mixed Questions from Various Weeks</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-6">
              <CheckCircle className="h-16 w-16 text-conservation-green" />
              <h2 className="text-2xl font-semibold">Your Score: {score}/{questions.length}</h2>
              <p className="text-lg">
                {score === questions.length ? 
                  "Perfect! You've mastered these questions." : 
                  score >= questions.length / 2 ? 
                    "Good job! Keep studying to improve your score." : 
                    "Keep practicing. Review the questions you missed."}
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
                <Link to="/quiz/mixed">Mixed Quizzes</Link>
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

  if (!quizStarted) {
    return (
      <div className="nptel-container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-center sm:text-left">Mixed Quiz Challenge</h1>
          <Button asChild variant="outline">
            <Link to="/quiz/mixed">Back to Quizzes</Link>
          </Button>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardHeader className="bg-conservation-green/10">
            <CardTitle>Choose Your Challenge</CardTitle>
            <CardDescription>Select how many questions you want to answer</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="questions-count">Number of Questions:</Label>
                <Input
                  id="questions-count"
                  type="number"
                  min="1"
                  max={allQuestions.length}
                  value={questionsCount}
                  onChange={(e) => setQuestionsCount(Math.min(Math.max(1, parseInt(e.target.value) || 1), allQuestions.length))}
                  className="w-full"
                />
                <p className="text-sm text-muted-foreground">
                  Available questions: {allQuestions.length}
                </p>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-md">
                <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Challenge Info</h3>
                <p className="text-sm">
                  This quiz will randomly select {questionsCount} questions from all available weeks. 
                  Test your knowledge across different topics!
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button 
              onClick={handleStartQuiz}
              disabled={allQuestions.length === 0}
              className="flex items-center gap-2"
            >
              Start Challenge
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="nptel-container py-8">
        <Card className="max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <p className="text-center">No questions available. Please try again later.</p>
            <div className="flex justify-center mt-4">
              <Button onClick={restartQuiz}>Back to Quiz Selection</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="nptel-container py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-center sm:text-left">Mixed Quiz</h1>
        <Button asChild variant="outline">
          <Link to="/quiz/mixed">Back to Quizzes</Link>
        </Button>
      </div>

      <div className="mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
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
              <span>{currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish Quiz'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default MixedQuiz;
