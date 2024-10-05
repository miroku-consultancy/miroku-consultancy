// src/components/Solutions.js
import React from 'react';
import './Solutions.css';
import webAppImg from '../assets/images/web-app.jfif'; // Replace with actual image paths
import mobileAppImg from '../assets/images/mobile-app.jfif'; // Replace with actual image paths
import apiImg from '../assets/images/api.jfif'; // Replace with actual image paths
import cloudImg from '../assets/images/cloud.jfif'; // Replace with actual image paths

const Solutions = () => {
    const solutionsData = [
        {
            title: 'Web Applications',
            description: 'Custom web applications tailored to your business needs, enhancing productivity and efficiency.',
            image: webAppImg,
        },
        {
            title: 'Hybrid Mobile Applications',
            description: 'Cross-platform mobile applications that deliver a native experience on both Android and iOS.',
            image: mobileAppImg,
        },
        {
            title: 'REST APIs',
            description: 'Robust and secure APIs that allow seamless integration with various systems and services.',
            image: apiImg,
        },
        {
            title: 'Cloud Solutions',
            description: 'Scalable cloud services leveraging platforms like AWS and Azure to support your business growth.',
            image: cloudImg,
        },
    ];

    return (
        <section id="solutions" className="solutions-section">
            <h1>Our Solutions</h1>
            <div className="solutions-list">
                {solutionsData.map((solution, index) => (
                    <div key={index} className="solution-item">
                        <img src={solution.image} alt={solution.title} className="solution-image" />
                        <h2>{solution.title}</h2>
                        <p>{solution.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Solutions;
