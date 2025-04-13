
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuizSelector from '@/components/QuizSelector';

const QuizHome = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <QuizSelector />
      </main>
      <Footer />
    </div>
  );
};

export default QuizHome;
