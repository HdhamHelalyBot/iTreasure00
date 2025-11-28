
import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useTranslation } from '../lib/translations';
import { SunIcon, MoonIcon, LanguageIcon, MenuIcon, XIcon } from './icons/Icons';

const Header: React.FC = () => {
  const { theme, setTheme, language, setLanguage } = useAppContext();
  const t = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');
  
  const navLinks = (
    <>
      <a href="#categories" className="hover:text-brand-red transition-colors">{t('productCategories')}</a>
      <a href="#about" className="hover:text-brand-red transition-colors">{t('aboutUs')}</a>
      <a href="#blog" className="hover:text-brand-red transition-colors">{t('articles')}</a>
    </>
  );

  return (
    <header className="bg-white/80 dark:bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-3xl font-bold text-brand-red">
              {t('iTreasure')}
            </a>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden md:block flex-1 mx-8 max-w-xl">
             <div className="relative">
                <input
                  type="search"
                  placeholder={t('searchPlaceholder')}
                  className="w-full py-2 px-4 rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                />
                 <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
            </div>
          </div>
          
          {/* Desktop Navigation & Controls */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {navLinks}
            </nav>
            <div className="flex items-center space-x-2">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
              </button>
              <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center space-x-1">
                <LanguageIcon />
                <span className="text-sm font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-4">
            {/* Mobile Search Bar */}
            <div className="relative px-2">
               <input
                  type="search"
                  placeholder={t('searchPlaceholder')}
                  className="w-full py-2 px-4 rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent focus:outline-none focus:ring-2 focus:ring-brand-red transition-all"
                />
                 <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
            </div>
             {/* Mobile Navigation & Controls */}
            <nav className="flex flex-col space-y-2 px-2">
              {navLinks}
            </nav>
            <div className="flex items-center justify-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button onClick={toggleTheme} className="p-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <button onClick={toggleLanguage} className="p-2 rounded-full flex items-center space-x-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                <LanguageIcon />
                 <span>{language === 'en' ? 'العربية' : 'English'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};

export default Header;
