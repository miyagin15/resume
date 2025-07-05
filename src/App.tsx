import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

//import pages
import Home from './pages/Home'
import Works from './pages/Works'
import Skills from './pages/Skills'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './style/Header'
import Footer from './style/Footer'



function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // 言語設定をブラウザの言語に合わせる
    const userLanguage = navigator.language.split('-')[0];
    i18n.changeLanguage(userLanguage);
  }, [i18n]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col dark:from-gray-800 dark:to-gray-900 dark:text-gray-50">
      <Header />
      <main className="flex-1">
        <Home />
        <Works />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App