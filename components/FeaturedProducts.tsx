
import React from 'react';
import { featuredProducts, Product } from '../data/featuredProducts';
import { useAppContext } from '../context/AppContext';

const FeaturedProducts: React.FC = () => {
  const { t, language } = useAppContext();

  return (
    <section id="products" className="py-16 sm:py-24 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          {t('featuredProducts')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product: Product) => (
            <div key={product.id} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-red/20">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name[language]} 
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors duration-300">
                  {product.name[language]}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                  {product.description[language]}
                </p>
                <button className="mt-auto w-full bg-brand-red text-white font-bold py-2 px-4 rounded-lg hover:bg-brand-red-light transition-colors duration-300 transform group-hover:scale-105">
                  {t('viewDetails')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;