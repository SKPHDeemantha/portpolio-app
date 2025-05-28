// src/components/TypeWritter.jsx
import React, { useState, useEffect } from 'react';

const TypeWritter = ({ text, speed = 100, clearMessageSpeed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? clearMessageSpeed : speed);
    
    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, text, speed, clearMessageSpeed]);

  return <span>{displayText}</span>;
};

export default TypeWritter;