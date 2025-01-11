import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import image from '../assets/photo1.png';
import './Photos.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Photos = ({ location }) => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

  const slideNext = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const slidePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8 }}
    >
      <p className="heading">In which district do you need hostel?</p>
      <div className="slider-containers">
        <button className="slider-button prev" onClick={slidePrev}>
          <FaArrowLeft />
        </button>
        <div className="image-containers" ref={sliderRef}>
          <div className="image-card">
            <img src={image} alt="Lalitpur area" className="imagess" />
            <div className="overlay">
              <h2>Lalitpur area</h2>
              <button onClick={location} className="view-button">
                View Hostels
              </button>
            </div>
          </div>
          <div className="image-card">
            <img src={image} alt="Koteshwor area" className="imagess" />
            <div className="overlay">
              <h2>Koteshwor area</h2>
              <button onClick={location} className="view-button">
                View Hostels
              </button>
            </div>
          </div>
          <div className="image-card">
            <img src={image} alt="Koteshwor area" className="imagess" />
            <div className="overlay">
              <h2>Koteshwor area</h2>
              <button onClick={location} className="view-button">
                View Hostels
              </button>
            </div>
          </div>
          <div className="image-card">
            <img src={image} alt="Koteshwor area" className="imagess" />
            <div className="overlay">
              <h2>Koteshwor area</h2>
              <button onClick={location} className="view-button">
                View Hostels
              </button>
            </div>
          </div>
          <div className="image-card">
            <img src={image} alt="Baneshwor area" className="imagess" />
            <div className="overlay">
              <h2>Baneshwor area</h2>
              <button onClick={location} className="view-button">
                View Hostels
              </button>
            </div>
          </div>
        </div>
        <button className="slider-button next" onClick={slideNext}>
          <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
};

export default Photos;
