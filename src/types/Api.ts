export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export enum ContentType {
  QUESTION = 'question',
  ARTICLE = 'article'
}

export interface GenerateParams {
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  ageGroup?: 'elementary' | 'middle' | 'high' | 'college';
  subject?: string;
  length?: number;
}

export interface GradeParams {
  content: string;
  criteria?: string[];
}

export interface TagParams {
  content: string;
  customTags?: string[];
} 