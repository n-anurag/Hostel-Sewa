import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './Choosing.css';

const WhyChooseUs = () => {
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
      { threshold: 0.2 }
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

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

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
      className="why-choose-us-section"
    >
      <h2 className="section-heading">Why Choosing Us?</h2>
      <div className="curve-background">
        <svg width="100%" height="300px">
          <path
            d="M0,150 Q250,300 500,150 T1000,50 T1500,150 T2000,250"
            stroke="#A3A3A3"
            strokeWidth="2"
            strokeDasharray="8,8"
            fill="none"
          />
        </svg>
      </div>
      <div className="box-container">
        <motion.div
          className="info-box"
          variants={boxVariants}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat mattis eu feugiat id
            posuere sit. Nunc pulvinar facilisis blandit arcu. Facilisi enim
            interdum cras pulvinar nisi curabitur urna. Vestibulum blandit urna
            a convallis nibh sed gravida lobortis. Nunc arcu varius proin
            cursus. Suspendisse pharetra convallis tristique id hendrerit
            pellentesque vitae enim. Duis auctor dui rhoncus commodo. Nibh
            facilisis sit tincidunt purus euismod magna bibendum.
          </p>
        </motion.div>
        <motion.div
          className="info-box lower-box"
          variants={boxVariants}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat mattis eu feugiat id
            posuere sit. Nunc pulvinar facilisis blandit arcu. Facilisi enim
            interdum cras pulvinar nisi curabitur urna. Vestibulum blandit urna
            a convallis nibh sed gravida lobortis. Nunc arcu varius proin
            cursus. Suspendisse pharetra convallis tristique id hendrerit
            pellentesque vitae enim. Duis auctor dui rhoncus commodo. Nibh
            facilisis sit tincidunt purus euismod magna bibendum.
          </p>
        </motion.div>
        <motion.div
          className="info-box"
          variants={boxVariants}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat mattis eu feugiat id
            posuere sit. Nunc pulvinar facilisis blandit arcu. Facilisi enim
            interdum cras pulvinar nisi curabitur urna. Vestibulum blandit urna
            a convallis nibh sed gravida lobortis. Nunc arcu varius proin
            cursus. Suspendisse pharetra convallis tristique id hendrerit
            pellentesque vitae enim. Duis auctor dui rhoncus commodo. Nibh
            facilisis sit tincidunt purus euismod magna bibendum.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
