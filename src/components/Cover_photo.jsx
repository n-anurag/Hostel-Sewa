import React from 'react';
import { motion } from 'framer-motion';
import './Cover_photo.css';
import student from '../assets/student_login.jpeg';

const WelcomeSection = () => {
  return (
    <div className="coverSectionContainer">
      {/* Animate the image */}
      <motion.img
        className="coverSectionImage"
        src={student}
        alt="Student Login"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Overlay with text animations */}
      <div className="coverSectionOverlay">
        <motion.p
          className="coverSectionWelcomeText"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          WELCOME TO
        </motion.p>
        <motion.h1
          className="coverSectionTitle"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="coverSectionHostelColor">HOSTEL</span>{' '}
          <span className="coverSectionSewa">SEWA</span>
        </motion.h1>
        <motion.p
          className="coverSectionSubtitle"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Your Second Home – Premium Services for Students at Hostelsewa Nepal"
        </motion.p>

        {/* Animate the search bar */}
        <motion.div
          className="coverSectionInputField"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
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
            <button className="coverSectionSearchButton">Search Hostel</button>
          </div>
        </motion.div>

        {/* Animate the filter bar */}
        <motion.div
          className="coverSectionFilterBar"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default WelcomeSection;
