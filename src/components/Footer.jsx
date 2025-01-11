import React from 'react';
import './Footer.css';
import logo from "../assets/logo.png";
import { FaHome, FaHotel, FaUserAlt, FaFacebook, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        
        <div className="footer_one">
          <img src={logo} alt="Logo" className="logo_footer" />
          <ul>
            <li><FaHome className="icon" /> Lalitpur, Kathmandu</li>
            <li><FaHotel className="icon" /> +977 9874578454</li>
            <li><FaUserAlt className="icon" /> Hostel@gmail.com</li>
          </ul>
          
        </div>
        
        <div className="vertical_line"></div> 
        <div className="footer_two">
          <p className='follow'>Follow Us</p>
          <p>Providing detailed information about premium <br /> hostels around Nepal.</p>
          <div className="social_icons">
            <FaFacebook className="social_icon" />
            <FaTwitter className="social_icon" />
            <FaInstagram className="social_icon" />
            <FaGoogle className="social_icon" />
          </div>
        </div>
        <div className="vertical_line"></div> {/* Vertical Line */}
        <div className="footer_three">
          <p className='newsletter_heading'>Our Newsletter</p>
          <form action="">
            <input type="email" placeholder="Email" aria-label="Email" required />
          </form>
          <button type="submit" className="subscribe_button">Subscribe</button>
        </div>
       
       
      </footer>
      <section className="footer_bottom">
        <p>Hostel Sewa 2024. Designed by Ashim K & Developed by DS</p>
        <p><u>Privacy Policy</u> <br /> <u>Terms and Conditions</u></p>
      </section>
    </>
  );
};

export default Footer;
