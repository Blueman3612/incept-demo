import React from 'react';
import Button from '@/components/ui/Button';
import { getArticleByLessonId } from '@/services/articleService';

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
  // Await the params object before using it
  const { category, slug } = await params;
  console.log('Route params:', { category, slug });
  
  const lessonData = getLessonData(category, slug);
  console.log('Lesson data:', lessonData);
  
  // Use the actual lesson title instead of generating an ID
  const lessonTitle = lessonData.title;
  console.log('Looking up lesson by title:', lessonTitle);
  
  try {
    // Fetch the article from Supabase using the lesson title
    const article = await getArticleByLessonId(lessonTitle);
    console.log('Article fetch result:', article);

    return (
      <div className="space-y-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{lessonData.title}</h1>
          <p className="mt-2 text-lg text-gray-600">
            {lessonData.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
          {article ? (
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          ) : (
            <div className="text-center text-gray-500">
              <p>No article content available for this lesson yet.</p>
            </div>
          )}
        </div>

        <div className="flex space-x-4 mt-6">
          <Button variant="primary">
            Get Question
          </Button>
          <Button variant="outline">
            Generate Question
          </Button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in lesson page:', error);
    return (
      <div className="text-center text-red-500">
        <p>Error loading lesson content. Please try again later.</p>
      </div>
    );
  }
} 