import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css'; // Import the CSS file
import img from "../../images/iconmonstr-binoculars-9-240.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="fbar vr-items-line-bar "></div>
            <div className="footer-content">
                <div className="footer-section flogo">
                    <img src={img} alt="VIRLOOK Logo" className="vr-logo" />
                    <h1>VIRLOOK</h1>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact Us</h2>
                    <div className="contact-box">
                        <p>info@vrwebsite.com</p>
                        <p>+1 (234) 567-890</p>
                        <p>123 VR Street, VR City, VR 12345</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 VRWebsite. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
