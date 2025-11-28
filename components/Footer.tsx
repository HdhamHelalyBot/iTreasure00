
import React, { useState } from 'react';
import { useTranslation } from '../lib/translations';
import Modal from './Modal';

const Footer: React.FC = () => {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  return (
    <>
      <footer className="bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-start">
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-brand-red mb-2">{t('iTreasure')}</h3>
              <p className="text-sm">
                {t('companyDescription')}
              </p>
            </div>
            <div className="md:col-span-2 flex justify-center md:justify-end">
              <div className="flex space-x-6 rtl:space-x-reverse items-center">
                <a href="#about" className="hover:text-brand-red transition-colors">{t('aboutUs')}</a>
                <button onClick={() => setActiveModal('terms')} className="hover:text-brand-red transition-colors">{t('termsAndConditions')}</button>
                <button onClick={() => setActiveModal('privacy')} className="hover:text-brand-red transition-colors">{t('privacyPolicy')}</button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-700 text-center text-sm">
            <p>&copy; {currentYear} {t('iTreasure')}. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>

      <Modal 
        isOpen={activeModal === 'terms'} 
        onClose={() => setActiveModal(null)} 
        title={t('termsTitle')}
      >
        {t('termsContent')}
      </Modal>

      <Modal 
        isOpen={activeModal === 'privacy'} 
        onClose={() => setActiveModal(null)} 
        title={t('privacyTitle')}
      >
        {t('privacyContent')}
      </Modal>
    </>
  );
};

export default Footer;
