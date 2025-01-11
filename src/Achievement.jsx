import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import certificate from './assets/certificate.png';
import './Achievements.css';

const Achievements = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  const certificates = [
    certificate,
    certificate,
    certificate,
    certificate,
    certificate,
    certificate,
  ]; // Add more if needed

  const slidesPerPage = 4; // Number of certificates per slide
  const totalPages = Math.ceil(certificates.length / slidesPerPage);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideCertificates = () => {
    const start = currentSlide * slidesPerPage;
    const end = start + slidesPerPage;
    return certificates.slice(start, end);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 } // Trigger animation when 20% of the container is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger animation for each certificate
      },
    },
  };

  return (
    <div className="achievements-container" ref={containerRef}>
      <h2 className="achievements-title">Our Achievements</h2>
      <motion.div
        className="certificates-container"
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        {getCurrentSlideCertificates().map((cert, index) => (
          <motion.div
            className="certificate"
            key={index}
            variants={cardVariants}
          >
            <img
              src={cert}
              alt={`Certificate ${index + 1}`}
              className="certificate-image"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="dots-container">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
