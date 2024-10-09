import React, { useEffect, useState } from 'react';

const About = () => {
    const [aboutInfo, setAboutInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/content.json');
            const data = await response.json();
            setAboutInfo(data.about);
        };

        fetchData();
    }, []);

    if (!aboutInfo) return <div>Loading...</div>; // Handle loading state

    return (
        <section id="about" style={styles.aboutSection}>
            <h2>{aboutInfo.heading}</h2>
            {/* Team Section */}
            <div style={styles.content}>
                <div style={styles.textContainer}>
                    {aboutInfo.description.map((para, index) => (
                        <p key={index}>{para}</p>
                    ))}
                </div>
                <div style={styles.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/${aboutInfo.teamImage}`} alt="Our Team" style={styles.image} />
                </div>
            </div>
            {/* Office Section */}
            <div style={styles.content}>
                <div style={styles.textContainer}>
                    <p style={styles.officeTitle}>{aboutInfo.office.title}</p>
                    <p style={styles.officeSubtitle}>{aboutInfo.office.subtitle}</p>
                    <p>{aboutInfo.office.description}</p>
                </div>
                <div style={styles.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/${aboutInfo.office.image}`} alt="Our Office" style={styles.officeImage} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start', // Align items to the top
        marginBottom: '40px',
    },
    textContainer: {
        flex: 1,
        marginRight: '20px',
    },
    imageContainer: {
        flex: 1,
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
        fontSize: '1.5em', // Larger font size for the title
        fontWeight: 'bold',
    },
    officeSubtitle: {
        fontSize: '1.2em', // Larger font size for the subtitle
        marginBottom: '10px',
    },
};

export default About;
