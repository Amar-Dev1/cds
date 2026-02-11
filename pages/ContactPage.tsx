import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../data/placeholderData';

const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];
  
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">{text.contactTitle}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {text.contactSubtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {text.contactIntro}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">{text.contactLocationsTitle}</h3>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{text.contactCurrentBase}</h4>
                  <p className="mt-2 text-gray-600">{text.contactCurrentBaseText}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{text.contactPlannedHQ}</h4>
                  <p className="mt-2 text-gray-600">{text.contactPlannedHQText}</p>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-10">{text.contactDetailsTitle}</h3>
              <div className="mt-6 space-y-4 text-gray-600">
                <p><strong>{text.contactEmail}</strong> info@csd.org</p>
                <p><strong>{text.contactPhone1}</strong> +249966110442</p>
                <p><strong>{text.contactPhone2}</strong> +249115760370</p>
              </div>
            </div>
            {/* Partnership Information */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900">{text.contactPartnershipTitle}</h3>
              <p className="mt-6 text-lg text-gray-600">
                {text.contactPartnershipText1}
              </p>
              <p className="mt-4 text-lg text-gray-600">
                {text.contactPartnershipText2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
