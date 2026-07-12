import React, {
    useEffect,
    useMemo,
    useState
} from "react";

import "./About.css";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

    const [aboutData, setAboutData] = useState(null);

    const [selectedSection, setSelectedSection] = useState(null);

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
            offset: 120

        });

    }, []);

    /* ==========================================
       LOAD CONTENT
    ========================================== */

    useEffect(() => {

        const loadAbout = async () => {

            try {

                const response = await fetch(
                    "/content.json"
                );

                if (!response.ok) {

                    throw new Error(
                        "Unable to load About section."
                    );

                }

                const data =
                    await response.json();

                setAboutData(
                    data.about
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

        loadAbout();

    }, []);

    /* ==========================================
       DEFAULT SELECTED CARD
    ========================================== */

    useEffect(() => {

        if (
            aboutData &&
            aboutData.sections?.length &&
            !selectedSection
        ) {

            setSelectedSection(
                aboutData.sections[0]
            );

        }

    }, [
        aboutData,
        selectedSection
    ]);

    /* ==========================================
       REMAINING CARDS
    ========================================== */

    const remainingSections =
        useMemo(() => {

            if (
                !aboutData ||
                !selectedSection
            ) {

                return [];

            }

            return aboutData.sections.filter(

                section =>

                    section.id !==
                    selectedSection.id

            );

        }, [

            aboutData,
            selectedSection

        ]);

    /* ==========================================
       COMPANY STATS
    ========================================== */

    const companyStats = [

        {

            number: "50+",
            label:
                "Projects Delivered"

        },

        {

            number: "10+",
            label:
                "Industries Served"

        },

        {

            number: "99%",
            label:
                "Customer Satisfaction"

        },

        {

            number: "24/7",
            label:
                "Support & Maintenance"

        }

    ];

    /* ==========================================
       LOADING
    ========================================== */

    if (loading) {

        return (

            <div className="loading">

                Loading...

            </div>

        );

    }

    if (error) {

        return (

            <div className="loading">

                {error}

            </div>

        );

    }

    if (!aboutData) {

        return null;

    }

    return (

        <section
            id="about"
        >

            <div className="about-container">

                {/* Header */}

                <div
                    className="about-header"
                    data-aos="fade-up"
                >

                    <h2
                        className="about-title"
                    >

                        {aboutData.heading}

                    </h2>

                    <p
                        className="about-subtitle"
                    >

                        {aboutData.subtitle}

                    </p>

                </div>
                                {/* ==========================================
                    FEATURED SECTION
                ========================================== */}

                {selectedSection && (

                    <div
                        className="about-selected"
                        data-aos="fade-up"
                    >

                        <div className="about-card active">

                            <img
                                src={`${process.env.PUBLIC_URL}/${selectedSection.image}`}
                                alt={selectedSection.title}
                                className="about-image"
                                loading="lazy"
                            />

                            <div className="about-content">

                                <span className="about-tag">

                                    About SyntaxLoom

                                </span>

                                <h3>

                                    {selectedSection.title}

                                </h3>

                                {selectedSection.description.map(

                                    (item, index) => (

                                        <p key={index}>

                                            {item}

                                        </p>

                                    )

                                )}

                            </div>

                        </div>

                    </div>

                )}

                {/* ==========================================
                    COMPANY STATISTICS
                ========================================== */}

                <div
                    className="about-stats"
                    data-aos="fade-up"
                >

                    {companyStats.map(

                        (stat, index) => (

                            <div
                                key={index}
                                className="about-stat"
                                data-aos="zoom-in"
                                data-aos-delay={
                                    index * 100
                                }
                            >

                                <h3>

                                    {stat.number}

                                </h3>

                                <span>

                                    {stat.label}

                                </span>

                            </div>

                        )

                    )}

                </div>

                {/* ==========================================
                    REMAINING CARDS
                ========================================== */}

                <div
                    className="about-grid"
                >

                    {remainingSections.map(

                        (section, index) => (

                            <div
                                key={section.id}
                                className="about-card"
                                data-aos="fade-up"
                                data-aos-delay={
                                    index * 100
                                }
                            >

                                <img
                                    src={`${process.env.PUBLIC_URL}/${section.image}`}
                                    alt={section.title}
                                    className="about-image"
                                    loading="lazy"
                                />

                                <div
                                    className="about-content"
                                >

                                    <span
                                        className="about-tag"
                                    >

                                        Learn More

                                    </span>

                                    <h3>

                                        {section.title}

                                    </h3>

                                    <p>

                                        {
                                            section
                                                .description[0]
                                        }

                                    </p>

                                    <button
                                        className="about-btn"
                                        onClick={() =>
                                            setSelectedSection(
                                                section
                                            )
                                        }
                                    >

                                        Explore

                                    </button>

                                </div>

                            </div>

                        )

                    )}

                </div>
                                {/* ==========================================
                    CALL TO ACTION
                ========================================== */}

                <div
                    className="about-cta"
                    data-aos="fade-up"
                >

                    <div
                        className="about-cta-content"
                    >

                        <span
                            className="about-cta-badge"
                        >

                            Why Choose SyntaxLoom?

                        </span>

                        <h2>

                            Building Innovative Software
                            Solutions For Modern Businesses

                        </h2>

                        <p>

                            At SyntaxLoom, we combine
                            technical expertise, agile
                            methodologies and modern cloud
                            technologies to deliver secure,
                            scalable and high-performance
                            digital solutions that help
                            businesses innovate, grow and
                            stay ahead in a rapidly changing
                            world.

                        </p>

                        <div
                            className="about-cta-actions"
                        >

                            <a
                                href="#services"
                                className="about-primary-btn"
                            >

                                Explore Services

                            </a>

                            <a
                                href="#contact"
                                className="about-secondary-btn"
                            >

                                Contact Us

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default About;