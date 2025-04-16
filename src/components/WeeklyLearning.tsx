
import React, { useState } from 'react';
import { Book, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { weeks } from '@/data/weekData';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const WeeklyLearning = () => {
  const [selectedWeek, setSelectedWeek] = useState("1");

  const handleWeekChange = (value: string) => {
    setSelectedWeek(value);
  };

  return (
    <div className="nptel-container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Learning Materials</h1>
        <Button asChild variant="outline">
          <Link to="/">Back to Dashboard</Link>
        </Button>
      </div>

      <Tabs defaultValue="1" value={selectedWeek} onValueChange={setSelectedWeek} className="space-y-6">
        <div className="bg-white dark:bg-card rounded-lg shadow-md p-4 mb-6">
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Select Week</h2>
            
            <div className="w-full">
              <Select value={selectedWeek} onValueChange={handleWeekChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a week" />
                </SelectTrigger>
                <SelectContent>
                  {weeks.map((week) => (
                    <SelectItem key={week.id} value={week.id.toString()}>
                      Week {week.id}: {week.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {weeks.map((week) => (
          <TabsContent key={week.id} value={week.id.toString()} className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader className="bg-conservation-green/10">
                <CardTitle className="flex items-center space-x-2 text-lg md:text-xl">
                  <Book className="h-5 w-5" />
                  <span>Week {week.id}: {week.title}</span>
                </CardTitle>
                <CardDescription>{week.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="prose max-w-none dark:prose-invert">
                  {week.id === 12 ? (
                    <div>
                      <h3>Conservation Terminology and Ecosystem Services</h3>
                      <p>This week focuses on understanding key conservation terms, wildlife acts, and the classification of ecosystem services.</p>
                      
                      <h4>Key Terms from Wildlife Protection Act 1972</h4>
                      <p>According to the Wildlife Protection Act 1972 (WPA 1972), wildlife includes any animal, aquatic or land vegetation which forms part of any habitat.</p>
                      
                      <h4>Species Classification</h4>
                      <ul>
                        <li><strong>Keystone Species:</strong> Species that have a disproportionately large effect on their environment relative to their abundance, such as the fig tree that bears fruits when food is scarce for animals.</li>
                        <li><strong>Flagship Species:</strong> Charismatic species that serve as symbols for conservation efforts, like the orchids at Sessa orchid sanctuary in Arunachal Pradesh.</li>
                        <li><strong>Umbrella Species:</strong> Species whose conservation indirectly protects many other species, such as tigers and elephants that require large territories.</li>
                      </ul>
                      
                      <h4>Conservation Approaches</h4>
                      <ul>
                        <li><strong>In-situ Conservation:</strong> Protection of species in their natural habitats.</li>
                        <li><strong>Ex-situ Conservation:</strong> Protection of species outside their natural habitats, such as zoos.</li>
                        <li><strong>Conservation Reserves:</strong> Areas with lower threat levels where conservation efforts can be implemented effectively.</li>
                      </ul>
                      
                      <h4>Ecosystem Services</h4>
                      <ul>
                        <li><strong>Supporting Services:</strong> Services that are necessary for the production of all other ecosystem services, such as soil formation and nutrient cycling.</li>
                        <li><strong>Regulating Services:</strong> Benefits obtained from the regulation of ecosystem processes, such as biological control of pest populations.</li>
                        <li><strong>Provisioning Services:</strong> Products obtained from ecosystems, such as food, water, and timber.</li>
                        <li><strong>Cultural Services:</strong> Non-material benefits obtained from ecosystems, such as recreation, spiritual enrichment, and aesthetic experiences.</li>
                      </ul>
                    </div>
                  ) : (
                    <p>Content for Week {week.id} will be available soon.</p>
                  )}
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row justify-between gap-4">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const prevWeek = week.id > 1 ? (week.id - 1).toString() : "1";
                      setSelectedWeek(prevWeek);
                    }}
                    disabled={week.id === 1}
                    className="w-full sm:w-auto"
                  >
                    Previous Week
                  </Button>
                  
                  <Button asChild className="w-full sm:w-auto">
                    <Link to={`/quiz/weekly/${week.id}`} className="flex items-center justify-center space-x-2">
                      <span>Take Quiz</span>
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      const nextWeek = week.id < weeks.length ? (week.id + 1).toString() : weeks.length.toString();
                      setSelectedWeek(nextWeek);
                    }}
                    disabled={week.id === weeks.length}
                    className="w-full sm:w-auto"
                  >
                    Next Week
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default WeeklyLearning;
