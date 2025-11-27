
import React, { useState, useEffect } from 'react';
import { AppContextProvider, Language, Theme } from './context/AppContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategoryGrid from './components/ProductCategoryGrid';
import AboutSection from './components/AboutSection';
import Articles from './components/Articles';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.lang = language;
    root.dir = language === 'ar' ? 'rtl' : 'ltr';
    root.style.fontFamily = language === 'ar' ? "'Cairo', sans-serif" : "'Inter', sans-serif";
  }, [language]);

  return (
    <AppContextProvider value={{ theme, setTheme, language, setLanguage }}>
      <div className="bg-brand-light dark:bg-brand-dark text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <ProductCategoryGrid />
          <AboutSection />
          <Articles />
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
}

export default App;
