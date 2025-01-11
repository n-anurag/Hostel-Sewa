import React, { useRef, useEffect, useState } from 'react';
import './Vision_box.css';
import vision from '../assets/mission1.jpeg';
import vision2 from '../assets/mission2.jpeg';
import vision3 from '../assets/mission3.jpeg';

const VisionSection = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            // Scroll to the right side initially
            containerRef.current.scrollLeft = containerRef.current.scrollWidth;
        }
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the multiplier for faster/slower scrolling
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
      
          
            <div
                className="vision-cards"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
                <div className="card">
                    <img src={vision} alt="Student Vision" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={vision2} alt="Student Vision" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={vision3} alt="Student Vision" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={vision3} alt="Student Vision" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={vision3} alt="Student Vision" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={vision3} alt="Student Vision" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>

                <div className="vision-text">
                <section>Our Vision</section>
                <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
          
          
            </div>
        </div>
    );
};

export default VisionSection;
