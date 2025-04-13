
import React from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuizOptionProps {
  option: string;
  selected: boolean;
  isCorrect?: boolean | null;
  isChecking: boolean;
  onSelect: () => void;
}

const QuizOption = ({ option, selected, isCorrect, isChecking, onSelect }: QuizOptionProps) => {
  const getOptionClasses = () => {
    if (!isChecking) {
      return selected ? 'selected' : '';
    }
    
    if (selected) {
      return isCorrect === true ? 'correct' : 'incorrect';
    }
    
    return isCorrect === true ? 'correct' : '';
  };

  return (
    <div 
      className={cn("answer-option", getOptionClasses())}
      onClick={() => !isChecking && onSelect()}
    >
      <div className="flex items-center justify-between w-full">
        <span>{option}</span>
        {isChecking && selected && (
          <>
            {isCorrect ? (
              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
            ) : (
              <X className="h-5 w-5 text-red-600 dark:text-red-400" />
            )}
          </>
        )}
        {isChecking && !selected && isCorrect && (
          <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
        )}
      </div>
    </div>
  );
};

export default QuizOption;
