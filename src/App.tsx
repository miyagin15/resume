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

type Page = 'home' | 'works' | 'skills' | 'about' | 'contact'

function App() {
  const { i18n } = useTranslation();
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // 言語設定をブラウザの言語に合わせる
    const userLanguage = navigator.language.split('-')[0];
    i18n.changeLanguage(userLanguage);
  }, [i18n]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'works':
        return <Works />
      case 'skills':
        return <Skills />
      case 'about':
        return <About />
      case 'contact':
        return <Contact />
      default:
        return (
          <div className="section-padding text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-gray-600">Page not found.</p>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  )
}

export default App