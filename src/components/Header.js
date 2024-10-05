import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/images/logo.jfif'; // Optional logo image

const Header = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleMouseEnter = (index) => {
        setExpandedIndex(index);
    };

    const handleMouseLeave = () => {
        setExpandedIndex(null);
    };

    const navItems = [
        {
            name: 'Industries',
            id: '#industries',
            description: ['Ecommerce', 'ERP', 'Social'],
        },
        {
            name: 'Solutions',
            id: '#solutions',
            description: ['Web App', 'Hybrid Mobile App', 'Rest API', 'Azure/AWS'],
        },
        {
            name: 'Services',
            id: '#services',
            description: ['Custom Software Development', 'Cloud Solutions', 'IT Strategy and Consulting', 'Agile Transformation'],
        },
        {
            name: 'Training',
            id: '#training',
            description: ['Dot net', 'React', 'React-native', 'Python'],
        },
        {
            name: 'Company',
            id: '#about',
            description: ['About Us'],
        },
        {
            name: 'Contact',
            id: '#contact',
            description: ['mirokuconsultancyservices@gmail.com'],
        },
    ];

    return (
        <header className="header">
            <div className="logo-container">
                <img src={logo} alt="Miroku Consultancy Logo" className="logo" />
                <div className="logo-container">
                    <span className="short-name">mcs</span>
                    <div className="long-name">
                        <span>MIROKU</span>
                        <span>CONSULTANCY</span>
                        <span>SERVICES</span>
                    </div>
                </div>
            </div>

            <nav>
                <ul className="nav-list">
                    {navItems.map((item, index) => (
                        <li
                            key={item.name}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a
                                href={item.id}
                                className="dropdown-toggle"
                                aria-label={`Toggle ${item.name} dropdown`}
                            >
                                {item.name}
                            </a>
                            {expandedIndex === index && (
                                <div className="dropdown-content">
                                    {item.description.map((desc, descIndex) => (
                                        <div key={descIndex} className="dropdown-item">
                                            {desc}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
