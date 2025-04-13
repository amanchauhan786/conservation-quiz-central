
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeeklyQuiz from '@/components/WeeklyQuiz';

const WeekQuiz = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <WeeklyQuiz />
      </main>
      <Footer />
    </div>
  );
};

export default WeekQuiz;
