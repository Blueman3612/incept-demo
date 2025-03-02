import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function LessonIndexPage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Course Library</h1>
        <p className="mt-2 text-lg text-gray-600">
          Browse our collection of educational lessons
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Select a Lesson Category</h2>
          
          <p className="mb-6">
            Please select a lesson category from the sidebar to view specific lessons.
            Our content covers a wide range of educational topics across three main categories:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <h3 className="font-medium text-lg mb-2">Reading Fundamentals</h3>
              <p className="text-sm text-gray-600 mb-4">
                Core skills for effective reading including fluency, vocabulary acquisition, and genre understanding.
              </p>
              <Link href="/course/lesson/reading-fundamentals/fluency">
                <Button variant="outline" size="sm">
                  Explore Category
                </Button>
              </Link>
            </div>
            
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <h3 className="font-medium text-lg mb-2">Reading Comprehension</h3>
              <p className="text-sm text-gray-600 mb-4">
                Tools for understanding and analyzing text including main ideas, text structure, and character analysis.
              </p>
              <Link href="/course/lesson/reading-comprehension/main-idea">
                <Button variant="outline" size="sm">
                  Explore Category
                </Button>
              </Link>
            </div>
            
            <div className="border rounded-lg p-4 hover:bg-gray-50">
              <h3 className="font-medium text-lg mb-2">Language Conventions</h3>
              <p className="text-sm text-gray-600 mb-4">
                Rules and structures of language including grammar, punctuation, and standard English usage.
              </p>
              <Link href="/course/lesson/language-conventions/grammar">
                <Button variant="outline" size="sm">
                  Explore Category
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 