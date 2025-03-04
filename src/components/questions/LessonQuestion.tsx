'use client';

import React, { useState, useEffect } from 'react';
import { Question } from '@/types/Question';
import { questionService } from '@/services/questionService';
import QuestionCard from './QuestionCard';
import Button from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';

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

  const fetchRandomQuestion = async () => {
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
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuestion();
  }, [lessonId]);

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
  };

  return (
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
  );
};

export default LessonQuestion; 