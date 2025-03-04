"use client";

import React, { useState, useEffect } from 'react';
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

// Define the categories and subcategories
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

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    'reading-fundamentals': true,
    'reading-comprehension': false,
    'language-conventions': false
  });

  // Auto-open the category of the current path
  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/');
      const currentCategory = segments[3]; // /course/lesson/[category]/[slug]
      
      if (currentCategory && categories.some(cat => cat.slug === currentCategory)) {
        setOpenCategories(prev => ({
          ...prev,
          [currentCategory]: true
        }));
      }
    }
  }, [pathname]);

  const toggleCategory = (slug: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [slug]: !prev[slug]
    }));
  };

  return (
    <div className="w-64 flex-shrink-0 border-r border-gray-200 bg-white">
      {/* Make the sidebar content sticky */}
      <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto" 
        style={{ 
          scrollbarWidth: 'thin', 
          scrollbarColor: '#d1d5db transparent',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            width: 8px;
          }
          div::-webkit-scrollbar-track {
            background: transparent;
          }
          div::-webkit-scrollbar-thumb {
            background-color: #d1d5db;
            border-radius: 20px;
            border: 2px solid transparent;
          }
          div::-webkit-scrollbar-thumb:hover {
            background-color: #9ca3af;
          }
        `}</style>
        <div className="px-3 py-4">
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.slug} className="mb-4">
                <button
                  onClick={() => toggleCategory(category.slug)}
                  className={`flex items-center justify-between w-full px-3 py-2.5 text-sm font-semibold rounded-md transition-all duration-200 
                    ${openCategories[category.slug] 
                      ? 'bg-blue-50 text-blue-700 shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                    active:scale-[0.98] hover:shadow-sm cursor-pointer
                  `}
                >
                  <span className="flex items-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={1.5} 
                      stroke="currentColor" 
                      className="w-4 h-4 mr-2 flex-shrink-0"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                    {category.title}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`w-4 h-4 transition-transform duration-300 ${openCategories[category.slug] ? 'transform rotate-180' : ''}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                
                {/* Animate the dropdown */}
                <div 
                  className={`mt-1 ml-5 space-y-1 overflow-hidden transition-all duration-300 ease-in-out
                    ${openCategories[category.slug] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  {category.items.map((item) => {
                    // Create the dynamic route path
                    const href = `/course/lesson/${item.category}/${item.slug}`;
                    const isActive = pathname === href;
                    
                    return (
                      <Link
                        key={`${item.category}-${item.slug}`}
                        href={href}
                        className={`flex items-center px-3 py-2 text-sm rounded-md transition-all duration-200 
                          ${isActive
                            ? 'bg-blue-100 text-blue-700 font-medium shadow-sm'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 hover:pl-4'
                          }
                          border-l-2 ${isActive ? 'border-blue-500' : 'border-transparent'}
                          active:scale-[0.98]
                        `}
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          strokeWidth={1.5} 
                          stroke="currentColor" 
                          className={`w-3.5 h-3.5 mr-2 flex-shrink-0 ${isActive ? 'text-blue-700' : 'text-gray-400'}`}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 