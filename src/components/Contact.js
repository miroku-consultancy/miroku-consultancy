import React from 'react';
import contactBackground from '../assets/images/contact-background1.jfif'; // Replace with your actual image path
import emailIcon from '../assets/images/email-icon.jfif'; // Replace with your actual image path

const Contact = () => {
    return (
        <section id="contact" style={styles.contactSection}>
            <h2>Contact Us</h2>
            <p>If you're interested in our services, please reach out:</p>
            <div style={styles.contactInfo}>
                <img src={emailIcon} alt="Email Icon" style={styles.icon} />
                <p>Email: <a href="mailto:mirokuconsultancyservices@gmail.com" style={styles.emailLink}>mirokuconsultancyservices@gmail.com</a></p>
            </div>
        </section>
    );
};

const styles = {
    contactSection: {
        padding: '40px 20px',
        textAlign: 'center',
        backgroundImage: `url(${contactBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff', // Change to fit your theme
    },
    contactInfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px',
    },
    icon: {
        width: '30px',
        height: '30px',
        marginRight: '10px',
    },
    emailLink: {
        color: '#fff', // Change to fit your theme
        textDecoration: 'underline',
    },
};

export default Contact;
