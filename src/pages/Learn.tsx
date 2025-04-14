
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WeeklyLearning from '@/components/WeeklyLearning';
import IncorrectAnswersHistory from '@/components/IncorrectAnswersHistory';
import { useAuth } from '@/components/AuthProvider';

const Learn = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="nptel-container">
          {user && <IncorrectAnswersHistory />}
          <WeeklyLearning />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Learn;
