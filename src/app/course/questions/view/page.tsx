'use client';

import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import QuestionCard from '@/components/questions/QuestionCard';
import Button from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';
import { questionService } from '@/services/questionService';
import { Question } from '@/types/Question';

export default function ViewQuestionsPage() {
  const { questions, addQuestion, setLoading, loading, error, setError } = useContent();
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleGetQuestion = async () => {
    setLoading(true);
    setError(null);
    setShowAnswer(false);
    
    try {
      const response = await questionService.getRandomQuestion();
      
      if (response.success && response.data) {
        const question = response.data;
        addQuestion(question);
        setCurrentQuestion(question);
      } else {
        setError(response.error || 'Failed to fetch question');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleShowAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">View Questions</h1>
        <Button 
          variant="primary" 
          onClick={handleGetQuestion}
          isLoading={loading}
        >
          Get Random Question
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-md text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader text="Loading question..." />
        </div>
      ) : currentQuestion ? (
        <QuestionCard 
          question={currentQuestion}
          showAnswer={showAnswer}
          onToggleShowAnswer={toggleShowAnswer}
        />
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
          <p className="text-gray-500 mb-4">No question loaded yet.</p>
          <p className="text-gray-700">Click &quot;Get Random Question&quot; to fetch a question from the API.</p>
        </div>
      )}

      {questions.length > 1 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Question History</h2>
          <div className="space-y-4">
            {questions
              .filter(q => q.id !== currentQuestion?.id)
              .slice(0, 5)
              .map((question, index) => (
                <div 
                  key={question.id || index}
                  className="p-4 bg-white border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                  onClick={() => {
                    setCurrentQuestion(question);
                    setShowAnswer(false);
                  }}
                >
                  <p className="text-gray-800 font-medium truncate">{question.text}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {question.subject} - {question.difficulty}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
} 