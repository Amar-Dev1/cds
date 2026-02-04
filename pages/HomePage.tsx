import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data/placeholderData";

const Icon = ({ name }: { name: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-10 h-10 text-green-600"
  >
    {name === "academic-cap" && (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0l-2.072-1.036A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41l-2.072 1.036"
      />
    )}
    {name === "users" && (
      <>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.14-4.828a1.5 1.5 0 011.06 1.06l-.16.16a1.5 1.5 0 01-2.228 2.228l-.16-.16a1.5 1.5 0 011.06-1.061M15 11.25a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12.75 3.75A9.75 9.75 0 003 13.5a9.75 9.75 0 009.75 9.75m0-19.5a9.75 9.75 0 019.75 9.75c0 4.93-3.72 9.08-8.5 9.69"
        />
      </>
    )}
    {name === "heart" && (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    )}
    {name === "globe-alt" && (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.024.217 1.464l-.657.985a.75.75 0 01-1.238-.042L12.75 3.03zM8.25 12h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    )}
    {name === "briefcase" && (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25h-10.5a2.25 2.25 0 01-2.25-2.25v-4.07M20.25 14.15v-4.07a2.25 2.25 0 00-2.25-2.25h-10.5a2.25 2.25 0 00-2.25 2.25v4.07m15-4.07v-1.12a2.25 2.25 0 00-2.25-2.25h-1.5a2.25 2.25 0 00-2.25 2.25v1.12"
      />
    )}
  </svg>
);

const HomePage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-green-700 text-white">
        <div className="max-w-screen-xl mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            {text.homeHeroTitle}
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-green-200">
            {text.homeHeroSubtitle}
          </p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                to="/about"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
              >
                {text.homeBtnLearnMore}
              </Link>
              <Link
                to="/contact"
                className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-500 sm:px-8"
              >
                {text.homeBtnContact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Summary Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              {text.homeMissionTitle}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {text.homeMissionSubtitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {text.homeMissionText}
            </p>
          </div>
        </div>
      </section>

      {/* Key Sectors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
              {text.homeSectorsTitle}
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {text.homeSectorsSubtitle}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              {text.homeSectorsText}
            </p>
          </div>

          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {text.sectors.map((sector) => (
                <div
                  key={sector.name}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center h-16 w-16 rounded-md bg-green-100 text-white">
                    <Icon name={sector.icon} />
                  </div>
                  <h3 className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {sector.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {sector.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
