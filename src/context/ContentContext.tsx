import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Question } from '@/types/Question';
import { Article } from '@/types/Article';
import { ContentType } from '@/types/Api';

interface ContentContextType {
  // State
  questions: Question[];
  articles: Article[];
  currentQuestion: Question | null;
  currentArticle: Article | null;
  loading: boolean;
  error: string | null;
  
  // Actions
  addQuestion: (question: Question) => void;
  addArticle: (article: Article) => void;
  setCurrentQuestion: (question: Question | null) => void;
  setCurrentArticle: (article: Article | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearContent: (type?: ContentType) => void;
}

// Create context with default values
const ContentContext = createContext<ContentContextType>({
  questions: [],
  articles: [],
  currentQuestion: null,
  currentArticle: null,
  loading: false,
  error: null,
  
  addQuestion: () => {},
  addArticle: () => {},
  setCurrentQuestion: () => {},
  setCurrentArticle: () => {},
  setLoading: () => {},
  setError: () => {},
  clearContent: () => {},
});

// Hook for using the content context
export const useContent = () => useContext(ContentContext);

// Provider component
export const ContentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const addQuestion = (question: Question) => {
    // Add question if it doesn't already exist in the array
    if (!questions.some(q => q.id === question.id)) {
      setQuestions(prev => [...prev, question]);
    }
  };
  
  const addArticle = (article: Article) => {
    // Add article if it doesn't already exist in the array
    if (!articles.some(a => a.id === article.id)) {
      setArticles(prev => [...prev, article]);
    }
  };
  
  const clearContent = (type?: ContentType) => {
    if (!type || type === ContentType.QUESTION) {
      setQuestions([]);
      setCurrentQuestion(null);
    }
    
    if (!type || type === ContentType.ARTICLE) {
      setArticles([]);
      setCurrentArticle(null);
    }
  };
  
  const value = {
    questions,
    articles,
    currentQuestion,
    currentArticle,
    loading,
    error,
    
    addQuestion,
    addArticle,
    setCurrentQuestion,
    setCurrentArticle,
    setLoading,
    setError,
    clearContent,
  };
  
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};

export default ContentContext; 