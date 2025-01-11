import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Hostel_card.css';
import hostelImage from '../assets/Hostel_card.png';
import hos_img from '../assets/hostelcard1.png';

const hostels = [
  {
    id: 1,
    name: "Subha Boy’s Hostel",
    location: "Sankhamul, Kathmandu",
    price: "Rs 10,000",
    contact: "9845034555, 9855023457",
    rating: 5.0,
    image: hos_img,
  },
  {
    id: 2,
    name: "Shree Girls' Hostel",
    location: "Koteshwor, Kathmandu",
    price: "Rs 8,500",
    contact: "9841234567, 9847654321",
    rating: 4.1,
    image: hos_img,
  },
  {
    id: 3,
    name: "Bright Hostel",
    location: "Lalitpur",
    price: "Rs 9,200",
    contact: "9851231234, 9856543210",
    rating: 4.8,
    image: hostelImage,
  },
  {
    id: 4,
    name: "Sunshine Hostel",
    location: "Baneshwor, Kathmandu",
    price: "Rs 12,000",
    contact: "9800000000, 9801231231",
    rating: 4.9,
    image: hostelImage,
  },
  ,
  {
    id: 4,
    name: "Sunshine Hostel",
    location: "Baneshwor, Kathmandu",
    price: "Rs 12,000",
    contact: "9800000000, 9801231231",
    rating: 4.9,
    image: hostelImage,
  },
  ,
  {
    id: 4,
    name: "Sunshine Hostel",
    location: "Baneshwor, Kathmandu",
    price: "Rs 12,000",
    contact: "9800000000, 9801231231",
    rating: 4.9,
    image: hostelImage,
  },
  ,
  {
    id: 4,
    name: "Sunshine Hostel",
    location: "Baneshwor, Kathmandu",
    price: "Rs 12,000",
    contact: "9800000000, 9801231231",
    rating: 4.9,
    image: hostelImage,
  },
  ,
  {
    id: 4,
    name: "Sunshine Hostel",
    location: "Baneshwor, Kathmandu",
    price: "Rs 12,000",
    contact: "9800000000, 9801231231",
    rating: 4.9,
    image: hostelImage,
  },
  // Add more hostels as needed
];

const HostelCard = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const handleCardClick = (hostelId) => {
    navigate(`/hostel_details/${hostelId}`);
  };

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
      className="hostel-card-container"
    >
      {hostels.map((hostel) => (
        <motion.div
          className="hostel-card"
          key={hostel.id}
          whileHover={{ scale: 1.05 }}
          onClick={() => handleCardClick(hostel.id)}
        >
          <div className="image-container">
            <img
              src={hostel.image}
              alt={hostel.name}
              className="hostel-image"
            />
            <div className="price-badge">{hostel.price}</div>
          </div>
          <div className="hostel-info">
            <h3>{hostel.name}</h3>
            <p className="location">📍 {hostel.location}</p>
            <div className="contact">📞 {hostel.contact}</div>
            <div className="rating">⭐ {hostel.rating}</div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HostelCard;
