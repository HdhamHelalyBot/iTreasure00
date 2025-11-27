import React from 'react';
import { useTranslation } from '../lib/translations';

const galleryImages = [
  'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1617886322207-61780856b37a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555774698-0b77e0abfe79?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1614992683905-2785464526b7?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1587573089734-09cb69c0f2b9?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1611606003196-93a89b4f4a3f?q=80&w=800&auto=format&fit=crop',
];

const Gallery: React.FC = () => {
  const t = useTranslation();

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