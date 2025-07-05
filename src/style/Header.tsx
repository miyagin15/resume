import React from 'react';
import { useTranslation } from 'react-i18next';
import Nav from './Nav';

type Page = 'home' | 'works' | 'skills' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-2xl font-bold text-gray-800 hover:text-primary-600 transition-colors duration-200"
            >
              miyagin15
            </button>
          </div>
          <div className="flex items-center">
            <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className="ml-4">
              <button onClick={() => changeLanguage('en')} className="text-gray-600 hover:text-gray-800">EN</button>
              <span className="mx-1 text-gray-400">|</span>
              <button onClick={() => changeLanguage('ja')} className="text-gray-600 hover:text-gray-800">JP</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
