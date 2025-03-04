"use client";

import React from 'react';
import Image from 'next/image';

interface ArticleContentProps {
  content: string;
  title: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content, title }) => {
  // Function to process content and add formatting
  const formatContent = (content: string) => {
    // Split content into sections
    const sections = content.split('**');
    
    // Process each section and add formatting
    return sections.map((section, index) => {
      // If it's a header (odd index in the split array)
      if (index % 2 === 1) {
        return (
          <h2 key={`header-${index}`} className="text-2xl font-bold text-blue-800 mt-8 mb-4">
            {section}
          </h2>
        );
      }
      
      // Process regular paragraphs
      const paragraphs = section.split('\n\n').filter(p => p.trim());
      return paragraphs.map((p, pIndex) => {
        // Check if this is an image
        const imageMatch = p.match(/!\[(.*?)\]\((.*?)\)/);
        if (imageMatch) {
          const [, altText, imagePath] = imageMatch;
          return (
            <div key={`img-${index}-${pIndex}`} className="my-6 flex justify-center">
              <div className="relative w-full max-w-2xl h-[300px]">
                <Image
                  src={imagePath}
                  alt={altText}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="rounded-lg"
                />
              </div>
            </div>
          );
        }

        // Check if this is a numbered list item
        const numberedListMatch = p.match(/^\d+\.\s+(.*)/);
        if (numberedListMatch) {
          return (
            <div key={`p-${index}-${pIndex}`} className="flex gap-4 mb-4">
              <span className="font-bold text-blue-600 text-lg">{numberedListMatch[0].split('.')[0]}.</span>
              <p className="text-gray-700 text-lg leading-relaxed flex-1">
                {formatEmphasizedText(numberedListMatch[1].trim())}
              </p>
            </div>
          );
        }

        // Regular paragraph with emphasized text
        return (
          <p 
            key={`p-${index}-${pIndex}`} 
            className="text-gray-700 text-lg leading-relaxed mb-4"
          >
            {formatEmphasizedText(p.trim())}
          </p>
        );
      });
    });
  };

  // Function to format emphasized text (text between single asterisks)
  const formatEmphasizedText = (text: string) => {
    // First handle any inline images
    const parts = text.split(/(!?\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const imageMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (imageMatch) {
        const [, altText, imagePath] = imageMatch;
        return (
          <span key={index} className="inline-block mx-2">
            <Image
              src={imagePath}
              alt={altText}
              width={24}
              height={24}
              className="inline-block align-text-bottom"
            />
          </span>
        );
      }

      // Handle emphasized text
      const emphasisParts = part.split(/(\*[^*]+\*)/g);
      return emphasisParts.map((emphPart, emphIndex) => {
        if (emphPart.startsWith('*') && emphPart.endsWith('*')) {
          return (
            <em key={`${index}-${emphIndex}`} className="font-medium text-blue-700 not-italic">
              {emphPart.slice(1, -1)}
            </em>
          );
        }
        return emphPart;
      });
    });
  };

  // Function to get image path for a lesson
  const getImagePath = (title: string) => {
    // Convert title to kebab case for file naming
    const filename = title.toLowerCase()
      .replace(/vocabulary acquisition/g, 'vocabulary')
      .replace(/academic vocabulary/g, 'academic')
      .replace(/main idea and supporting details/g, 'main-idea')
      .replace(/textual details/g, 'textual-details')
      .replace(/text structure and organization/g, 'text-structure')
      .replace(/integration of knowledge/g, 'knowledge-integration')
      .replace(/point of view/g, 'point-of-view')
      .replace(/character analysis/g, 'character-analysis')
      .replace(/theme and summary/g, 'theme-summary')
      .replace(/figurative language/g, 'figurative-language')
      .replace(/grammar and usage/g, 'grammar')
      .replace(/capitalization and punctuation/g, 'capitalization')
      .replace(/language conventions/g, 'conventions')
      .replace(/\s+/g, '-');
    
    return `/images/${filename}.jpg`;
  };

  return (
    <article className="bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden">
      <div className="relative w-full h-[400px]">
        <Image
          src={getImagePath(title)}
          alt={title}
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
          onError={(e) => {
            // @ts-expect-error - Next.js Image onError event type is incomplete
            e.target.src = '/images/reading-fluency.jpg';
          }}
        />
      </div>
      
      <div className="p-4 sm:p-6 max-w-4xl mx-auto">
        <div className="prose prose-lg max-w-none">
          {formatContent(content)}
        </div>
      </div>
    </article>
  );
};

export default ArticleContent; 