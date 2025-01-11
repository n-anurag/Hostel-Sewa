
import image1 from '../Hostel Page/images/image1.png'
import image2 from '../Hostel Page/images/hostelpage_cover.jpeg'
import React, { useState,useEffect  } from 'react';



const images = [image1, image2, image2]; // Array of images

const HostelSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === images.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="slider-container">
            <img src={images[currentIndex]} alt="Hostel" className="slider-image" />
            <button className="left-arrow" onClick={goToPrevious}>&#10094;</button>
            <button className="right-arrow" onClick={goToNext}>&#10095;</button>
           
        
        </div>
    );
};

export default HostelSlider;

