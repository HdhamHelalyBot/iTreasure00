
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
            <div key={category.id} className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-red/20">
              <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-4">
                <img 
                  src={category.image} 
                  alt={category.name[language]} 
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-red transition-colors duration-300">
                  {category.name[language]}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategoryGrid;