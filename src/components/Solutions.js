import React, {
    useEffect,
    useRef,
    useState
} from "react";

import "./Solutions.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {

    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Currently visible solution
    const [activeIndex, setActiveIndex] = useState(0);

    // Reference to every scroll section
    const sectionRefs = useRef([]);

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
       Load JSON
    ========================================== */

    useEffect(() => {

        const loadSolutions = async () => {

            try {

                const response = await fetch("/content.json");

                if (!response.ok) {

                    throw new Error("Unable to load solutions");

                }

                const data = await response.json();

                setSolutions(data.solutions);

            }
            catch (err) {

                console.error(err);

            }
            finally {

                setLoading(false);

            }

        };

        loadSolutions();

    }, []);

    /* ==========================================
       Detect current section while scrolling
    ========================================== */

    useEffect(() => {

        if (!solutions.length) return;

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        const index = Number(
                            entry.target.dataset.index
                        );

                        setActiveIndex(index);

                    }

                });

            },

            {

                threshold: 0.55

            }

        );

        sectionRefs.current.forEach((section) => {

            if (section) {

                observer.observe(section);

            }

        });

        return () => observer.disconnect();

    }, [solutions]);

    if (loading) {

        return (

            <div className="solution-loading">

                Loading Solutions...

            </div>

        );

    }
        return (

        <section
            id="solutions"
            className="solutions-section"
        >

            {/* Header */}

            <div
                className="solutions-header"
                data-aos="fade-up"
            >

                <span className="solutions-badge">

                    Our Solutions

                </span>

                <h2>

                    Innovative Digital Solutions

                </h2>

                <p>

                    We design, develop and deliver enterprise-grade
                    software solutions that help organizations
                    modernize operations, improve customer experience
                    and accelerate digital transformation.

                </p>

            </div>

            {/* Scroll Area */}

            <div className="solutions-scroll-wrapper">

                {/* LEFT STICKY CARD */}

                <div
                    className="solutions-sticky"
                    data-aos="fade-right"
                >

                    <div className="solution-display-card">

                        <div className="solution-image-container">

                            <img
                                src={`${process.env.PUBLIC_URL}/${solutions[activeIndex].image}`}
                                alt={solutions[activeIndex].title}
                                className="solution-image"
                            />

                            <div className="solution-counter">

                                {String(activeIndex + 1).padStart(2, "0")}
                                <span>
                                    /
                                </span>
                                {String(solutions.length).padStart(2, "0")}

                            </div>

                        </div>

                        <div className="solution-display-content">

                            <span className="solution-tag">

                                Enterprise Solution

                            </span>

                            <h2>

                                {solutions[activeIndex].title}

                            </h2>

                            <p>

                                {solutions[activeIndex].description}

                            </p>

                            <ul className="solution-features">

                                {solutions[activeIndex].details
                                    ?.map((item, index) => (

                                        <li
                                            key={index}
                                            data-aos="fade-up"
                                            data-aos-delay={index * 80}
                                        >

                                            {item}

                                        </li>

                                    ))}

                            </ul>

                        </div>

                    </div>

                </div>

                {/* RIGHT SCROLL TRACK */}

                <div className="solutions-track">

                    {solutions.map((solution, index) => (

                        <div

                            key={solution.title}

                            ref={(el) =>
                                sectionRefs.current[index] = el
                            }

                            data-index={index}

                            className="solution-trigger"

                        >

                            <div className="trigger-circle">

                                {String(index + 1).padStart(2, "0")}

                            </div>

                            <div className="trigger-line" />

                            <div className="trigger-content">

                                <h3>

                                    {solution.title}

                                </h3>

                                <p>

                                    Scroll to explore this solution

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Footer */}

            <div
                className="solutions-footer"
                data-aos="fade-up"
            >

                <div className="solutions-footer-content">

                    <span className="solutions-footer-badge">

                        Why Choose SyntaxLoom?

                    </span>

                    <h2>

                        Building Future-Ready Digital Products

                    </h2>

                    <p>

                        We combine modern technologies, cloud-native
                        architecture and agile development practices
                        to deliver scalable, secure and high-performance
                        software solutions that help businesses grow
                        with confidence.

                    </p>

                    <div className="solutions-footer-stats">

                        <div className="stat-card">

                            <h3>50+</h3>

                            <span>Projects Delivered</span>

                        </div>

                        <div className="stat-card">

                            <h3>10+</h3>

                            <span>Industries Served</span>

                        </div>

                        <div className="stat-card">

                            <h3>99%</h3>

                            <span>Customer Satisfaction</span>

                        </div>

                    </div>

                    <div className="solutions-footer-actions">

                        <a
                            href="#contact"
                            className="solutions-primary-btn"
                        >
                            Start Your Project
                        </a>

                        <a
                            href="#services"
                            className="solutions-secondary-btn"
                        >
                            Explore Services
                        </a>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Solutions;