import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import student from '../Contact/image.jpeg';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import './Contact.css';
import Partners from '../Partners';
import Footer from '../Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    messageTitle: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  // Animation variants for sliding effects
  const leftSlideVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightSlideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <Navbar />
      <motion.div
        className="cover-container"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <img className="cover-image" src={student} alt="Student Login" />
        <div className="overlay_cover">
          <div className="overlay-content">
            {/* Left side - contact details */}
            <motion.div
              className="contact-details"
              variants={leftSlideVariants}
            >
              <h2>Hostel Sewa Pvt.Ltd</h2>
              <p><span role="img" aria-label="location">📍</span> Kumaripati, Lalitpur 44700</p>
              <p><span role="img" aria-label="email">📧</span> Hostelsewa123@gmail.com</p>
              <p><span role="img" aria-label="phone">📞</span> +977 9845567897</p>

              <h3>Follow us on social media</h3>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel=""><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>

              {/* Map */}
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5152091134927!2d85.31473281447364!3d27.68187473353316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198ff9b1b2f1%3A0x71441da58f1b5b47!2sKumaripati%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1618320365301!5m2!1sen!2snp"
                  width="100%"
                  height="200"
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Map"
                ></iframe>
              </div>
            </motion.div>

            {/* Right side - contact form */}
            <motion.div
              className="contact-form-overlay"
              variants={rightSlideVariants}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contact Us</h2>
                <div className="form-row">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Mobile number*"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  <select
                    name="messageTitle"
                    value={formData.messageTitle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Message Title*</option>
                    <option value="Hostel Booking/Registration">Hostel Booking/ Registration</option>
                    <option value="Hostel Sell/Purchase">Hostel Sell/ Purchase</option>
                    <option value="Job/Staffs">Job/ Staffs</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: '#007bff',
                    transition: { duration: 0.3 },
                  }}
                >
                  Submit
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <Partners />
      <Footer />
    </>
  );
};

export default Contact;
