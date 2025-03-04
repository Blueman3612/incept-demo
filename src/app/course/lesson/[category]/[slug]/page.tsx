import React from 'react';
import { getArticleByLessonId } from '@/services/articleService';
import ArticleContent from '@/components/articles/ArticleContent';
import LessonQuestion from '@/components/questions/LessonQuestion';

// In a real app, this would be fetched from a database
const getLessonData = (category: string, slug: string) => {
  // Mock data for demonstration
  const lessonTitles: Record<string, Record<string, string>> = {
    'reading-fundamentals': {
      'fluency': 'Reading Fluency',
      'vocabulary': 'Vocabulary Acquisition',
      'academic-vocabulary': 'Academic Vocabulary',
      'genre-studies': 'Genre Studies',
    },
    'reading-comprehension': {
      'main-idea': 'Main Idea and Supporting Details',
      'textual-details': 'Textual Details',
      'structure': 'Text Structure and Organization',
      'knowledge-integration': 'Integration of Knowledge',
      'point-of-view': 'Point of View',
      'character-analysis': 'Character Analysis',
      'theme-summary': 'Theme and Summary',
      'figurative-language': 'Figurative Language',
    },
    'language-conventions': {
      'grammar': 'Grammar and Usage',
      'capitalization': 'Capitalization and Punctuation',
      'conventions': 'Language Conventions',
    }
  };

  const subtitleMap: Record<string, string> = {
    'reading-fundamentals': 'Building core reading skills',
    'reading-comprehension': 'Understanding and analyzing text',
    'language-conventions': 'Mastering language rules and structure',
  };

  // Get the title based on category and slug
  const title = lessonTitles[category]?.[slug] || 'Lesson Title';
  
  // Generate a subtitle
  const subtitle = subtitleMap[category] || 'Learning essential skills';

  return {
    title,
    subtitle,
  };
};

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function LessonPage({ params }: PageProps) {
  const { category, slug } = await params;
  const lessonData = getLessonData(category, slug);
  const lessonTitle = lessonData.title;
  
  try {
    const article = await getArticleByLessonId(lessonTitle);

    return (
      <div className="max-w-5xl mx-auto px-2 sm:px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {article ? article.title : lessonData.title}
          </h1>
        </div>

        {article ? (
          <>
            <ArticleContent 
              content={article.content}
              title={lessonTitle}
            />
            <LessonQuestion lessonId={lessonTitle} />
          </>
        ) : (
          <div className="text-center p-8 text-gray-500 bg-white rounded-xl border border-gray-200">
            <p>No article content available for this lesson yet.</p>
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error('Error in lesson page:', error);
    return (
      <div className="text-center text-red-500 p-8">
        <p>Error loading lesson content. Please try again later.</p>
      </div>
    );
  }
} 