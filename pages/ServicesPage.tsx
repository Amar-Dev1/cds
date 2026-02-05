import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../data/placeholderData';

const ServicesPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];
  
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{text.servicesTitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {text.servicesSubtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {text.servicesIntro}
          </p>
        </div>

        <div className="mt-20 space-y-12">
          {Object.entries(text.services).map(([sector, subSectors]: any) => (
            <div key={sector} className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">{sector}</h3>
              <ul className="mt-6 list-disc list-inside space-y-3">
                {subSectors.map((subSector: any, index: any) => (
                  <li key={index} className="text-lg text-gray-600">
                    {subSector}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
