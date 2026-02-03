import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../data/placeholderData';

const ResourcesPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h1 className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          {text.resourcesTitle}
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          {text.resourcesText1}
        </p>
        <p className="mt-2 text-lg text-gray-500">
          {text.resourcesText2}
        </p>
      </div>
    </div>
  );
};

export default ResourcesPage;
