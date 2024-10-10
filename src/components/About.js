import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutInfo, setAboutInfo] = useState(null);
    const [error, setError] = useState(null); // New error state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/content.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setAboutInfo(data.about);
            } catch (error) {
                setError(error.message); // Set error message
            }
        };

        fetchData();
    }, []);

    if (error) return <div>Error: {error}</div>; // Display error message
    if (!aboutInfo) return <div>Loading...</div>; // Handle loading state

    return (
        <section id="about" style={styles.aboutSection}>
            <h2>{aboutInfo.heading}</h2>
            {/* Team Section */}
            <div style={styles.content}>
                <div style={styles.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/${aboutInfo.teamImage}`} alt="Our Team" style={styles.image} />
                </div>
                <div style={styles.textContainer}>
                    {aboutInfo.description.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
            </div>
            {/* Office Section */}
            <div style={styles.content}>
                <div style={styles.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/${aboutInfo.office.image}`} alt="Our Office" style={styles.officeImage} />
                </div>
                <div style={styles.textContainer}>
                    <p style={styles.officeTitle}>{aboutInfo.office.title}</p>
                    <p style={styles.officeSubtitle}>{aboutInfo.office.subtitle}</p>
                    <p>{aboutInfo.office.description}</p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    aboutSection: {
        padding: '40px 20px',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px',
    },
    textContainer: {
        marginTop: '20px',
        maxWidth: '600px',
    },
    imageContainer: {
        width: '100%',
    },
    image: {
        width: '100%',
        borderRadius: '8px',
    },
    officeImage: {
        width: '100%',
        borderRadius: '8px',
    },
    officeTitle: {
        fontSize: '1.5em',
        fontWeight: 'bold',
    },
    officeSubtitle: {
        fontSize: '1.2em',
        marginBottom: '10px',
    },
};

export default About;
