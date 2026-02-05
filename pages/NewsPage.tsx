import React, { useState, useEffect } from "react";
import { NewsArticle } from "../types";
import { client } from "../sanityClient";
import Spinner from "../components/Spinner";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data/placeholderData";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const NewsPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch total count for pagination logic
        const countQuery = 'count(*[_type == "post"])';
        const count = await client.fetch(countQuery);
        setTotalArticles(count);

        // Fetch articles for the current page
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const query = `*[_type == "post"] | order(publishedAt desc) [${start}...${end}]`;
        const newsData = await client.fetch(query);

        if (newsData) {
          const mappedArticles: NewsArticle[] = newsData.map((item: any) => ({
            id: item._id,
            title: item.title,
            content: item.body || "", // content mapped to body
            image_url: item.mainImage
              ? urlFor(item.mainImage).width(600).url()
              : null, // Generate URL
            date: item.publishedAt, // Map publishedAt to date
          }));
          setArticles(mappedArticles);
        }
      } catch (err: any) {
        setError(text.newsError);
        console.error("Error fetching news articles:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lang, text.newsError, currentPage]);

  const totalPages = Math.ceil(totalArticles / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-sky-600 font-semibold tracking-wide uppercase">
            {text.newsTitle}
          </h2>
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
            <>
              <div className="grid gap-10 lg:grid-cols-2">
                {articles.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="h-72 w-full object-cover"
                        src={
                          article.image_url || "https://picsum.photos/600/400"
                        }
                        alt={article.title}
                      />
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-sky-600">
                          {new Date(article.date).toLocaleDateString(
                            lang === "ar" ? "ar-EG" : "en-US"
                          )}
                        </p>
                        <div className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {article.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500 line-clamp-4">
                            {article.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center space-x-4 rtl:space-x-reverse">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 border border-sky-600 text-sky-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-50 transition-colors"
                  >
                    {lang === "ar" ? "السابق" : "Previous"}
                  </button>
                  <span className="text-gray-700">
                    {lang === "ar"
                      ? `صفحة ${currentPage} من ${totalPages}`
                      : `Page ${currentPage} of ${totalPages}`}
                  </span>
                  <button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 border border-sky-600 text-sky-600 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-sky-50 transition-colors"
                  >
                    {lang === "ar" ? "التالي" : "Next"}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
