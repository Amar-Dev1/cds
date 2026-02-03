import React, { useState, useEffect } from 'react';
import { NewsArticle } from '../types';
import Spinner from '../components/Spinner';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../data/placeholderData';

const NewsPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = () => {
      setLoading(true);
      setError(null);
      // Simulate an API call
      setTimeout(() => {
        try {
          const newsData = data[lang].newsArticles;
          setArticles(newsData || []);
        } catch (err: any) {
          setError(text.newsError);
          console.error("Error fetching news articles:", err);
        } finally {
          setLoading(false);
        }
      }, 500); // 0.5 second delay
    };

    fetchArticles();
  }, [lang, text.newsError]);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{text.newsTitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {text.newsSubtitle}
          </p>
        </div>

        <div className="mt-12">
          {loading && (
            <div className="flex justify-center">
              <Spinner />
            </div>
          )}
          {error && (
            <div className="text-center text-red-500">
              <p>{error}</p>
            </div>
          )}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center text-gray-500">
              <p>{text.newsEmpty}</p>
            </div>
          )}
          {!loading && !error && articles.length > 0 && (
            <div className="grid gap-10 lg:grid-cols-2">
              {articles.map((article) => (
                <div key={article.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img className="h-64 w-full object-cover" src={article.image_url || 'https://picsum.photos/600/400'} alt={article.title} />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-green-600">
                        {new Date(article.created_at).toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-US')}
                      </p>
                      <div className="block mt-2">
                        <p className="text-xl font-semibold text-gray-900">{article.title}</p>
                        <p className="mt-3 text-base text-gray-500 line-clamp-4">{article.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
