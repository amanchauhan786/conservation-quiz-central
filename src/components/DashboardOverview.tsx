
import React, { useEffect, useState } from 'react';
import { Award, Clock, Book, BarChart2, CheckCircle, Activity, AlertCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './AuthProvider';
import { Button } from '@/components/ui/button';

const DashboardOverview = () => {
  const { user } = useAuth();
  const [quizAttempts, setQuizAttempts] = useState<any[]>([]);
  const [weeklyPerformance, setWeeklyPerformance] = useState<any[]>([]);
  const [weakAreas, setWeakAreas] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [visitorCount, setVisitorCount] = useState(0);

  // Track page visit when component mounts
  useEffect(() => {
    const trackVisit = async () => {
      try {
        // Get current visitor count
        const { data: visitorData, error: visitorError } = await supabase
          .from('site_stats')
          .select('visitor_count')
          .single();
        
        if (visitorError && visitorError.code !== 'PGRST116') {
          console.error("Error fetching visitor count:", visitorError);
          return;
        }
        
        const currentCount = visitorData?.visitor_count || 0;
        setVisitorCount(currentCount + 1);
        
        // Update visitor count
        const { error: updateError } = await supabase
          .from('site_stats')
          .upsert({ id: 1, visitor_count: currentCount + 1 });
        
        if (updateError) {
          console.error("Error updating visitor count:", updateError);
        }
      } catch (error) {
        console.error("Error tracking visit:", error);
      }
    };
    
    trackVisit();
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) {
        setIsLoading(false);
        return;
      }
      
      try {
        // Fetch quiz attempts
        const { data: attempts, error: attemptsError } = await supabase
          .from('quiz_attempts')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(4);
        
        if (attemptsError) throw attemptsError;
        setQuizAttempts(attempts || []);
        
        // Get weekly performance data
        const { data: weekData, error: weekError } = await supabase
          .from('quiz_attempts')
          .select('week_id, score, total_questions')
          .eq('user_id', user.id)
          .eq('quiz_type', 'weekly')
          .order('week_id', { ascending: true });
        
        if (weekError) throw weekError;
        
        // Process weekly performance data
        const processedWeekData = weekData?.reduce((acc: any, curr: any) => {
          const existingWeek = acc.find((item: any) => item.week === `Week ${curr.week_id}`);
          
          if (existingWeek) {
            // If multiple attempts for same week, use the highest score
            const newScore = Math.round((curr.score / curr.total_questions) * 100);
            if (newScore > existingWeek.score) {
              existingWeek.score = newScore;
            }
          } else {
            acc.push({
              week: `Week ${curr.week_id}`,
              score: Math.round((curr.score / curr.total_questions) * 100)
            });
          }
          
          return acc;
        }, []);
        
        setWeeklyPerformance(processedWeekData || []);
        
        // Fetch weak areas (most frequently incorrect answers)
        const { data: incorrectData, error: incorrectError } = await supabase
          .from('incorrect_answers')
          .select('week_id, question_text, correct_answer, count(*)')
          .eq('user_id', user.id)
          .order('count', { ascending: false })
          .limit(3);
        
        if (incorrectError) throw incorrectError;
        setWeakAreas(incorrectData || []);
        
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchUserData();
  }, [user]);

  const renderDashboard = () => {
    if (!user) {
      return (
        <Card className="text-center p-6 my-8">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <AlertCircle className="h-12 w-12 text-amber-500" />
              <h2 className="text-2xl font-semibold">Sign in to view your personalized dashboard</h2>
              <p className="text-muted-foreground mb-4">
                Track your progress, see your quiz history, and get personalized recommendations by signing in.
              </p>
              <Button asChild>
                <Link to="/auth">Sign In / Create Account</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <>
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
          
          <Card className="bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/20 dark:to-purple-800/10">
            <CardContent className="flex flex-col items-center pt-6">
              <Users className="h-10 w-10 mb-2 text-purple-500" />
              <h3 className="text-xl font-semibold">{visitorCount}</h3>
              <p className="text-sm text-muted-foreground">Total Visitors</p>
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
              {weeklyPerformance.length > 0 ? (
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={weeklyPerformance} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="week" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="score" name="Score (%)" fill="#34D399" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center">
                  <p className="text-muted-foreground mb-4">Complete some weekly quizzes to see your performance data.</p>
                  <Button asChild>
                    <Link to="/quiz/weekly">Take a Quiz</Link>
                  </Button>
                </div>
              )}
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
              {quizAttempts.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quiz</TableHead>
                      <TableHead>Score</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quizAttempts.map((attempt) => (
                      <TableRow key={attempt.id}>
                        <TableCell>{attempt.quiz_type === 'weekly' ? `Week ${attempt.week_id}` : 'Mixed Quiz'}</TableCell>
                        <TableCell>{attempt.score}/{attempt.total_questions}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="text-center py-6">
                  <p className="text-muted-foreground mb-4">No quiz attempts yet. Start taking quizzes to track your progress.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        
        {weakAreas.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Areas to Improve
              </CardTitle>
              <CardDescription>Questions you've struggled with most frequently</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weakAreas.map((item, index) => (
                  <div key={index} className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Week {item.week_id}</span>
                      <span className="text-sm text-muted-foreground">Missed {item.count} times</span>
                    </div>
                    <p className="mb-2">{item.question_text}</p>
                    <p className="text-sm">Correct answer: <span className="text-green-600 dark:text-green-400">{item.correct_answer}</span></p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </>
    );
  };

  return (
    <div className="nptel-container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Course Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Course:</span> Conservation Economics | <span className="font-medium">Creator:</span> Aman Chauhan
        </div>
      </div>
      
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-conservation-green"></div>
        </div>
      ) : (
        renderDashboard()
      )}
      
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
