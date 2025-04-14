
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from './AuthProvider';
import { Button } from "@/components/ui/button";
import { AlertCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IncorrectAnswer } from '@/types';
import { weeks } from '@/data/weekData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useIsMobile } from '@/hooks/use-mobile';

const IncorrectAnswersHistory = () => {
  const { user } = useAuth();
  const [incorrectAnswers, setIncorrectAnswers] = useState<IncorrectAnswer[]>([]);
  const [selectedWeek, setSelectedWeek] = useState<string>("all");
  const [loading, setLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!user) return;
    
    async function fetchIncorrectAnswers() {
      try {
        setLoading(true);
        
        // Using a different approach without .group() which is causing issues
        const { data, error } = await supabase
          .from('incorrect_answers')
          .select('*')
          .eq('user_id', user.id);
        
        if (error) throw error;
        
        // Process the data to group by question and count occurrences
        const groupedData = data.reduce((acc: any[], item) => {
          const existingItem = acc.find(
            x => x.question_text === item.question_text && x.week_id === item.week_id
          );
          
          if (existingItem) {
            existingItem.count += 1;
          } else {
            acc.push({
              week_id: item.week_id,
              question_text: item.question_text,
              correct_answer: item.correct_answer,
              count: 1
            });
          }
          
          return acc;
        }, []);
        
        // Sort by week_id and then by count (descending)
        const sortedData = groupedData.sort((a, b) => {
          if (a.week_id !== b.week_id) {
            return a.week_id - b.week_id;
          }
          return b.count - a.count;
        });
        
        setIncorrectAnswers(sortedData);
      } catch (error) {
        console.error('Error fetching incorrect answers:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchIncorrectAnswers();
  }, [user]);
  
  // Get unique weeks from incorrect answers
  const uniqueWeeks = Array.from(new Set(incorrectAnswers.map(item => item.week_id)))
    .sort((a, b) => a - b);
  
  // Filter answers by selected week
  const filteredAnswers = selectedWeek === "all" 
    ? incorrectAnswers 
    : incorrectAnswers.filter(item => item.week_id === parseInt(selectedWeek));
  
  return (
    <Card className="mb-8">
      <CardHeader className="bg-red-100 dark:bg-red-900/20">
        <CardTitle className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          Areas to Improve
        </CardTitle>
        <CardDescription>
          Questions you've answered incorrectly multiple times
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {loading ? (
          <div className="p-8 text-center">
            <p>Loading your areas for improvement...</p>
          </div>
        ) : incorrectAnswers.length === 0 ? (
          <div className="p-8 text-center">
            <p>No incorrect answers found. Keep taking quizzes to see your improvement areas!</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Filter by week:
              </label>
              {isMobile ? (
                <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Weeks</SelectItem>
                    {uniqueWeeks.map((weekId) => (
                      <SelectItem key={weekId} value={weekId.toString()}>
                        Week {weekId}: {weeks.find(w => w.id === weekId)?.title || ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <Tabs value={selectedWeek} onValueChange={setSelectedWeek} className="w-full">
                  <TabsList className="w-full flex flex-wrap mb-4">
                    <TabsTrigger value="all">All Weeks</TabsTrigger>
                    {uniqueWeeks.map((weekId) => (
                      <TabsTrigger key={weekId} value={weekId.toString()}>
                        Week {weekId}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              )}
            </div>
            
            <div className="space-y-4">
              {filteredAnswers.map((item, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-red-50 dark:bg-red-900/10 rounded-lg border border-red-100 dark:border-red-900/20"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-medium text-red-600">
                      Week {item.week_id} • Missed {item.count} times
                    </span>
                    <Button variant="link" size="sm" asChild className="p-0 h-auto">
                      <Link to={`/learn`} className="text-xs flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        Review
                      </Link>
                    </Button>
                  </div>
                  <h4 className="font-medium">{item.question_text}</h4>
                  <p className="text-sm mt-2">
                    <span className="text-muted-foreground">Correct answer: </span> 
                    <span className="text-green-600 dark:text-green-400">{item.correct_answer}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default IncorrectAnswersHistory;
