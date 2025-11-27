import React from 'react';
import { useTranslation, TranslationKey } from '../lib/translations';

const ArticleCard: React.FC<{ titleKey: TranslationKey; contentKey: TranslationKey; image: string }> = ({ titleKey, contentKey, image }) => {
  const t = useTranslation();
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group transform transition duration-300 hover:-translate-y-2">
      <img src={image} alt={t(titleKey)} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-red transition-colors">{t(titleKey)}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t(contentKey)}</p>
      </div>
    </div>
  );
};

const Articles: React.FC = () => {
  const t = useTranslation();

  return (
    <section id="blog" className="py-16 sm:py-24 bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t('featuredArticles')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ArticleCard 
            titleKey="article1Title" 
            contentKey="article1Content" 
            image="https://images.unsplash.com/photo-1555774698-0b77e0e5a524?q=80&w=500&auto=format&fit=crop"
          />
          <ArticleCard 
            titleKey="article2Title" 
            contentKey="article2Content" 
            image="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=500&auto=format&fit=crop"
          />
          <ArticleCard 
            titleKey="article3Title" 
            contentKey="article3Content" 
            image="https://images.unsplash.com/photo-1579566346927-c68383817a25?q=80&w=500&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Articles;