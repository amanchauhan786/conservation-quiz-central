
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Shuffle } from 'lucide-react';
import { weeks } from '@/data/weekData';

const QuizSelector = () => {
  return (
    <div className="nptel-container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Quiz Selection</h1>
        <Button asChild variant="outline">
          <Link to="/">Back to Dashboard</Link>
        </Button>
      </div>
      
      <Card className="mb-8">
        <CardHeader className="bg-conservation-water/10">
          <CardTitle className="flex items-center space-x-2">
            <Shuffle className="h-5 w-5" />
            <span>Mixed Quiz</span>
          </CardTitle>
          <CardDescription>Test your knowledge across all weeks</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p>Challenge yourself with questions randomly selected from all weeks. This comprehensive quiz will test your understanding of the entire course content.</p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to="/quiz/mixed">Start Mixed Quiz</Link>
          </Button>
        </CardFooter>
      </Card>
      
      <h2 className="text-2xl font-semibold mb-4">Weekly Quizzes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weeks.map((week) => (
          <Card key={week.id} className={week.questions.length === 0 ? "opacity-60" : ""}>
            <CardHeader className="bg-conservation-earth/10">
              <CardTitle className="flex items-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Week {week.id}</span>
              </CardTitle>
              <CardDescription>{week.title}</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <p>{week.description}</p>
              <p className="mt-3 text-sm text-muted-foreground">
                {week.questions.length > 0 
                  ? `${week.questions.length} questions`
                  : "Coming soon"}
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                className="w-full" 
                disabled={week.questions.length === 0}
              >
                <Link to={`/quiz/weekly/${week.id}`}>
                  {week.questions.length > 0 ? "Start Quiz" : "Not Available"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuizSelector;
