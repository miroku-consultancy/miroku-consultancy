import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Miroku Consultancy Services</h1>
            <nav>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
