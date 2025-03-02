import React from 'react';
import Button from '@/components/ui/Button';

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
    content: `
      <h2>This is a placeholder for ${title}</h2>
      <p>
        This is where the content for the ${title} lesson would be displayed. In a real implementation,
        this content would be fetched from your database based on the category "${category}" and slug "${slug}".
      </p>
      <h3>Key Learning Objectives</h3>
      <ul>
        <li>Understand the fundamentals of ${title}</li>
        <li>Apply concepts in practical scenarios</li>
        <li>Build skills for advanced topics</li>
      </ul>
      <p>
        The content would include detailed explanations, examples, and interactive elements
        specific to this lesson topic.
      </p>
    `
  };
};

export default function LessonPage({ params }: { params: { category: string; slug: string } }) {
  const { category, slug } = params;
  const lessonData = getLessonData(category, slug);

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{lessonData.title}</h1>
        <p className="mt-2 text-lg text-gray-600">
          {lessonData.subtitle}
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: lessonData.content }}
        />
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
} 