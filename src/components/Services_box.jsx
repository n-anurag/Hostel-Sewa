import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Services_box.css';
import checkIcon from '../assets/verified.png'; // Adjust the path as needed

const Services_box = () => {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const [isInView, setIsInView] = useState(false);

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

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child
      },
    },
  };

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <p className="service-text">Our Services</p>
      <motion.div
        className="out"
        ref={sectionRef}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {/* Box 1 */}
        <motion.div className="outer-border" variants={boxVariants}>
          <div className="verified-card">
            <img src={checkIcon} alt="Verified" className="image" />
            <h2 className="verified-text">100% Verified</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur. Blandit volutpat ut fringilla sit suscipit augue est commodo.
            </p>
          </div>
        </motion.div>

        {/* Box 2 */}
        <motion.div className="outer-border" variants={boxVariants}>
          <div className="verified-card">
            <img src={checkIcon} alt="Verified" className="image" />
            <h2 className="verified-text">100% Verified</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur. Blandit volutpat ut fringilla sit suscipit augue est commodo.
            </p>
          </div>
        </motion.div>

        {/* Box 3 */}
        <motion.div className="outer-border" variants={boxVariants}>
          <div className="verified-card">
            <img src={checkIcon} alt="Verified" className="image" />
            <h2 className="verified-text">100% Verified</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur. Blandit volutpat ut fringilla sit suscipit augue est commodo.
            </p>
          </div>
        </motion.div>

        {/* Box 4 */}
        <motion.div className="outer-border" variants={boxVariants}>
          <div className="verified-card">
            <img src={checkIcon} alt="Verified" className="image" />
            <h2 className="verified-text">100% Verified</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur. Blandit volutpat ut fringilla sit suscipit augue est commodo.
            </p>
          </div>
        </motion.div>

        {/* Box 5 */}
        <motion.div className="outer-border" variants={boxVariants}>
          <div className="verified-card">
            <img src={checkIcon} alt="Verified" className="image" />
            <h2 className="verified-text">100% Verified</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur. Blandit volutpat ut fringilla sit suscipit augue est commodo.
            </p>
          </div>
        </motion.div>

        {/* Box 6 */}
        <motion.div className="outer-border" variants={boxVariants}>
          <div className="verified-card">
            <img src={checkIcon} alt="Verified" className="image" />
            <h2 className="verified-text">100% Verified</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet consectetur. Blandit volutpat ut fringilla sit suscipit augue est commodo.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Services_box;
