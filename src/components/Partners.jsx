import React from 'react';
import './Partners.css';
import logo1 from '../assets/esewa.png';
import logo2 from '../assets/partners.png';
import logo3 from '../assets/college.png';
import logo4 from '../assets/khalti.png';


const LogoSection = () => {
  return (
    <div className="logo-container">
      {/* First Section with 2 logos */}
      <div className="logo-group">
        <h3 className="logo-title">Associate Partners</h3>
        <div className="logo-box">
          <img src={logo2} alt="Logo 1" className="logo-image" />
          <img src={logo2} alt="Logo 2" className="logo-image" />
        </div>
      </div>
      
      {/* Middle Section with 2 logos */}
      <div className="logo-group">
        <h3 className="logo-title">Associate College</h3>
        <div className="logo-box">
          <img src={logo3} alt="Logo 3" className="logo-image" />
          <img src={logo3} alt="Logo 4" className="logo-image" />
        </div>
      </div>
      
      {/* Last Section with 3 logos */}
      <div className="logo-group">
        <h3 className="logo-title">Payment Partners</h3>
        <div className="logo-box">
          <img src={logo1} alt="Logo 5" className="logo-image" />
          <img src={logo4} alt="Logo 6" className="logo-image" />
          <img src={logo1} alt="Logo 7" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default LogoSection;

