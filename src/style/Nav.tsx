import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AiOutlineHome, AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { GiVintageRobot, GiBiceps } from 'react-icons/gi';





function Nav() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: 'home', icon: <AiOutlineHome className="w-5 h-5" />, label: t('about.nav.home') },
    { to: 'works', icon: <GiVintageRobot className="w-5 h-5" />, label: t('about.nav.works') },
    { to: 'skills', icon: <GiBiceps className="w-5 h-5" />, label: t('about.nav.skills') },
    { to: 'contact', icon: <AiOutlineMail className="w-5 h-5" />, label: t('about.nav.contact') },
  ];

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="relative">
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {navItems.map((item) => (
          <button
            key={item.to}
            onClick={() => handleNavClick(item.to)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-primary-600`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
        >
          {isOpen ? (
            <AiOutlineClose className="w-6 h-6" />
          ) : (
            <AiOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
          {navItems.map((item) => (
            <button
              key={item.to}
              onClick={() => handleNavClick(item.to)}
              className={`flex items-center space-x-3 px-4 py-2 text-sm font-medium transition-colors duration-200 w-full text-left text-gray-600 hover:text-primary-600 hover:bg-gray-50`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Nav;
