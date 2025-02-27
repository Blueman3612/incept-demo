export interface Question {
  id?: string;
  text: string;
  options?: string[];
  correctOption?: number;
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  subject?: string;
  topic?: string;
  ageGroup?: 'elementary' | 'middle' | 'high' | 'college';
  tags?: string[];
  gradeScore?: number;
  gradeFeedback?: string;
}

export interface GeneratedQuestion {
  question: Question;
}

export interface GradedQuestion {
  score: number;
  feedback: string;
}

export interface TaggedQuestion {
  tags: string[];
} 