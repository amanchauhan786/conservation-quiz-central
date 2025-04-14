
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeeklyLearning from '@/components/WeeklyLearning';

const Learn = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="nptel-container">
          <WeeklyLearning />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
