
import React from 'react';
import { useTranslation } from '../lib/translations';
import { categories, Category } from '../data/products';
import { useAppContext } from '../context/AppContext';

const ProductCategoryGrid: React.FC = () => {
  const t = useTranslation();
  const { language } = useAppContext();

  return (
    <section id="categories" className="py-16 sm:py-24 bg-brand-light dark:bg-brand-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t('productCategories')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {categories.map((category: Category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-red/30">
              <img src={category.image} alt={category.name[language]} className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white text-lg font-semibold text-center">
                {category.name[language]}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryGrid;
