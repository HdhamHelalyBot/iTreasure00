
import React from 'react';
import { useTranslation } from '../lib/translations';

const AboutSection: React.FC = () => {
  const t = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-brand-red">{t('aboutUsTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('aboutUsContent')}
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-brand-red">{t('ourBusinessTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('ourBusinessContent')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
