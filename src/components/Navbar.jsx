import React, { useState, useEffect } from 'react';
import { FaHome, FaHotel, FaUserAlt, FaBlogger, FaBoxOpen, FaInfoCircle, FaPhoneAlt, FaBars, FaUserCircle } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa'; 
import './Navbar.css';
import logo from "../assets/logo.png";
import Navigate from './Navigate/Navigate';
import InquiryModal from './InquiryModal';

const Navbar = ({ register, hostelClick, login, home, neha, gallery, blog, about, form, contact, store, form_staff, isLoggedIn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isJumping, setIsJumping] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsJumping(true);
            setTimeout(() => setIsJumping(false), 1000); // Jump for 1 second
        }, 5000); // Every 5 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <>
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="menu-icon" onClick={toggleMobileMenu}>
                <FaBars />
            </div>
            
            <ul className={`navbar-list ${isMobileMenuOpen ? 'show-menu' : ''}`}>
                <li onClick={home}><FaHome className="icon2" />Home</li>
                <li onClick={hostelClick}><FaHotel className="icon2" />Hostel</li>
                <li onClick={neha}><FaUserAlt className="icon2" />NeHa</li>
                <li onClick={gallery}><FaImage className="icon2" />Gallery</li> 
                <li onClick={blog}><FaBlogger className="icon2" />Blogs</li>
                <li onClick={store}><FaBoxOpen className="icon2" />Products</li>
                <li onClick={about}><FaInfoCircle className="icon2" />About Us</li>
                <li onClick={contact}><FaPhoneAlt className="icon2" />Contact Us</li>
                {isLoggedIn ? (
                    <li><FaUserCircle className="icon2" />Profile</li>
                ) : (
                    <li onClick={login} className="user-login">User Login</li>
                )}
                <li onClick={form_staff} className="user-login">Forms</li>
            </ul>
            <button
                onClick={openModal}
                className={`inquiry ${isJumping ? 'jump' : ''}`}
            >
                Inquiry Now
            </button>
            <InquiryModal isOpen={isModalOpen} onClose={closeModal} />
        </nav>
        </>
    );
};

export default Navigate(Navbar);
