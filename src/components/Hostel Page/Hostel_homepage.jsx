import React from 'react';
import { motion } from 'framer-motion';
import './Hostel_homepage.css';
import Hostel_card from '../Hostel_card';
import Review from '../Review';
import student from '../Hostel Page/images/hostelpage_cover.jpeg';
import Testimonial from '../Testimonial';
import Partners from '../Partners';
import Footer from '../Footer';
import Navbar from '../Navbar';
import '../Cover_photo.css';

const Hostel_homepage = () => {
  return (
    <>
      <Navbar />

      {/* Cover Section */}
      <motion.div
        className="cover-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          className="cover-image"
          src={student}
          alt="Student Login"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="overlay_cover"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <p className="welcome-text">Our Verified Hostels</p>

          {/* Search Section */}
          <motion.div
            className="input-field"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="coverSectionInputField">
              <div className="coverSectionSearchBar">
                <input
                  type="text"
                  placeholder="Hostel Name"
                  className="coverSectionSearchInput"
                />
                <select className="coverSectionQualityDropdown">
                  <option>By Quality</option>
                  <option>High Quality</option>
                  <option>Medium Quality</option>
                  <option>Low Quality</option>
                </select>
                <button className="coverSectionSearchButton">
                  Search Hostel
                </button>
              </div>
            </div>

            {/* Filters Section */}
            <div className="coverSectionFilterBar">
              <select className="coverSectionFilterDropdown">
                <option>District</option>
                <option>Kathmandu</option>
                <option>Lalitpur</option>
                <option>Bhaktapur</option>
              </select>
              <select className="coverSectionFilterDropdown">
                <option>Areas</option>
                <option>Thamel</option>
                <option>Baneshwor</option>
                <option>Patan</option>
              </select>
              <select className="coverSectionFilterDropdown">
                <option>Hostel Type</option>
                <option>Boys Hostel</option>
                <option>Girls Hostel</option>
                <option>Co-ed Hostel</option>
              </select>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hostel Cards Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Hostel_card />
      </motion.div>

      {/* Gap */}
      <div className="gap"></div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Testimonial />
      </motion.div>

      {/* Gap */}
      <div className="gap"></div>

      {/* Partners Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Partners />
      </motion.div>

      {/* Footer Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Footer />
      </motion.div>
    </>
  );
};

export default Hostel_homepage;
