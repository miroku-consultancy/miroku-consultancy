import React from 'react';
import './Training.css'; // Add your styles here
import dotNetImg from '../assets/images/dotnet.jfif';
import reactImg from '../assets/images/react.jfif';
import reactNativeImg from '../assets/images/react-native.jfif';
import pythonImg from '../assets/images/python.jfif';

const Training = () => {
    const trainingPrograms = [
        {
            title: 'Dot Net',
            description: 'This course covers the fundamentals of .NET programming, including C#, ASP.NET, and more.',
            duration: '6 weeks',
            prerequisites: 'Basic programming knowledge is recommended.',
            image: dotNetImg,
        },
        {
            title: 'React',
            description: 'Learn to build interactive user interfaces with React, a powerful JavaScript library.',
            duration: '4 weeks',
            prerequisites: 'Familiarity with JavaScript is required.',
            image: reactImg,
        },
        {
            title: 'React Native',
            description: 'Develop mobile applications using React Native for a native experience on both iOS and Android.',
            duration: '5 weeks',
            prerequisites: 'Basic understanding of React is needed.',
            image: reactNativeImg,
        },
        {
            title: 'Python',
            description: 'Comprehensive introduction to Python programming, covering data structures, algorithms, and more.',
            duration: '8 weeks',
            prerequisites: 'No prior programming experience required.',
            image: pythonImg,
        },
    ];

    return (
        <section className="training-section">
            <h1>Our Training Programs</h1>
            <div className="training-list">
                {trainingPrograms.map((program, index) => (
                    <div key={index} className="training-item">
                        <img src={program.image} alt={program.title} className="training-image" />
                        <h2>{program.title}</h2>
                        <p>{program.description}</p>
                        <p><strong>Duration:</strong> {program.duration}</p>
                        <p><strong>Prerequisites:</strong> {program.prerequisites}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Training;
