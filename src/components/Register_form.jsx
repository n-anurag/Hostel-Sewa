// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';
import './Register_form.css';
import { FaCheck } from 'react-icons/fa';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    retypePassword: '',
    dob: '',
    mobile: '',
    address: '',
    profilePic: null,
    gender: '',
    type: '',
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormData({
      ...formData,
      [id]: files ? files[0] : value, // Handle file input separately
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for Axios
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', data, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important for file uploads
        },
      });
      alert('Registration successful!');
      console.log(response.data); // Handle server response
    } catch (error) {
      alert('Registration failed. Please try again.', error);
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="register-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fullName">Full Name*</label>
              <input
                type="text"
                id="fullName"
                placeholder="Ram Bahadur"
                required
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                placeholder="Rambdr123@gmail.com"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="retypePassword">Retype Password</label>
              <input
                type="password"
                id="retypePassword"
                required
                value={formData.retypePassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="mobile">Mobile No.*</label>
              <input
                type="text"
                id="mobile"
                placeholder="9845055444"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Kathmandu"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="form-field">
              <label htmlFor="profilePic">Profile Picture</label>
              <input
                type="file"
                id="profilePic"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="type">Type</label>
              <select
                id="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Student">Student</option>
                <option value="Non-Student">Non-Student</option>
              </select>
            </div>
          </div>
          <button type="submit" className="submit-button">
            <span>Submit</span>
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RegisterForm;
