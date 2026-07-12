import React, {
    useEffect,
    useState
} from "react";

import "./Contact.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    const [contactInfo, setContactInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    /* ==========================================
       AOS
    ========================================== */

    useEffect(() => {

        AOS.init({

            duration: 900,

            easing: "ease-out-cubic",

            once: true,

            offset: 100

        });

    }, []);

    /* ==========================================
       LOAD CONTACT
    ========================================== */

    useEffect(() => {

        const loadContact = async () => {

            try {

                const response = await fetch(
                    "/content.json"
                );

                if (!response.ok) {

                    throw new Error(
                        "Unable to load contact information."
                    );

                }

                const data =
                    await response.json();

                setContactInfo(
                    data.contact
                );

            }

            catch (err) {

                setError(
                    err.message
                );

            }

            finally {

                setLoading(false);

            }

        };

        loadContact();

    }, []);

    if (loading) {

        return (

            <div className="contact-loading">

                Loading...

            </div>

        );

    }

    if (error) {

        return (

            <div className="contact-loading">

                {error}

            </div>

        );

    }

    if (!contactInfo) {

        return null;

    }

    return (

        <section id="contact">

            <div className="contact-container">

                {/* ===========================
                    HEADER
                ============================ */}

                <div
                    className="contact-header"
                    data-aos="fade-up"
                >

                    <span className="contact-badge">

                        Get In Touch

                    </span>

                    <h2>

                        {contactInfo.heading}

                    </h2>

                    <p>

                        {contactInfo.description}

                    </p>

                </div>

                {/* ===========================
                    CONTACT NAVIGATION
                ============================ */}

                <div
                    className="contact-details"
                    data-aos="fade-up"
                >

                    <div className="contact-card">

                        <div className="contact-icon">

                            📍

                        </div>

                        <div className="contact-card-content">

                            <h3>

                                Office

                            </h3>

                            <p>

                                {contactInfo.office.title}

                            </p>

                            <span>

                                {contactInfo.office.address}

                            </span>

                        </div>

                    </div>

                    <div className="contact-card">

                        <div className="contact-icon">

                            ✉

                        </div>

                        <div className="contact-card-content">

                            <h3>

                                Email

                            </h3>

                            <a
                                href={`mailto:${contactInfo.email.address}`}
                            >

                                {contactInfo.email.address}

                            </a>

                        </div>

                    </div>

                    <div className="contact-card">

                        <div className="contact-icon">

                            📞

                        </div>

                        <div className="contact-card-content">

                            <h3>

                                Phone

                            </h3>

                            <a
                                href={`tel:${contactInfo.phone.number}`}
                            >

                                {contactInfo.phone.number}

                            </a>

                        </div>

                    </div>

                    <div className="contact-card">

                        <div className="contact-icon">

                            🕒

                        </div>

                        <div className="contact-card-content">

                            <h3>

                                Business Hours

                            </h3>

                            <p>

                                {contactInfo.hours.days}

                            </p>

                            <span>

                                {contactInfo.hours.time}

                            </span>

                        </div>

                    </div>

                </div>
                                {/* ==========================================
                    GOOGLE MAP
                ========================================== */}

                <div
                    className="contact-map-wrapper"
                    data-aos="zoom-in"
                >

                    <iframe

                        src={contactInfo.mapEmbedUrl}

                        title="SyntaxLoom Office"

                        className="contact-map"

                        loading="lazy"

                        allowFullScreen

                        referrerPolicy="no-referrer-when-downgrade"

                    />

                </div>

                {/* ==========================================
                    CALL TO ACTION
                ========================================== */}

                <div
                    className="contact-cta"
                    data-aos="fade-up"
                >

                    <div
                        className="contact-cta-content"
                    >

                        <span
                            className="contact-cta-badge"
                        >

                            Let's Build Something Great

                        </span>

                        <h2>

                            Ready To Start Your Next Project?

                        </h2>

                        <p>

                            Whether you're planning a website,
                            enterprise software, SaaS platform,
                            AI solution, cloud migration or a
                            mobile application, our experienced
                            team is ready to transform your
                            ideas into scalable digital products.

                        </p>

                        <div
                            className="contact-cta-actions"
                        >

                            <a
                                href={contactInfo.buttons.primary.link}
                                className="contact-primary-btn"
                            >

                                {contactInfo.buttons.primary.text}

                            </a>

                            <a
                                href={contactInfo.buttons.secondary.link}
                                className="contact-secondary-btn"
                            >

                                {contactInfo.buttons.secondary.text}

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Contact;