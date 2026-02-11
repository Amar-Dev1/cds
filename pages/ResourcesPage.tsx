import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data/placeholderData";
import { client } from "../sanityClient";
import { Resource } from "../types";

const ResourcesPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const query = `*[_type == "resource"] {
          _id,
          title,
          "pdfUrl": pdfFile.asset->url,
          "coverImageUrl": coverImage.asset->url
        }`;
        const data = await client.fetch(query);
        setResources(data);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <svg
            className="mx-auto h-12 w-12 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            {text.resourcesTitle}
          </h1>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            {text.resourcesText1} {text.resourcesText2}
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {resources.length > 0 ? (
              resources.map((resource) => (
                <div
                  key={resource._id}
                  className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-90 transition-opacity relative h-80">
                    {resource.coverImageUrl ? (
                      <img
                        src={resource.coverImageUrl}
                        alt={resource.title}
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-indigo-50">
                        <svg
                          className="h-20 w-20 text-indigo-200"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <a
                        href={resource.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white text-gray-900 py-2 px-4 rounded-lg font-medium text-center hover:bg-indigo-600 hover:text-white transition-colors"
                      >
                        {lang === "ar" ? "عرض PDF" : "View PDF"}
                      </a>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                    </div>
                    <div className="mt-4">
                      <a
                        href={resource.pdfUrl}
                        download
                        className="text-sm font-semibold text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        {lang === "ar" ? "تحميل" : "Download"}
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-500 italic">
                {lang === "ar"
                  ? "لا يوجد موارد متاحة حالياً"
                  : "No resources available at the moment"}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;
