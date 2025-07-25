import React from 'react'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { GiVintageRobot, GiBiceps } from 'react-icons/gi'
import { useTranslation } from 'react-i18next';





function Footer() {
  const { t } = useTranslation();
  const navItems = [
    { to: 'home', icon: <AiOutlineHome className="w-4 h-4" />, label: t('about.nav.home') },
    { to: 'works', icon: <GiVintageRobot className="w-4 h-4" />, label: t('about.nav.works') },
    { to: 'skills', icon: <GiBiceps className="w-4 h-4" />, label: t('about.nav.skills') },
    { to: 'contact', icon: <AiOutlineMail className="w-4 h-4" />, label: t('about.nav.contact') },
  ]

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-left md:text-left">
            <p className="text-lg font-semibold text-gray-800">miyagin15</p>
            <p className="text-sm text-gray-600">Built with React & Tailwind CSS</p>
          </div>
          
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <button
              key={item.to}
              onClick={() => {
                const element = document.getElementById(item.to);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 text-gray-600 hover:text-primary-600`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
