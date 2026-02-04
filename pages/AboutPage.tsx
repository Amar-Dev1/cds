import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { data } from "../data/placeholderData";

const AboutPage: React.FC = () => {
  const { lang } = useLanguage();
  const text = data[lang];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            {text.aboutTitle}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {text.aboutSubtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {text.aboutIntro}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 order-2 md:order-1">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {text.aboutVision}
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  {text.aboutVisionText}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {text.aboutMission}
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  {text.aboutMissionText}
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {text.aboutObjective}
                </h3>
                <p className="mt-4 text-lg text-gray-500">
                  {text.aboutObjectiveText}
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                className="rounded-lg shadow-xl"
                src="https://picsum.photos/600/400?grayscale"
                alt="Team working"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            {text.aboutValues}
          </h3>
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {text.coreValues.map((value, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="ms-3 text-lg text-gray-700">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
