
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MixedQuiz from '@/components/MixedQuiz';

const MixedQuizPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <MixedQuiz />
      </main>
      <Footer />
    </div>
  );
};

export default MixedQuizPage;
