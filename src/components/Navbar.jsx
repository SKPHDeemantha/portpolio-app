// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaSpinner, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import ResumeGenerator from '../utils/resumeGenerator';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, loading, success, error
  const resumeGeneratorRef = useRef(new ResumeGenerator());

  const handleResumeDownload = async () => {
    setDownloadStatus('loading');
    
    try {
      const success = await resumeGeneratorRef.current.downloadResume();
      
      if (success) {
        setDownloadStatus('success');
        // Reset status after 2 seconds
        setTimeout(() => setDownloadStatus('idle'), 2000);
      } else {
        setDownloadStatus('error');
        setTimeout(() => setDownloadStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Resume download error:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
    }
  };

  const getDownloadButtonContent = () => {
    switch (downloadStatus) {
      case 'loading':
        return (
          <>
            <FaSpinner className="text-sm animate-spin" />
            <span>Generating...</span>
          </>
        );
      case 'success':
        return (
          <>
            <FaCheckCircle className="text-sm" />
            <span>Downloaded!</span>
          </>
        );
      case 'error':
        return (
          <>
            <FaExclamationTriangle className="text-sm" />
            <span>Try Again</span>
          </>
        );
      default:
        return (
          <>
            <FaDownload className="text-sm" />
            <span>Resume</span>
          </>
        );
    }
  };

  const getButtonClass = () => {
    const baseClass = "flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300";
    
    switch (downloadStatus) {
      case 'loading':
        return `${baseClass} bg-blue-500 text-white cursor-not-allowed`;
      case 'success':
        return `${baseClass} bg-green-500 text-white hover:shadow-green-500/25`;
      case 'error':
        return `${baseClass} bg-red-500 text-white hover:shadow-red-500/25`;
      default:
        return `${baseClass} bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25`;
    }
  };

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-900/95 backdrop-blur-md py-3 shadow-xl border-b border-gray-800/50' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              HD
            </div>
            <span className="text-sm text-gray-400 hidden sm:block">Portfolio</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-cyan-400 bg-cyan-400/10' 
                    : 'text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50'
                }`}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div 
                    className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-cyan-400"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Social Links & Resume */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="https://github.com/SKPHDeemantha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/heshan-deemantha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.button
              onClick={handleResumeDownload}
              className={getButtonClass()}
              whileHover={downloadStatus === 'idle' ? { scale: 1.05 } : {}}
              whileTap={downloadStatus === 'idle' ? { scale: 0.95 } : {}}
              disabled={downloadStatus === 'loading'}
            >
              {getDownloadButtonContent()}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-300 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800/50"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  className={`w-full text-left px-4 py-3 font-medium transition-all duration-300 rounded-lg ${
                    activeSection === item.id 
                      ? 'text-cyan-400 bg-cyan-400/10' 
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-gray-800/50'
                  }`}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <div className="border-t border-gray-800 pt-4 mt-4">
                <div className="flex justify-center space-x-6 mb-4">
                  <a
                    href="https://github.com/SKPHDeemantha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://linkedin.com/in/heshan-deemantha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
                <button
                  onClick={handleResumeDownload}
                  className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    downloadStatus === 'loading' 
                      ? 'bg-blue-500 text-white cursor-not-allowed' 
                      : downloadStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : downloadStatus === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                  }`}
                  disabled={downloadStatus === 'loading'}
                >
                  {downloadStatus === 'loading' ? (
                    <FaSpinner className="text-sm animate-spin" />
                  ) : downloadStatus === 'success' ? (
                    <FaCheckCircle className="text-sm" />
                  ) : downloadStatus === 'error' ? (
                    <FaExclamationTriangle className="text-sm" />
                  ) : (
                    <FaDownload className="text-sm" />
                  )}
                  <span>
                    {downloadStatus === 'loading' ? 'Generating...' :
                     downloadStatus === 'success' ? 'Downloaded!' :
                     downloadStatus === 'error' ? 'Try Again' : 'Download Resume'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
