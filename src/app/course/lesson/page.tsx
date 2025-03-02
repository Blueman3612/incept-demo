"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LessonIndexPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to the first lesson (Reading Fluency)
    router.push('/course/lesson/reading-fundamentals/fluency');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>
        <p className="mt-4 text-lg text-gray-600">Redirecting to lesson content...</p>
      </div>
    </div>
  );
} 