
// Define types for incorrect answers
export interface IncorrectAnswer {
  week_id: number;
  question_text: string;
  correct_answer: string;
  count: number;
}

// Define types for questions
export interface Question {
  id?: number;
  text: string;
  options: string[];
  correctAnswer: string;
  weekId?: number;
}

// Export Week interface if it doesn't exist already
export interface Week {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}
