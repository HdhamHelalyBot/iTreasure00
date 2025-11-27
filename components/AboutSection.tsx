import React from 'react';
import { useTranslation } from '../lib/translations';

const AboutSection: React.FC = () => {
  const t = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-24 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* About Us */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rtl:md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop" 
              alt="iTreasure Team" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-4 rtl:md:order-1">
            <h2 className="text-3xl font-bold text-brand-red">{t('aboutUsTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('aboutUsContent')}
            </p>
          </div>
        </div>

        {/* What We Do */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-brand-red">{t('ourBusinessTitle')}</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('ourBusinessContent')}
            </p>
          </div>
          <div>
             <img 
              src="https://images.unsplash.com/photo-1581092921441-b043a0a6a439?q=80&w=600&auto=format&fit=crop" 
              alt="iTreasure Warehouse" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;