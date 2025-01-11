// Hostel_individual.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './Hostel_individual.css';
import logo from './images/hostel_logo.png';
import Hostel_Slider from './Hostel_slider';
import Navbar from '../Navbar';
import Hostel_book from '../Booking/Hostel_book'
import Hostel_Overview from './Hostel_Overview';

const Hostel_individual = () => {
  const { id } = useParams();

  // Example hostel data for illustration; in a real app, this might be fetched from a server
  const hostels = [
    {
      id: 1,
      name: "Subha Boy’s Hostel",
      location: "Sankhamul, Kathmandu",
      price: "Rs 10,000",
      contact: "9845034555, 9855023457",
      rating: 5.0,
      image: logo,
      totalBeds: 30,
      availableBeds: 17,
      type: "Boys Hostel",
      email: "example@example.com",
      facebookLink: "https://facebook.com"
    },
    {
      id: 2,
      name: "Shree Girls' Hostel",
      location: "Koteshwor, Kathmandu",
      price: "Rs 8,500",
      contact: "9841234567, 9847654321",
      rating: 4.1,
      image: logo,
      totalBeds: 25,
      availableBeds: 15,
      type: "Girls Hostel",
      email: "example@example.com",
      facebookLink: "https://facebook.com"
    },
    {
      id: 3,
      name: "Bright Hostel",
      location: "Lalitpur",
      price: "Rs 9,200",
      contact: "9851231234, 9856543210",
      rating: 4.8,

    },
    {
      id: 4,
      name: "Sunshine Hostel",
      location: "Baneshwor, Kathmandu",
      price: "Rs 12,000",
      contact: "9800000000, 9801231231",
      rating: 4.9,

    }
    // Add more hostels as needed
  ];

  const hostel = hostels.find((hostel) => hostel.id === Number(id));

  if (!hostel) {
    return <p>Hostel not found</p>;
  }

  return (
    <>
      <Navbar />
      <Hostel_Slider />

      <div className="hostel-details">
        <img src={hostel.image} className="hostel-logo" alt={hostel.name} />
        <h2>{hostel.name} <span className="rating">★ {hostel.rating}</span></h2>
        <p>📞 {hostel.contact}</p>
        <p>📍 {hostel.location}</p>
        <p>💲 {hostel.price}</p>
      </div>

      {/* Pass the hostel object as a prop to Hostel_book */}
    
   <Hostel_Overview/>
  
    </>
  );
};

export default Hostel_individual;
