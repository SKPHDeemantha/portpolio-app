// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-2 shadow-lg' : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            HD
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                className={`relative px-1 py-2 font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-300'
                }`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + navItems.indexOf(item) * 0.1 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-gray-900/95 backdrop-blur-lg"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`px-6 py-3 text-left font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-cyan-400 bg-gray-800' 
                    : 'text-gray-300 hover:bg-gray-800'
                }`}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;