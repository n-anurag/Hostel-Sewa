import React, { useState } from 'react';
import './InquiryModal.css';
import img from '../assets/inquiry.png';
import img1 from '../assets/inquiry2.png';
import { FaTimes } from 'react-icons/fa';

const InquiryModal = ({ isOpen, onClose }) => {
  const [seaterCount, setSeaterCount] = useState(2);

  const increaseSeater = () => setSeaterCount(seaterCount + 1);
  const decreaseSeater = () => setSeaterCount(seaterCount > 1 ? seaterCount - 1 : 1);

  if (!isOpen) return null;

  return (
    <>
      <div className="inquiry-modal-overlay" onClick={onClose}></div>
      <div className="inquiry-modal-container">
        <button className="inquiry-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <div className="inquiry-modal-content">
          {/* Left Section */}
          <div className="inquiry-modal-left">
            <h3>How It Works</h3>
            <ul>
              <li>Tell us details of your hostel selection plan</li>
              <li>Select and book the best deal</li>
            </ul>
            <div className="inquiry-icon-row">
              <div className="inquiry-icon-text">
                <img src={img} alt="Verified Owner" />
                <p>100+ Verified Owner</p>
              </div>
              <div className="inquiry-icon-text">
                <img src={img1} alt="Best Services" />
                <p>Best Services</p>
              </div>
            </div>
            <p className="inquiry-contact-info">
              📞 Call Us for details <br />
              9845055997
            </p><br/>
            <p>200+ Hostels | 15+ Locations</p>
          </div>

          {/* Right Section */}
          <div className="inquiry-modal-right">
            <h3>Book Your Favourite Hostel</h3>
            <form>
              <div className="inquiry-form-group">
                <label>Full Name*</label>
                <input type="text" style={{width:'300%'}}/>
              </div>
              <div className="inquiry-form-group">
                <label>Contact Number*</label>
                <input type="text" style={{width:'300%'}}/>
              </div>
              <div className="inquiry-form-group">
                <label>Email*</label>
                <input type="text" style={{width:'300%'}}/>
              </div>
              <div className="inquiry-form-group">
                <label>Hostel Name*</label>
                <input type="text" style={{width:'300%'}}/>
              </div>
              <div className="inquiry-form-group">
                <label>Seater</label>
                <div className="inquiry-seater-options">
                  <button type="button" onClick={decreaseSeater}>-</button>
                  <span>{seaterCount}</span>
                  <button type="button" onClick={increaseSeater}>+</button>
                </div>
              </div>
              <button type="submit" className="inquiry-submit-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default InquiryModal;
