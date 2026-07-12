import React, {
    useEffect,
    useState
} from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Header.css";

import logo from "../assets/images/logo.jpeg";

const Header = () => {

    const [navItems, setNavItems] = useState([]);

    const [expandedIndex, setExpandedIndex] =
        useState(null);

    const [isMenuOpen, setIsMenuOpen] =
        useState(false);

    const [scrolled, setScrolled] =
        useState(false);

    /* ==========================================
       LOAD NAVIGATION
    ========================================== */

    useEffect(() => {

        const fetchNavItems = async () => {

            try {

                const response = await fetch(
                    "/content.json"
                );

                if (!response.ok) {

                    throw new Error(
                        "Failed to load navigation."
                    );

                }

                const data =
                    await response.json();

                setNavItems(
                    data.navItems || []
                );

            }

            catch (error) {

                console.error(
                    "Navigation loading failed:",
                    error
                );

            }

        };

        fetchNavItems();

    }, []);

    /* ==========================================
       STICKY HEADER
    ========================================== */

    useEffect(() => {

        const handleScroll = () => {

            setScrolled(
                window.scrollY > 20
            );

        };

        window.addEventListener(
            "scroll",
            handleScroll
        );

        return () =>

            window.removeEventListener(
                "scroll",
                handleScroll
            );

    }, []);

    /* ==========================================
       MENU
    ========================================== */

    const toggleMenu = () => {

        setIsMenuOpen(prev => !prev);

    };

    const closeMenu = () => {

        setIsMenuOpen(false);

        setExpandedIndex(null);

    };

    return (

        <header
            className={`header ${
                scrolled ? "scrolled" : ""
            }`}
        >

            {/* ==========================
                LOGO
            ========================== */}

            <div className="logo-container">

                <a
                    href="#home"
                    className="logo-link"
                    onClick={closeMenu}
                >

                    <img
                        src={logo}
                        alt="SyntaxLoom"
                        className="logo"
                    />

                    <div className="brand">

                        <h2>

                            SyntaxLoom

                        </h2>

                        <span>

                            Software Development &
                            Digital Solutions

                        </span>

                    </div>

                </a>

                {/* ==========================
                    MOBILE MENU
                ========================== */}

                <button

                    className="menu-toggle"

                    onClick={toggleMenu}

                    aria-label="Toggle Menu"

                >

                    {isMenuOpen ? <FiX /> : <FiMenu />}

                </button>

            </div>

            {/* ==========================
                NAVIGATION
            ========================== */}

            <nav
                className={`nav ${
                    isMenuOpen ? "open" : ""
                }`}
            >

                <ul className="nav-list">

                    {navItems.map(
                        (item, index) => (

                            <li

                                key={item.name}

                                onMouseEnter={() =>
                                    setExpandedIndex(
                                        index
                                    )
                                }

                                onMouseLeave={() =>
                                    setExpandedIndex(
                                        null
                                    )
                                }

                            >

                                <a
                                    href={item.id}
                                    onClick={
                                        closeMenu
                                    }
                                >

                                    {item.name}

                                </a>
                                                                {/* ==========================
                                    DROPDOWN
                                ========================== */}

                                {expandedIndex === index &&
                                    item.description &&
                                    item.description.length > 0 && (

                                        <div className="dropdown-content">

                                            {item.description.map(
                                                (desc, descIndex) => (

                                                    <div
                                                        key={descIndex}
                                                        className="dropdown-item"
                                                    >

                                                        {desc}

                                                    </div>

                                                )
                                            )}

                                        </div>

                                    )}

                            </li>

                        )

                    )}

                </ul>

                {/* ==========================
                    CTA BUTTON
                ========================== */}

                <a
                    href="#contact"
                    className="header-btn"
                    onClick={closeMenu}
                >

                    Get Started

                </a>

            </nav>

        </header>

    );

};

export default Header;