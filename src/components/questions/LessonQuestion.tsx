'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Question } from '@/types/Question';
import { questionService } from '@/services/questionService';
import QuestionCard from './QuestionCard';
import Button from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';
import { ErrorWithMessage } from '@/types/Error';

interface LessonQuestionProps {
  lessonId: string;
  className?: string;
}

const LessonQuestion: React.FC<LessonQuestionProps> = ({
  lessonId,
  className = '',
}) => {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      const questionElement = document.getElementById('practice-question');
      if (questionElement) {
        const rect = questionElement.getBoundingClientRect();
        setShowScrollButton(
          rect.bottom < 0 || // question is above viewport
          rect.top > window.innerHeight // question is below viewport
        );
      }
    };

    // Check visibility on mount and whenever window is resized or scrolled
    handleVisibility();
    window.addEventListener('resize', handleVisibility);
    window.addEventListener('scroll', handleVisibility);
    
    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
    };
  }, []);

  const scrollToQuestion = () => {
    const questionElement = document.getElementById('practice-question');
    if (questionElement) {
      questionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fetchRandomQuestion = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSelectedAnswer(null);
    setShowExplanation(false);
    
    try {
      const response = await questionService.getRandomQuestion(lessonId);
      if (response.success && response.data) {
        setCurrentQuestion(response.data);
      } else {
        setError(response.error || 'Failed to fetch question');
      }
    } catch (err: unknown) {
      const error = err as ErrorWithMessage;
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  }, [lessonId]);

  useEffect(() => {
    fetchRandomQuestion();
  }, [fetchRandomQuestion]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  return (
    <>
      {showScrollButton && (
        <button
          onClick={scrollToQuestion}
          className="fixed bottom-4 right-4 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full px-6 py-3 shadow-lg transition-all duration-200 z-50 flex items-center space-x-2 cursor-pointer hover:scale-105 active:scale-95 hover:shadow-xl"
          aria-label="Jump to practice question"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="font-medium">Questions</span>
        </button>
      )}
      <div className={`mt-12 ${className}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Practice Question</h2>
        
        {error && (
          <div className="p-4 bg-red-50 border border-red-100 rounded-md text-red-700 mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader text="Loading question..." />
          </div>
        ) : currentQuestion ? (
          <div className="space-y-6">
            <QuestionCard
              question={currentQuestion}
              showAnswer={showExplanation}
              onToggleShowAnswer={() => setShowExplanation(!showExplanation)}
              onSelectAnswer={handleAnswerSelect}
              selectedAnswer={selectedAnswer}
            />

            <div className="flex justify-center">
              <Button
                variant="secondary"
                onClick={fetchRandomQuestion}
                className="mt-4"
              >
                Try Another Question
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            No question available for this lesson.
          </div>
        )}
      </div>
    </>
  );
};

export default LessonQuestion; 