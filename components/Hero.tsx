import React from 'react';
import { useTranslation } from '../lib/translations';

const Hero: React.FC = () => {
  const t = useTranslation();

  return (
    <section className="relative bg-gray-200 dark:bg-gray-900/50 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop')"}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-light via-transparent dark:from-brand-dark dark:via-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {t('heroTitle')}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-300">
          {t('heroSubtitle')}
        </p>
        <div className="mt-10">
          <a
            href="#categories"
            className="inline-block bg-brand-red hover:bg-brand-red-light text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
          >
            {t('browseCategories')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;