import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Gallery.css';
import gallery from '../assets/gallery.png';
import student from '../assets/student_login.jpeg'; // Replace with actual paths

const images = [student, gallery, student, gallery]; // Replace with your images

const PhotoGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    const variants = {
        enter: { x: "100%", opacity: 0 }, // Start off-screen to the right
        center: { x: 0, opacity: 1 }, // Center position
        exit: { x: "-100%", opacity: 0 }, // Exit off-screen to the left
    };

    return (
        <>
       <h1 className='gallery-head'>Photo Gallery</h1>
        <div className="carousel-container">
        
            <AnimatePresence initial={false}>
                <motion.img
                    key={currentIndex} // Key ensures Framer Motion recognizes image changes
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className="carousel-image"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        duration: 0.8, // Smooth transition duration
                    }}
                />
            </AnimatePresence>
        </div>
        </>
    );
};

export default PhotoGallery;
