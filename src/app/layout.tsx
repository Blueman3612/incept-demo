import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ContentProvider } from '@/context/ContentContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Educational Content Generator API',
  description: 'A demo interface for the educational content generator API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContentProvider>
          {children}
        </ContentProvider>
      </body>
    </html>
  );
}
