export interface Article {
  id?: string;
  title: string;
  content: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  subject?: string;
  topic?: string;
  ageGroup?: 'elementary' | 'middle' | 'high' | 'college';
  tags?: string[];
  gradeScore?: number;
  gradeFeedback?: string;
  summary?: string;
}

export interface GeneratedArticle {
  article: Article;
}

export interface GradedArticle {
  score: number;
  feedback: string;
}

export interface TaggedArticle {
  tags: string[];
} 