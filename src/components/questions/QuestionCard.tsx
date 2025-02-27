import React from 'react';
import { Question } from '@/types/Question';
import Card from '@/components/ui/Card';

interface QuestionCardProps {
  question: Question;
  showAnswer?: boolean;
  onToggleShowAnswer?: () => void;
  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  showAnswer = false,
  onToggleShowAnswer,
  className = '',
}) => {
  const {
    text,
    options,
    correctOption,
    explanation,
    difficulty,
    subject,
    tags,
  } = question;

  // Function to render difficulty badge
  const renderDifficultyBadge = () => {
    const difficultyColors = {
      easy: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800',
    };

    return difficulty ? (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColors[difficulty] || 'bg-gray-100 text-gray-800'}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    ) : null;
  };

  // Function to render tags
  const renderTags = () => {
    return tags?.map((tag, index) => (
      <span
        key={index}
        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-2"
      >
        {tag}
      </span>
    ));
  };

  return (
    <Card
      title={subject ? `Question: ${subject}` : 'Question'}
      className={`${className}`}
      headerActions={renderDifficultyBadge()}
      footer={
        onToggleShowAnswer && (
          <div className="flex justify-end">
            <button
              onClick={onToggleShowAnswer}
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              {showAnswer ? 'Hide Answer' : 'Show Answer'}
            </button>
          </div>
        )
      }
    >
      <div className="space-y-4">
        <p className="text-gray-800 font-medium">{text}</p>

        {options && options.length > 0 && (
          <div className="space-y-2">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-3 rounded-md ${
                  showAnswer && correctOption === index
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-gray-50 border border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <div className={`flex-shrink-0 h-5 w-5 mr-2 rounded-full flex items-center justify-center ${
                    showAnswer && correctOption === index
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <p className="text-gray-700">{option}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {showAnswer && explanation && (
          <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-md">
            <h4 className="text-sm font-medium text-blue-800 mb-1">Explanation:</h4>
            <p className="text-sm text-blue-700">{explanation}</p>
          </div>
        )}

        {tags && tags.length > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap">{renderTags()}</div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QuestionCard; 