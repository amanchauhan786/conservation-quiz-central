
import React from 'react';
import { Award, Clock, Book } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const DashboardOverview = () => {
  return (
    <div className="nptel-container py-8">
      <h1 className="text-3xl font-bold mb-6">Course Overview</h1>
      
      <div className="bg-white dark:bg-card rounded-lg shadow-md p-6 mb-8 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-4">Conservation Economics</h2>
        <p className="mb-4">
          The times are changing: we live in an era when issues such as climate change, over population, pollution, habitat loss and 
          mass extinction of species are no longer just academic concepts; we are witnessing them in our daily lives and suffering their consequences.
        </p>
        <p className="mb-4">
          In this course, we shall look at the processes of Conventional Economics that have led to the destruction of the 
          environment by putting profits above everything, and how we can solve these issues of Conventional Economics with a 
          better understanding of Economics – Green Economics.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="stat-card">
            <Book className="h-8 w-8 mb-2 text-conservation-green" />
            <h3 className="text-lg font-semibold">12 Weeks</h3>
            <p className="text-sm text-gray-500">Comprehensive Learning</p>
          </div>
          <div className="stat-card">
            <Award className="h-8 w-8 mb-2 text-conservation-earth" />
            <h3 className="text-lg font-semibold">120+ Questions</h3>
            <p className="text-sm text-gray-500">Practice & Assessment</p>
          </div>
          <div className="stat-card">
            <Clock className="h-8 w-8 mb-2 text-conservation-water" />
            <h3 className="text-lg font-semibold">Self-Paced</h3>
            <p className="text-sm text-gray-500">Learn At Your Pace</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="bg-conservation-green/10">
            <CardTitle>Weekly Learning</CardTitle>
            <CardDescription>Study materials for each week</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">Access comprehensive learning materials organized by week, including explanations of key concepts.</p>
            <Link to="/learn" className="text-conservation-green hover:text-conservation-green-dark font-medium">Start Learning →</Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-conservation-earth/10">
            <CardTitle>Weekly Quizzes</CardTitle>
            <CardDescription>Test your knowledge by week</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">Assess your understanding with topic-specific quizzes for each week of the course.</p>
            <Link to="/quiz/weekly" className="text-conservation-earth hover:text-conservation-earth-dark font-medium">Take Weekly Quizzes →</Link>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="bg-conservation-water/10">
            <CardTitle>Mixed Quiz</CardTitle>
            <CardDescription>Comprehensive assessment</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">Challenge yourself with questions from all weeks combined in a comprehensive test.</p>
            <Link to="/quiz/mixed" className="text-conservation-water hover:text-conservation-water-dark font-medium">Take Mixed Quiz →</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardOverview;
