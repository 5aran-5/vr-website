import React from "react";
import './Header.css';

import img from "../../images/iconmonstr-binoculars-9-240.png"

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <img src={img} alt="VIRLOOK Logo" className="header-logo" />
                <h1>VIRLOOK</h1>
            </div>
            <nav className="nav-container">
                <ul>
                    <li>Product</li>
                    <li>Apps & Games</li>
                    <li>Features</li>
                    <li>Support</li>
                    <li>About Us</li>
                </ul>
            </nav>
            <div className="signup">Signup</div>
        </header>
    );
};

export default Header;
