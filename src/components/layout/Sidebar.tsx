"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SubCategory {
  label: string;
  slug: string;
  category: string;
}

interface Category {
  title: string;
  slug: string;
  items: SubCategory[];
}

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'reading-fundamentals': true,
    'reading-comprehension': false,
    'language-conventions': false
  });

  // Define the categories and subcategories from the screenshot
  const categories: Category[] = [
    {
      title: 'Reading Fundamentals',
      slug: 'reading-fundamentals',
      items: [
        { label: 'Reading Fluency', slug: 'fluency', category: 'reading-fundamentals' },
        { label: 'Vocabulary Acquisition', slug: 'vocabulary', category: 'reading-fundamentals' },
        { label: 'Academic Vocabulary', slug: 'academic-vocabulary', category: 'reading-fundamentals' },
        { label: 'Genre Studies', slug: 'genre-studies', category: 'reading-fundamentals' },
      ]
    },
    {
      title: 'Reading Comprehension',
      slug: 'reading-comprehension',
      items: [
        { label: 'Main Idea and Supporting Details', slug: 'main-idea', category: 'reading-comprehension' },
        { label: 'Textual Details', slug: 'textual-details', category: 'reading-comprehension' },
        { label: 'Text Structure and Organization', slug: 'structure', category: 'reading-comprehension' },
        { label: 'Integration of Knowledge', slug: 'knowledge-integration', category: 'reading-comprehension' },
        { label: 'Point of View', slug: 'point-of-view', category: 'reading-comprehension' },
        { label: 'Character Analysis', slug: 'character-analysis', category: 'reading-comprehension' },
        { label: 'Theme and Summary', slug: 'theme-summary', category: 'reading-comprehension' },
        { label: 'Figurative Language', slug: 'figurative-language', category: 'reading-comprehension' },
      ]
    },
    {
      title: 'Language Conventions',
      slug: 'language-conventions',
      items: [
        { label: 'Grammar and Usage', slug: 'grammar', category: 'language-conventions' },
        { label: 'Capitalization and Punctuation', slug: 'capitalization', category: 'language-conventions' },
        { label: 'Language Conventions', slug: 'conventions', category: 'language-conventions' },
      ]
    }
  ];

  const toggleCategory = (slug: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  return (
    <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-white">
      <div className="h-full px-3 py-4 overflow-y-auto">
        <div className="space-y-1">
          {categories.map((category) => (
            <div key={category.slug} className="mb-4">
              <button
                onClick={() => toggleCategory(category.slug)}
                className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-gray-700 rounded-md hover:bg-gray-50"
              >
                <span>{category.title}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`w-4 h-4 transition-transform ${openCategories[category.slug] ? 'transform rotate-180' : ''}`}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              {openCategories[category.slug] && (
                <div className="mt-1 ml-4 space-y-1">
                  {category.items.map((item) => {
                    // Create the dynamic route path
                    const href = `/course/lesson/${item.category}/${item.slug}`;
                    const isActive = pathname === href;
                    
                    return (
                      <Link
                        key={`${item.category}-${item.slug}`}
                        href={href}
                        className={`flex items-center px-3 py-2 text-sm rounded-md ${
                          isActive
                            ? 'bg-gray-100 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 