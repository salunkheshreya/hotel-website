import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className='d1'>
            <a href='https://www.facebook.com/'><FaFacebook/></a>
            <a href='https://www.twitter.com/' ><FaTwitter /></a>
             <a href='https://www.instagram.com/'><FaInstagram /></a>
             <a href='https://www.linkedin.com/'><FaLinkedin /></a>
             <a href='https://www.telegram.org/'><FaTelegram /></a>
             </div>
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Hotel Booking Management System. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
