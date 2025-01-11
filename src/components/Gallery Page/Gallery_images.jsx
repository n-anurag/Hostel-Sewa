import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery_images.css';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import Partners from '../Partners';
import Footer from '../Footer';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const events = [
  { id: 1, title: "Nepal Hostel Association 11th Meeting", image: image1 },
  { id: 2, title: "New Year 2081 Celebration", image: image2 },
  { id: 3, title: "Holi Event 2080", image: image3 },
  { id: 4, title: "New Year 2081 Celebration", image: image2 },
  { id: 5, title: "Holi Event 2080", image: image3 },
  { id: 6, title: "Nepal Hostel Association 11th Meeting", image: image1 },
  { id: 7, title: "New Year 2081 Celebration", image: image2 },
  { id: 8, title: "Holi Event 2080", image: image3 },
];

const Gallery_images = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const goToPrevious = () => {
    const currentIndex = events.findIndex((event) => event.id === selectedEvent.id);
    const prevIndex = (currentIndex - 1 + events.length) % events.length;
    setSelectedEvent(events[prevIndex]);
  };

  const goToNext = () => {
    const currentIndex = events.findIndex((event) => event.id === selectedEvent.id);
    const nextIndex = (currentIndex + 1) % events.length;
    setSelectedEvent(events[nextIndex]);
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <>
      <div className="gallery-container">
        <h2 className="gallery-title">Gallery (Events)</h2>
        <div className="gallery-grid">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="gallery-card"
              onClick={() => openModal(event)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.1, 
                rotate: 3, 
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.5 }}
            >
              <img src={event.image} alt={event.title} className="gallery-image" />
              <p className="gallery-card-title">{event.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="gallery-modal-overlay"
            onClick={closeModal}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="gallery-modal-container"
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              transition={{ duration: 0.5 }}
            >
              <button className="gallery-modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <h2 className="gallery-modal-title">{selectedEvent.title}</h2>
              <motion.img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="gallery-modal-image"
                key={selectedEvent.id}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={imageVariants}
                transition={{ duration: 0.9 }}
              />
              <div className="gallery-modal-navigation">
                <button onClick={goToPrevious} className="gallery-modal-prev">
                  <FaChevronLeft />
                </button>
                <button onClick={goToNext} className="gallery-modal-next">
                  <FaChevronRight />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Partners />
      <Footer />
    </>
  );
};

export default Gallery_images;
