import React, { useEffect, useState } from 'react';
import './Industries.css'; 

const Industry = () => {
    const [industries, setIndustries] = useState([]);
    const [expandedIndex, setExpandedIndex] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/content.json');
            const data = await response.json();
            setIndustries(data.industries);
        };

        fetchData();
    }, []);

    const toggleDetails = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="industry-container">
            <h1>Industries We Serve</h1>
            <ul className="industry-list">
                {industries.map((industry, index) => (
                    <li key={index} className="industry-item">
                        <img src={process.env.PUBLIC_URL + '/' + industry.image} alt={industry.name} className="industry-image" />
                        <h2>{industry.name}</h2>
                        <p>{industry.description}</p>
                        <button onClick={() => toggleDetails(index)}>
                            {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                        </button>
                        {expandedIndex === index && <p className="industry-details">{industry.details}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Industry;
