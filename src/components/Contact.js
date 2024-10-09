import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/content.json');
            const data = await response.json();
            setContactInfo(data.contact);
        };

        fetchData();
    }, []);

    if (!contactInfo) return <div>Loading...</div>; // Handle loading state

    return (
        <section id="contact" style={{ ...styles.contactSection, backgroundImage: `url(${process.env.PUBLIC_URL}/${contactInfo.backgroundImage})` }}>
            <h2>{contactInfo.heading}</h2>
            <p>{contactInfo.description}</p>
            <div style={styles.addressInfo}>
                <p>{contactInfo.office.title}</p>
                <p style={styles.address}>{contactInfo.office.address}</p>
            </div>
            <div style={styles.contactInfo}>
                <img src={`${process.env.PUBLIC_URL}/${contactInfo.email.icon}`} alt="Email Icon" style={styles.icon} />
                <p>Email: <a href={`mailto:${contactInfo.email.address}`} style={styles.emailLink}>{contactInfo.email.address}</a></p>
            </div>
        </section>
    );
};

const styles = {
    contactSection: {
        padding: '40px 20px',
        textAlign: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
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
        color: '#fff',
        textDecoration: 'underline',
    },
    addressInfo: {
        marginTop: '20px',
    },
    address: {
        fontSize: '1.2em',
    },
};

export default Contact;
