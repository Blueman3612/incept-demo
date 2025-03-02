import React from 'react';
import Layout from '@/components/layout/Layout';
import Sidebar from '@/components/layout/Sidebar';

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 p-6">
          {children}
        </div>
      </div>
    </Layout>
  );
} 