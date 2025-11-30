
import React from 'react';
import { useAppContext } from '../context/AppContext';

const galleryImages = [
  'https://images.unsplash.com/photo-1598920394274-332a63b4d4a8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542978728-447551064367?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1593640495253-23192b270ac8?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1604168285918-a28455a297cd?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1578357078586-491adf1214b2?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581351123004-a52646347a5b?q=80&w=800&auto=format&fit=crop',
];

const Gallery: React.FC = () => {
  const { t } = useAppContext();

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gray-200 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            {t('galleryTitle')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            {t('gallerySubtitle')}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((src, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-64 sm:h-80">
              <img 
                src={src} 
                alt={`${t('galleryTitle')} image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
              />
               <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;