'use client';

import React, { useState } from 'react';
import { useContent } from '@/context/ContentContext';
import ArticleViewer from '@/components/articles/ArticleViewer';
import Button from '@/components/ui/Button';
import Loader from '@/components/ui/Loader';
import { articleService } from '@/services/articleService';
import { Article } from '@/types/Article';

export default function ViewArticlesPage() {
  const { articles, addArticle, setLoading, loading, error, setError } = useContent();
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);

  const handleGetArticle = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await articleService.getRandomArticle();
      
      if (response.success && response.data) {
        const article = response.data;
        addArticle(article);
        setCurrentArticle(article);
      } else {
        setError(response.error || 'Failed to fetch article');
      }
    } catch (err: any) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">View Articles</h1>
        <Button 
          variant="primary" 
          onClick={handleGetArticle}
          isLoading={loading}
        >
          Get Random Article
        </Button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-100 rounded-md text-red-700">
          {error}
        </div>
      )}

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader text="Loading article..." />
        </div>
      ) : currentArticle ? (
        <ArticleViewer article={currentArticle} />
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
          <p className="text-gray-500 mb-4">No article loaded yet.</p>
          <p className="text-gray-700">Click &quot;Get Random Article&quot; to fetch an article from the API.</p>
        </div>
      )}

      {articles.length > 1 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Article History</h2>
          <div className="space-y-4">
            {articles
              .filter(a => a.id !== currentArticle?.id)
              .slice(0, 5)
              .map((article, index) => (
                <div 
                  key={article.id || index}
                  className="p-4 bg-white border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                  onClick={() => setCurrentArticle(article)}
                >
                  <p className="text-gray-800 font-medium">{article.title}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {article.subject} - {article.topic}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
} 