import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function CoursePage() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Educational Content Course</h1>
        <p className="mt-2 text-lg text-gray-600">
          Explore our interactive lessons and question generation tools
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">Welcome to the Educational Content Course</h2>
          <p className="mb-4">
            This course showcases our educational content generation API. Select a lesson category from 
            the sidebar to view content for that specific lesson.
          </p>
          <p className="mb-4">
            For each lesson, you'll be able to:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li>Read the lesson article</li>
            <li>Get pre-generated questions related to the lesson</li>
            <li>Generate new custom questions on the fly</li>
          </ul>
          <p className="mb-6">
            This interactive course helps you explore how our API can generate relevant, 
            educational content across various reading and language topics.
          </p>
          
          <div className="mt-8 flex justify-center">
            <Link href="/course/lesson">
              <Button variant="primary" size="lg">
                Browse Lessons
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 