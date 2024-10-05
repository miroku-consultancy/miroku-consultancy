// src/components/Industry.js
import React from 'react';
import './Industries.css'; // Create this CSS file for styling
import ecommerceImg from '../assets/images/ecommerce.jfif'; // Replace with actual image paths
import erpImg from '../assets/images/erp.jfif'; // Replace with actual image paths
import socialImg from '../assets/images/social.png'; // Replace with actual image paths
import WebsiteImg from '../assets/images/WebsiteImg.jfif';

const Industry = () => {
    const industries = [
        { 
            name: 'Ecommerce', 
            description: 'Online retail and sales solutions that empower businesses to reach their customers effectively through user-friendly platforms.',
            details: 'Our ecommerce solutions include fully customizable storefronts, secure payment gateways, and integrated inventory management systems, ensuring a seamless shopping experience for customers and increased sales for businesses.', 
            image: ecommerceImg 
        },
        { 
            name: 'ERP', 
            description: 'Enterprise Resource Planning for businesses to streamline operations and improve efficiency.',
            details: 'We provide comprehensive ERP solutions that integrate various business processes, including finance, HR, and supply chain management, enabling real-time data access and informed decision-making.', 
            image: erpImg 
        },
        { 
            name: 'Social', 
            description: 'Social media platforms and solutions for enhancing engagement and communication.',
            details: 'Our social media solutions help businesses build their online presence, engage with their audience, and analyze user behavior through targeted advertising and analytics tools.', 
            image: socialImg 
        },
        { 
            name: 'Website', 
            description: 'Single page applications designed for speed and efficiency without traditional loading times.',
            details: 'Our website solutions leverage modern frameworks to create responsive and interactive single-page applications, ensuring a smooth user experience across all devices.', 
            image: WebsiteImg 
        },
        // Add more industries as needed
    ];

    return (
        <div className="industry-container">
            <h1>Industries We Serve</h1>
            <ul className="industry-list">
                {industries.map((industry, index) => (
                    <li key={index} className="industry-item">
                        <img src={industry.image} alt={industry.name} className="industry-image" />
                        <h2>{industry.name}</h2>
                        <p>{industry.description}</p>
                        <p className="industry-details">{industry.details}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Industry;
