// OverviewSection.js
import React from 'react';
import { FaBed, FaBath, FaUserGraduate, FaHome, FaMoneyBillWave, FaBuilding,  FaPhoneAlt, FaEnvelope, FaFacebook, FaWhatsapp, FaLinkedin, FaTwitter, FaViber,FaCheckCircle } from 'react-icons/fa';
import './Hostel_Overview.css';
import Gallery from '../Gallery'
import Testimonial from '../Testimonial';
import Partners from '../Partners'
import Footer from '../Footer';
import Navigate from '../Navigate/Navigate';
import Hostel_individual from './Hostel_Indivudual';
import ad from './images/hostelpage_cover.jpeg'
import Hostel_book from '../Booking/Hostel_book';

const featuresList = [
  "24 hrs Hot and Cold Water",
  "Reliable WIFI",
  "CC Camera",
  "Locker",
  "TV Room",
  "24 hrs Electricity",
  "Laundry",
  "Peaceful Environment",
  "Study Table",
  "No Smoking",
  "Veg / Non Veg Meal",
  "4 Time Meals",
  "Pillow",
  "Water Dispenser"
];



const OverviewSection = ({book,hostel}) => {

  return (

    <>

    <div className="overview-section-container">
     <div className="overview-section">
        <div className="overview-content">
          <h2 className="overview-title">Overview</h2>
          <p className="overview-description">
            If you are a student searching for a Boys Hostel in New Baneshwor, Kathmandu, look no further! Roommates Boy’s Hostel is one of the best & affordable hostels, strategically located near Uniglobe College, CIST College, Global College of Management, Apex College, Rajdhani Model College, Aims Institute, Himalayan White House International College, ACE Institute of Management, Gurukul CA, making it an ideal choice for students studying in the area. As a Boys hostel near Kathmandu, we understand the importance of accessibility, and that’s why we ensure easy access to hospitals and transportation facilities. Whether you're an employee or a student in Kathmandu, you'll find our accommodation to be friendly and familiar, offering a comfortable and convenient stay. Embrace the perfect balance of proximity to educational institutions and essential amenities by choosing our hostel as your home away from home. Experience a hassle-free and enriching stay with us! Our hostel is nearby to Minbhawan, Sinamangal, Old Baneshwor, Tinkune.
          </p>
          <div className="overview-stats">
            <div className="stat">
              <FaHome className="stat-icon" />
              <p>Rooms: 18</p>
            </div>
            <div className="stat">
              <FaMoneyBillWave className="stat-icon" />
              <p>Price: 12000</p>
            </div>
            <div className="stat">
              <FaBath className="stat-icon" />
              <p>Bathrooms: 6</p>
            </div>
            <div className="stat">
              <FaBuilding className="stat-icon" />
              <p>Floors: 3</p>
            </div>
            <div className="stat">
              <FaBed className="stat-icon" />
              <p>Beds: 50</p>
            </div>
            <div className="stat">
              <FaUserGraduate className="stat-icon" />
              <p>Students: 40</p>
            </div>
          </div>

          <h2 className="features-title">Hostel Features</h2>
          <div className="features-grid">
            {featuresList.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheckCircle className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <div className="meal-schedule">
     <h2 className="meal-title">Meal Schedule</h2>
     <p className="meal-subtitle">
       <a href="#" className="meal-link">Hygienic and Delicious Meals, Everyday</a>
     </p>

     <div className="meal-section">
       <h3 className="meal-section-title">Weekly Evening Breakfast / Khaja Menu:</h3>
       <ul className="meal-list">
         <li>Sunday: Paratha / Pasta</li>
         <li>Monday: Cheura Dalmot Mix / Chana Bhujia Fry</li>
         <li>Tuesday: Roti Tarkari / Puri Tarkari</li>
         <li>Wednesday: Wai Wai Fry / Chowmein</li>
         <li>Thursday: Samosa Aachar / Egg Chana</li>
         <li>Friday: Soup Noodles / Fried Rice</li>
         <li>Saturday: Doughnut with Milk Tea / Chatpati / Panipuri</li>
       </ul>
     </div>

     <div className="meal-section">
       <h3 className="meal-section-title">Daily Lunch and Dinner:</h3>
       <ul className="meal-list">
         <li>Standard Nepali meal served every morning and evening.</li>
       </ul>
     </div>

     <div className="meal-section">
       <h3 className="meal-section-title">Special Weekly Menu:</h3>
       <ul className="meal-list">
         <li>Chicken: Twice a week</li>
         <li>Egg Curry: Once a week</li>
         <li>Fish Curry: Once a month</li>
         <li>Vegetarian: Paneer, seasonal vegetables, milk, sweets, etc.</li>
       </ul>
     </div>
   </div>

   
        </div>

        
        

        {/* Search Hostels Form */}
      <div className="search-hostel-flex">
        <div className="search-hostels">
 ad image
        </div>
        <div className="gap"></div>
        <div className="search-hostels">
       
          <div className="text-search">
          <h2 className="search-title">Search Hostels</h2>
          <div className="form-group">
            <p>Address/ Near Area</p>
            {/* <label htmlFor="address">Address/ Near Area</label> */}
            <input style={{width:'300px'}}
              type="text"
              id="address"
              placeholder="Eg: Lalitpur"
              className="form-input"
            />
          </div>
          <div className="form-group">
            {/* <label htmlFor="gender">Gender</label> */}
            <p>Gender</p>
            <select style={{width:'310px'}} id="gender" className="form-input">
              <option  value="">Select a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <button className="search-buttons">Search</button>

          
          </div>
       
<div className="gap"></div>

  
       
      </div>
       


{/* Hostel Information Card Below Search Hostels */}
<Hostel_book hostel={hostel} />

  

      </div>
      </div>
      </div>








      <div className="bed">
    <div className="available-beds-container">
      <h2 className="table-title">Available Beds</h2>
      <table className="available-beds-table">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Single</th>
            <th>2 Sharing</th>
            <th>3 Sharing</th>
            <th>4 Sharing</th>
            <th>5 Sharing</th>
          </tr>
        </thead>
        </table>
        <table className="available-beds-table">
        <thead>
          <tr>
            <td data-label="Room Type">Per Bed Price</td>
            <td data-label="Single">15000.00</td>
            <td data-label="2 Sharing">14000.00</td>
            <td data-label="3 Sharing">13000.00</td>
            <td data-label="4 Sharing">12500.00</td>
            <td data-label="5 Sharing">12000.00</td>
          </tr>
          <tr className="available-beds-row">
            <td data-label="Room Type">Available Beds</td>
            <td data-label="Single">1</td>
            <td data-label="2 Sharing">1</td>
            <td data-label="3 Sharing">4</td>
            <td data-label="4 Sharing">5</td>
            <td data-label="5 Sharing">6</td>
          </tr>
          </thead>
      </table>
    </div>




   
    </div>
   
    <div className="location-map-container">
    <Gallery/>
      <h2 className="map-title"> Location</h2>
      <iframe
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.4754907247276!2d85.32396001551166!3d27.708954832017917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970281e2639%3A0x56d6c7ff0c5cf1d!2sNew%20Baneshwor%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1616163608369!5m2!1sen!2snp"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

  <div className="gap"></div>
<Testimonial/>

    </div>

    <Partners/>
    <Footer/>

  </>

  );
};

export default Navigate(OverviewSection);
