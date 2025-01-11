import React, { useRef, useState } from 'react';
import './Mission_box.css';
import mission from '../assets/mission1.jpeg';
import mission2 from '../assets/mission2.jpeg';
import mission3 from '../assets/mission3.jpeg';

const MissionSection = () => {
    const containerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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
        <div className="mission-section">
            <div
                className="mission-cards"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
            >
<div className="mission-text">

              <section>Our Mission</section>
          
        
<p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>

</div>
                <div className="card">
                    <img src={mission} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={mission2} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={mission3} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={mission3} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={mission3} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={mission3} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
                <div className="card">
                    <img src={mission3} alt="Student Mission" />
                    <p>Lorem ipsum dolor sit amet consectetur. Eget quis molestie blandit ut consectetur elementum hendrerit.</p>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
