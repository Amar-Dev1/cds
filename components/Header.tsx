import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { data } from '../data/placeholderData';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, toggleLanguage } = useLanguage();
  const text = data[lang];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-3 rounded md:p-0 ${
      isActive ? 'text-white bg-green-700 md:bg-transparent md:text-green-700' : 'text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700'
    }`;

  const navLinks = (
    <>
      <NavLink to="/" className={navLinkClasses} onClick={()=>setIsMenuOpen(false)}>{text.navHome}</NavLink>
      <NavLink to="/about" className={navLinkClasses} onClick={()=>setIsMenuOpen(false)}>{text.navAbout}</NavLink>
      <NavLink to="/services" className={navLinkClasses} onClick={()=>setIsMenuOpen(false)}>{text.navServices}</NavLink>
      <NavLink to="/news" className={navLinkClasses} onClick={()=>setIsMenuOpen(false)}>{text.navNews}</NavLink>
      <NavLink to="/resources" className={navLinkClasses} onClick={()=>setIsMenuOpen(false)}>{text.navResources}</NavLink>
      <NavLink to="/contact" className={navLinkClasses} onClick={()=>setIsMenuOpen(false)}>{text.navContact}</NavLink>
    </>
  );

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
                <span className="text-2xl font-bold text-gray-800">CDS</span>
                <span className="hidden sm:block text-sm text-green-700 font-semibold">{lang === 'ar' ? 'مركز استراتيجيات التنمية' : 'Centre for Development Strategies'}</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ms-10 flex items-baseline space-x-4 rtl:space-x-reverse">
                {navLinks}
              </div>
            </div>
          </div>
          <div className="flex items-center">
             <button
                onClick={toggleLanguage}
                className="hidden md:block bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-300"
              >
                {text.langToggle}
            </button>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks}
            <div className="px-3 pt-2">
               <button
                  onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
                  className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-300"
                >
                  {text.langToggle}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
