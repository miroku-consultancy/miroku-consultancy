import React from 'react';
import teamImage from '../assets/images/team.jfif'; // Replace with your actual image path
import officeImage from '../assets/images/office.jfif'; // Replace with your actual image path

const About = () => {
    return (
        <section id="about" style={styles.aboutSection}>
            <h2>About Us</h2>
            {/* Team Section */}
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
            {/* Office Section */}
            <div style={styles.content}>
                <div style={styles.textContainer}>
                    <p style={styles.officeTitle}>Our Office</p>
                    <p style={styles.officeSubtitle}>Where innovation meets collaboration.</p>
                    <p>
                        Our office is designed to foster creativity and teamwork, equipped with state-of-the-art technology and flexible workspaces. We believe that a collaborative environment enhances productivity and encourages innovative thinking. From open meeting areas to quiet zones, our office caters to various working styles, ensuring our team can thrive in their projects. Join us in a space where ideas come to life and partnerships grow.
                    </p>
                </div>
                <div style={styles.imageContainer}>
                    <img src={officeImage} alt="Our Office" style={styles.officeImage} />
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
