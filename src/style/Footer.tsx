import React from 'react'
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai'
import { GiVintageRobot, GiBiceps } from 'react-icons/gi'

type Page = 'home' | 'works' | 'skills' | 'about' | 'contact'

interface FooterProps {
  currentPage: Page
  setCurrentPage: (page: Page) => void
}

function Footer({ currentPage, setCurrentPage }: FooterProps) {
  const navItems = [
    { to: 'home', icon: <AiOutlineHome className="w-4 h-4" />, label: 'Home' },
    { to: 'works', icon: <GiVintageRobot className="w-4 h-4" />, label: 'Works' },
    { to: 'skills', icon: <GiBiceps className="w-4 h-4" />, label: 'Skills' },
    { to: 'contact', icon: <AiOutlineMail className="w-4 h-4" />, label: 'Contact' },
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
                onClick={() => setCurrentPage(item.to as Page)}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.to
                    ? 'text-primary-600'
                    : 'text-gray-600 hover:text-primary-600'
                }`}
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
