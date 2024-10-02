import React from 'react';
import './Services.css'; // Import your styles
import customSoftwareImg from '../assets/images/custom-software.jfif';
import cloudSolutionsImg from '../assets/images/cloud-solutions.jfif';
import itStrategyImg from '../assets/images/it-strategy.jfif';
import agileTransformationImg from '../assets/images/agile-transformation.jfif';

const servicesData = [
    {
        title: 'Custom Software Development',
        description: 'Tailored software solutions to meet your business needs.',
        image: customSoftwareImg,
    },
    {
        title: 'Cloud Solutions',
        description: 'Flexible and scalable cloud services for your organization.',
        image: cloudSolutionsImg,
    },
    {
        title: 'IT Strategy and Consulting',
        description: 'Expert advice to optimize your IT infrastructure.',
        image: itStrategyImg,
    },
    {
        title: 'Agile Transformation',
        description: 'Transforming your processes for better efficiency and adaptability.',
        image: agileTransformationImg,
    },
];

const Services = () => {
    return (
        <section id="services">
            <h2>Our Services</h2>
            <p>We offer a range of software consultancy services including:</p>
            <div className="services-list">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <img src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
