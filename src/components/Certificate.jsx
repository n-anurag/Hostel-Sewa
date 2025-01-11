import React from 'react';

import './Certificate.css'; // Make sure to create this CSS file

// Import images (replace with the actual path of your images)
import image1 from '../assets/frame.png';


const CertificateGrid = () => {
  return (
    <>
    <div className="heading">Legal<br/>Registration Certificates</div>
    <div className="certificate-grid">
      <img src={image1} alt="Certificate 1" className="certificate-image" />
      <img src={image1} alt="Certificate 1" className="certificate-image" />
      <img src={image1} alt="Certificate 1" className="certificate-image" />
      <img src={image1} alt="Certificate 1" className="certificate-image" />
      
      

    </div>
    </>
  );
};

export default CertificateGrid;
