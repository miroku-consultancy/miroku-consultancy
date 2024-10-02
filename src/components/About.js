import React from 'react';
import teamImage from '../assets/images/team.jfif'; // Replace with your actual image path
import officeImage from '../assets/images/office.jfif'; // Replace with your actual image path

const About = () => {
    return (
        <section id="about" style={styles.aboutSection}>
            <h2>About Us</h2>
            <div style={styles.content}>
                <div style={styles.textContainer}>
                    <p>
                        Welcome to Miroku Consultancy Services, where we provide expert software solutions tailored to your business needs. Our team of experienced professionals is dedicated to helping you succeed in the ever-evolving tech landscape.
                    </p>
                    <p>
                        We believe in building strong partnerships with our clients and delivering high-quality results that exceed expectations. Our services include custom software development, IT strategy consulting, and agile transformations.
                    </p>
                </div>
                <div style={styles.imageContainer}>
                    <img src={teamImage} alt="Our Team" style={styles.image} />
                </div>
            </div>
            <div style={styles.officeContainer}>
                <img src={officeImage} alt="Our Office" style={styles.officeImage} />
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
        alignItems: 'center',
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
    officeContainer: {
        marginTop: '20px',
    },
    officeImage: {
        width: '100%',
        borderRadius: '8px',
    },
};

export default About;
