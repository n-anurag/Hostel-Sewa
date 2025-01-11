import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import student from '../assets/student_login.jpeg';
import logo from '../assets/logo.png';
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import Footer from './Footer';
import './Owner_login.css';
import Partners from './Partners'
import Navigate from './Navigate/Navigate';
const OwnerLogin = ({ register_owner }) => {
  const [isOwner, setIsOwner] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    if (!isOwner) {
      navigate('/login/student'); // Replace with the actual path for student login
    } else {
      setIsOwner(false);
    }
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
  
      <div className="auth-wrapper">
        {/* Login Form */}
        <div className="auth-card login-card">
          <div className="auth-header">Owner Login</div>
          <form className="auth-form">
            <div className="auth-field">
              <input type="email" placeholder="Email" className="auth-input" />
            </div>
            <div className="auth-field">
              <input
                type="password"
                placeholder="Password"
                className="auth-password"
              />
            </div>
            <div className="auth-actions">
              <a className="reset-password">
                Forgot password?
              </a>
            </div>
            <div className="auth-button-group">
              <button type="button" className="auth-submit">
                Login
              </button>
            </div>
            <button
              style={{
                width: "100%",
                padding: "10px 20px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #1e90ff, #ffa500)",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                color: "white",
                fontSize: "16px",
                fontWeight: "bold",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.3s ease, background 0.3s ease",
              }}
              type="button"
              onClick={handleToggle}
              className="auth-submit"
            >
              Student Login
              </button>
          </form>
          <div className="auth-footer center-align">
            <span>
              Don't have an account?{" "}
              <a
              
                className="switch-auth switch-to-signup"
                onClick={register_owner}
              >
                Signup
              </a>
            </span>
          </div>
          <div className="separator"></div>
          <div className="social-login">
            <a href="#" className="social-button google-button">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt="Google Logo"
                className="google-icon"
              />
              <span>Login with Google</span>
            </a>
          </div>
        </div>

        {/* Signup Form */}
      
      </div>
    
      <Partners />
      <Footer />
    </>
  );
};

export default Navigate(OwnerLogin);
