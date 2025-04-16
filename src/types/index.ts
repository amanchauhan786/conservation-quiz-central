
// Define types for incorrect answers
export interface IncorrectAnswer {
  week_id: number;
  question_text: string;
  correct_answer: string;
  count: number;
}

// Define types for questions
export interface Question {
  id?: number | string;
  text: string;
  options: string[];
  correctAnswer: string;
  weekId?: number;
}
