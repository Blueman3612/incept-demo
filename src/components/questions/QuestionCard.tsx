import React from 'react';
import { Question } from '@/types/Question';
import Card from '@/components/ui/Card';

interface QuestionCardProps {
  question: Question;
  showAnswer?: boolean;
  onToggleShowAnswer?: () => void;
  onSelectAnswer?: (index: number) => void;
  selectedAnswer?: number | null;
  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  showAnswer = false,
  onSelectAnswer,
  selectedAnswer = null,
  className = '',
}) => {
  const {
    text,
    options,
    correctOption,
    explanation,
    wrongAnswerExplanations,
    difficulty,
    subject,
    tags,
  } = question;

  // Function to render difficulty badge
  const renderDifficultyBadge = () => {
    if (!difficulty) return null;

    const difficultyColors: Record<string, string> = {
      easy: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800',
      // Default colors for unknown difficulty levels
      default: 'bg-gray-100 text-gray-800'
    };

    const colorClass = difficultyColors[difficulty.toLowerCase()] || difficultyColors.default;

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1).toLowerCase()}
      </span>
    );
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

  const isCorrect = selectedAnswer === correctOption;
  const showWrongAnswerExplanation = selectedAnswer !== null && !isCorrect && wrongAnswerExplanations?.[selectedAnswer];

  return (
    <div id="practice-question">
      <Card
        title={subject ? `Question: ${subject}` : 'Question'}
        className={`${className}`}
        headerActions={renderDifficultyBadge()}
      >
        <div className="space-y-4">
          <div className="whitespace-pre-wrap text-gray-800 font-medium">{text}</div>

          {options && options.length > 0 && (
            <div className="space-y-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => onSelectAnswer?.(index)}
                  disabled={showAnswer || selectedAnswer !== null}
                  className={`w-full p-3 rounded-md transition-colors ${
                    showAnswer || selectedAnswer !== null
                      ? selectedAnswer === index
                        ? isCorrect
                          ? 'bg-green-50 border border-green-200 text-green-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                        : correctOption === index && showAnswer
                        ? 'bg-green-50 border border-green-200 text-green-800'
                        : 'bg-gray-50 border border-gray-200 text-gray-700'
                      : 'bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 text-gray-700 cursor-pointer'
                  }`}
                >
                  <div className="flex items-start">
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + index)}.</span>
                    <span className="text-left font-medium">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {showWrongAnswerExplanation && (
            <div className="p-4 bg-red-50 border border-red-100 rounded-md">
              <p className="text-red-700">{wrongAnswerExplanations[selectedAnswer]}</p>
            </div>
          )}

          {selectedAnswer !== null && !isCorrect && explanation && (
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-md">
              <h4 className="text-sm font-medium text-blue-800 mb-1">Solution:</h4>
              <p className="text-blue-700">{explanation}</p>
            </div>
          )}

          {renderTags()}
        </div>
      </Card>
    </div>
  );
};

export default QuestionCard; 