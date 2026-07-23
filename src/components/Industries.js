import React, { useEffect, useState } from "react";
import "./Industries.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Industry = () => {

    const [industries, setIndustries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        AOS.init({
            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 120
        });

    }, []);

    useEffect(() => {

        const fetchIndustries = async () => {

            try {

                const response = await fetch("/content.json");

                if (!response.ok) {
                    throw new Error("Unable to load industries.");
                }

                const data = await response.json();

                setIndustries(data.industries);

            } catch (error) {

                console.error(error);

            } finally {

                setLoading(false);

                // Refresh animations after content loads
                setTimeout(() => {
                    AOS.refresh();
                }, 200);

            }

        };

        fetchIndustries();

    }, []);

    if (loading) {

        return (
            <div className="industry-loading">
                Loading Industries...
            </div>
        );

    }

    return (

        <section
            id="industries"
            className="industry-section"
        >

            {/* Header */}

            <div
                className="industry-header"
                data-aos="fade-up"
            >

                <span
                    className="industry-badge"
                    data-aos="zoom-in"
                    data-aos-delay="100"
                >
                    Industries
                </span>

                <h2
                    data-aos="fade-up"
                    data-aos-delay="250"
                >
                    Industries We Serve
                </h2>

                <p
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    We partner with organizations across diverse industries,
                    delivering innovative software solutions that improve
                    operational efficiency, accelerate digital transformation,
                    and create exceptional customer experiences.
                </p>

            </div>

            {/* Industries */}

            <div className="industry-wrapper">

                {industries.map((industry, index) => {

                    const reverse = index % 2 !== 0;

                    return (

                        <div
                            key={industry.name}
                            className={`industry-row ${reverse ? "reverse" : ""}`}
                        >

                            {/* TEXT */}

                            <div
                                className="industry-content"
                                data-aos={reverse ? "fade-left" : "fade-right"}
                            >

                               

                                <h3
                                    data-aos="fade-up"
                                    data-aos-delay="250"
                                >
                                    {industry.name}
                                </h3>

                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    {industry.description}
                                </p>

                                <ul className="industry-features">

                                    {industry.details
                                        .slice(0, 6)
                                        .map((item, i) => (

                                            <li
                                                key={i}
                                                data-aos="fade-up"
                                                data-aos-delay={550 + i * 120}
                                            >
                                                {item}
                                            </li>

                                        ))}

                                </ul>

                            </div>

                            {/* IMAGE */}

                            <div
                                className="industry-image-wrapper"
                                data-aos={reverse ? "zoom-in-left" : "zoom-in-right"}
                                data-aos-delay="300"
                            >

                                <img
                                    src={`${process.env.PUBLIC_URL}/${industry.image}`}
                                    alt={industry.name}
                                    className="industry-image"
                                    loading="lazy"
                                />

                            </div>

                        </div>

                    );

                })}

            </div>

            {/* Footer */}

            <div
                className="industry-footer"
                data-aos="fade-up"
            >

                <div className="industry-footer-content">

                    <h2
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Delivering Industry-Focused Digital Solutions
                    </h2>

                    <p
                        data-aos="fade-up"
                        data-aos-delay="250"
                    >
                        Every industry has unique challenges. We combine
                        technology expertise with business understanding to
                        build secure, scalable and future-ready software
                        solutions that drive measurable results.
                    </p>

                    <a
                        href="#contact"
                        className="industry-contact-btn"
                        data-aos="zoom-in"
                        data-aos-delay="400"
                    >
                        Let's Build Together
                    </a>

                </div>

            </div>

        </section>

    );

};

export default Industry;