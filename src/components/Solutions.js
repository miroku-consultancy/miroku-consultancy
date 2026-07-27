import React, {
    useEffect,
    useRef,
    useState
} from "react";

import "./Solutions.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {

    /* =====================================================
       STATE
    ===================================================== */

    const [solutions, setSolutions] = useState([]);
    const [loading, setLoading] = useState(true);

    // Active solution shown in left panel
    const [activeIndex, setActiveIndex] = useState(0);

    // Scroll targets
    const sectionRefs = useRef([]);

    /* =====================================================
       INITIALIZE AOS
    ===================================================== */

    useEffect(() => {

        AOS.init({

            duration: 900,
            easing: "ease-out-cubic",
            once: true,
            offset: 100

        });

    }, []);

    /* =====================================================
       LOAD SOLUTIONS
    ===================================================== */

    useEffect(() => {

        const loadSolutions = async () => {

            try {

                const response = await fetch("/content.json");

                if (!response.ok) {

                    throw new Error("Unable to load solutions");

                }

                const data = await response.json();

                setSolutions(data.solutions || []);

            }
            catch (error) {

                console.error(error);

            }
            finally {

                setLoading(false);

            }

        };

        loadSolutions();

    }, []);

    /* =====================================================
       INTERSECTION OBSERVER
    ===================================================== */

    useEffect(() => {

        if (!solutions.length) return;

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) return;

                    const index = Number(
                        entry.target.dataset.index
                    );

                    setActiveIndex(index);

                });

            },

            {

                root: null,

                rootMargin: "-35% 0px -35% 0px",

                threshold: 0

            }

        );

        sectionRefs.current.forEach((section) => {

            if (section) {

                observer.observe(section);

            }

        });

        return () => {

            observer.disconnect();

        };

    }, [solutions]);

    /* =====================================================
       LOADING
    ===================================================== */

    if (loading) {

        return (

            <div className="solution-loading">

                Loading Solutions...

            </div>

        );

    }

    if (!solutions.length) {

        return null;

    }

    /* =====================================================
       CURRENT SOLUTION
    ===================================================== */

    const currentSolution = solutions[activeIndex];
    return (

<section
    id="solutions"
    className="solutions-section"
>

    {/* =====================================================
        HEADER
    ===================================================== */}

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
            modernize operations, improve customer experience,
            and accelerate digital transformation.

        </p>

    </div>

    {/* =====================================================
        MAIN LAYOUT
    ===================================================== */}

    <div className="solutions-scroll-wrapper">

        {/* =====================================================
            LEFT PANEL
        ===================================================== */}

        <aside
            className="solutions-sticky"
            data-aos="fade-right"
        >

            <div
                key={activeIndex}
                className="solution-display-card solution-fade"
            >

                {/* IMAGE */}

                <div className="solution-image-container">

                    <img

                        src={`${process.env.PUBLIC_URL}/${currentSolution.image}`}

                        alt={currentSolution.title}

                        className="solution-image"

                    />

                    <div className="solution-counter">

                        {String(activeIndex + 1).padStart(2, "0")}

                        <span>/</span>

                        {String(solutions.length).padStart(2, "0")}

                    </div>

                </div>

                {/* CONTENT */}

                <div className="solution-display-content">

                    <span className="solution-tag">

                        Enterprise Solution

                    </span>

                    <h2>

                        {currentSolution.title}

                    </h2>

                    <p>

                        {currentSolution.description}

                    </p>

                    <ul className="solution-features">

                        {currentSolution.details?.map((detail, index) => (

                            <li key={index}>

                                <span className="feature-check">

                                   ✓ 

                                </span>

                                <span>

                                    {detail}

                                </span>

                            </li>

                        ))}

                    </ul>

                </div>

            </div>

        </aside>

        {/* =====================================================
            RIGHT SIDE
        ===================================================== */}

        <div className="solutions-cards">

            {solutions.map((solution, index) => (

                <div

                    key={solution.title}

                    ref={(el) =>
                        sectionRefs.current[index] = el
                    }

                    data-index={index}

                    className={`solution-card ${
                        activeIndex === index
                            ? "active"
                            : ""
                    }`}

                >

                    <div className="solution-card-top">

                        <div className="solution-card-icon">

                            {activeIndex === index
                                ? "✓"
                                : String(index + 1).padStart(2, "0")}

                        </div>

                        <div className="solution-card-title">

                            <h3>

                                {solution.title}

                            </h3>

                            <span>

                                Enterprise Solution

                            </span>

                        </div>

                    </div>

                    <p className="solution-card-description">

                        {solution.description}

                    </p>

                </div>

            ))}

        </div>

    </div>

    {/* =====================================================
        CTA
    ===================================================== */}

    <div
        className="solutions-footer"
        data-aos="fade-up"
    >

        <div className="solutions-footer-content">

            <span className="solutions-footer-badge">

                Why SyntaxLoom?

            </span>

            <h2>

                Let's Build Something Amazing Together

            </h2>

            <p>

                From idea validation to enterprise-scale
                deployment, we help businesses create
                reliable, scalable and future-ready
                software solutions.

            </p>

        </div>

        <div className="solutions-stats">

            <div className="stat-card">

                <h3>

                    {solutions.length}+

                </h3>

                <span>

                    Solutions

                </span>

            </div>

            <div className="stat-card">

                <h3>

                    100%

                </h3>

                <span>

                    Client Focused

                </span>

            </div>

            <div className="stat-card">

                <h3>

                    24×7

                </h3>

                <span>

                    Support

                </span>

            </div>

        </div>

        <div className="solutions-actions">

            <button className="primary-btn">

                Start Your Project

            </button>

            <button className="secondary-btn">

                Contact Us

            </button>

        </div>

    </div>

</section>

);

};

export default Solutions;