import React from 'react';
import './Header.css';
import logo from '../assets/images/logo.jfif'; // Optional logo image

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Miroku Consultancy Logo" className="logo" />
                <h1>Miroku Consultancy Services</h1>
            </div>
            <nav>
                <ul className="nav-list">
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
