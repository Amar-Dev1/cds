import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../data/placeholderData';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <h2 className="text-2xl font-bold">CDS</h2>
            <p className="text-gray-400 text-base">
              {text.footerMotto}
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{text.footerNav}</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/about" className="text-base text-gray-400 hover:text-white">{text.navAbout}</Link></li>
                  <li><Link to="/services" className="text-base text-gray-400 hover:text-white">{text.navServices}</Link></li>
                  <li><Link to="/news" className="text-base text-gray-400 hover:text-white">{text.navNews}</Link></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{text.footerSupport}</h3>
                <ul className="mt-4 space-y-4">
                  <li><Link to="/contact" className="text-base text-gray-400 hover:text-white">{text.navContact}</Link></li>
                  <li><Link to="/resources" className="text-base text-gray-400 hover:text-white">{text.navResources}</Link></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">{text.footerContact}</h3>
                <div className="mt-4 space-y-4 text-base text-gray-400">
                  <p>{text.contactCurrentBaseText}</p>
                  <p>{text.contactPlannedHQText}</p>
                  <p>{text.contactEmail} dawalbait1964@gmail.com</p>
                  <p>{text.contactPhone1} +249966110442</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">{text.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
