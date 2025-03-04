import React from 'react';
import { Article } from '@/types/Article';
import Card from '@/components/ui/Card';
import LessonQuestion from '@/components/questions/LessonQuestion';

interface ArticleViewerProps {
  article: Article;
  className?: string;
}

const ArticleViewer: React.FC<ArticleViewerProps> = ({
  article,
  className = '',
}) => {
  const {
    title,
    content,
    difficulty,
    subject,
    topic,
    tags,
    summary,
    lesson,
    id,
  } = article;

  // Function to render metadata badges
  const renderMetadataBadge = (label: string, value?: string) => {
    if (!value) return null;
    
    return (
      <div className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800 mr-2 mb-2">
        <span className="font-semibold mr-1">{label}:</span> {value}
      </div>
    );
  };

  // Function to render difficulty badge
  const renderDifficultyBadge = () => {
    if (!difficulty) return null;
    
    const difficultyColors = {
      easy: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColors[difficulty] || 'bg-gray-100 text-gray-800'}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    );
  };

  // Function to render tags
  const renderTags = () => {
    if (!tags || tags.length === 0) return null;
    
    return (
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <Card
        title={lesson || title}
        className={`${className}`}
        headerActions={renderDifficultyBadge()}
      >
        <div className="space-y-4">
          {summary && (
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-md mb-4">
              <h4 className="text-sm font-medium text-blue-800 mb-1">Summary:</h4>
              <p className="text-sm text-blue-700">{summary}</p>
            </div>
          )}
          
          <div className="flex flex-wrap">
            {renderMetadataBadge('Subject', subject)}
            {renderMetadataBadge('Topic', topic)}
          </div>

          <div className="article-content mt-4 prose max-w-none">
            {content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          {renderTags()}
        </div>
      </Card>

      {id && <LessonQuestion lessonId={id} />}
    </div>
  );
};

export default ArticleViewer; 