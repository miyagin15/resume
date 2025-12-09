import React from 'react';
import { useTranslation } from 'react-i18next';

//import pages
import Home from './pages/Home'
import Services from './pages/Services'
import Works from './pages/Works'
import Timeline from './pages/Timeline'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Header from './style/Header'
import Footer from './style/Footer'



function App() {
  const { i18n } = useTranslation();

  if (!i18n.isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col dark:from-gray-800 dark:to-gray-900 dark:text-gray-50">
      <Header />
      <main className="flex-1">
        <Home />
        <Services />
        <Works />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App