
import React from 'react';
import { Award, Clock, Book, BarChart2, CheckCircle, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const mockProgressData = [
  { week: 'Week 1', score: 90 },
  { week: 'Week 2', score: 85 },
  { week: 'Week 3', score: 78 },
  { week: 'Week 4', score: 92 },
  { week: 'Week 5', score: 88 },
  { week: 'Week 6', score: 76 },
];

const DashboardOverview = () => {
  return (
    <div className="nptel-container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Course Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Course:</span> Conservation Economics | <span className="font-medium">Creator:</span> Aman Chauhan
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-conservation-green/10 to-conservation-green/5">
          <CardContent className="flex flex-col items-center pt-6">
            <Book className="h-10 w-10 mb-2 text-conservation-green" />
            <h3 className="text-xl font-semibold">12 Weeks</h3>
            <p className="text-sm text-muted-foreground">Comprehensive Learning</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-conservation-earth/10 to-conservation-earth/5">
          <CardContent className="flex flex-col items-center pt-6">
            <Award className="h-10 w-10 mb-2 text-conservation-earth" />
            <h3 className="text-xl font-semibold">120+ Questions</h3>
            <p className="text-sm text-muted-foreground">Practice & Assessment</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-conservation-water/10 to-conservation-water/5">
          <CardContent className="flex flex-col items-center pt-6">
            <Activity className="h-10 w-10 mb-2 text-conservation-water" />
            <h3 className="text-xl font-semibold">Track Progress</h3>
            <p className="text-sm text-muted-foreground">Personalized Insights</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-100 to-purple-50">
          <CardContent className="flex flex-col items-center pt-6">
            <Clock className="h-10 w-10 mb-2 text-purple-500" />
            <h3 className="text-xl font-semibold">Self-Paced</h3>
            <p className="text-sm text-muted-foreground">Learn At Your Pace</p>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart2 className="h-5 w-5" />
              Weekly Performance
            </CardTitle>
            <CardDescription>Your progress across weekly quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockProgressData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" name="Score (%)" fill="#34D399" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Recent Activity
            </CardTitle>
            <CardDescription>Your latest quiz attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Quiz</TableHead>
                  <TableHead>Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Week 11</TableCell>
                  <TableCell>9/10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Week 10</TableCell>
                  <TableCell>8/10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mixed Quiz</TableCell>
                  <TableCell>17/20</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Week 9</TableCell>
                  <TableCell>10/10</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      
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
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
