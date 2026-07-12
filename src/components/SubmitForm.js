import React, {
    useEffect,
    useState
} from "react";

import { init, send } from "emailjs-com";

import "./SubmitForm.css";

import AOS from "aos";
import "aos/dist/aos.css";

const SubmitForm = () => {

    const [formContent, setFormContent] = useState(null);

    const [loading, setLoading] = useState(true);

    const [submitting, setSubmitting] = useState(false);

    const [formData, setFormData] = useState({

        name: "",

        email: "",

        mobile: "",

        company: "",

        projectType: "",

        budget: "",

        timeline: "",

        description: ""

    });

    /* ==========================================
       EMAIL JS
    ========================================== */

    useEffect(() => {

        init(
            process.env.REACT_APP_EMAILJS_USER_ID
        );

    }, []);

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
       LOAD CONTENT
    ========================================== */

    useEffect(() => {

        const loadContent = async () => {

            try {

                const response = await fetch(
                    "/content.json"
                );

                const data =
                    await response.json();

                setFormContent(
                    data.submitForm
                );

            }

            catch (err) {

                console.error(err);

            }

            finally {

                setLoading(false);

            }

        };

        loadContent();

    }, []);

    /* ==========================================
       INPUT CHANGE
    ========================================== */

    const handleChange = (e) => {

        const {

            name,

            value

        } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value

        }));

    };

    if (loading) {

        return (

            <div className="submit-loading">

                Loading...

            </div>

        );

    }

    return (

        <section
            id="submit-form"
        >

            <div
                className="submit-container"
            >

                {/* ==========================
                    HEADER
                ========================== */}

                <div
                    className="submit-header"
                    data-aos="fade-up"
                >

                    <span
                        className="submit-badge"
                    >

                        Start Your Project

                    </span>

                    <h2>

                        {formContent.heading}

                    </h2>

                    <p>

                        {formContent.description}

                    </p>

                </div>
                                {/* ==========================================
                    PROJECT FORM
                ========================================== */}

                <div
                    className="submit-form-wrapper"
                    data-aos="fade-up"
                >

                    <form
                        className="submit-form"
                        onSubmit={handleSubmit}
                    >

                        {/* =====================
                            ROW 1
                        ====================== */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>

                                    Full Name *

                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Email Address *

                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                        </div>

                        {/* =====================
                            ROW 2
                        ====================== */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>

                                    Mobile Number *

                                </label>

                                <input
                                    type="tel"
                                    name="mobile"
                                    placeholder="Enter your mobile number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    required
                                />

                            </div>

                            <div className="form-group">

                                <label>

                                    Company

                                </label>

                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                />

                            </div>

                        </div>

                        {/* =====================
                            ROW 3
                        ====================== */}

                        <div className="form-row">

                            <div className="form-group">

                                <label>

                                    Project Type

                                </label>

                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                >

                                    <option value="">

                                        Select Project

                                    </option>

                                    <option>

                                        Website

                                    </option>

                                    <option>

                                        Web Application

                                    </option>

                                    <option>

                                        Mobile App

                                    </option>

                                    <option>

                                        SaaS Platform

                                    </option>

                                    <option>

                                        AI Solution

                                    </option>

                                    <option>

                                        Cloud Migration

                                    </option>

                                    <option>

                                        Enterprise Software

                                    </option>

                                    <option>

                                        Other

                                    </option>

                                </select>

                            </div>

                            <div className="form-group">

                                <label>

                                    Estimated Budget

                                </label>

                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                >

                                    <option value="">

                                        Select Budget

                                    </option>

                                    <option>

                                        Under $5,000

                                    </option>

                                    <option>

                                        $5,000 - $10,000

                                    </option>

                                    <option>

                                        $10,000 - $25,000

                                    </option>

                                    <option>

                                        $25,000+

                                    </option>

                                </select>

                            </div>

                        </div>

                        {/* =====================
                            ROW 4
                        ====================== */}

                        <div className="form-group">

                            <label>

                                Expected Timeline

                            </label>

                            <input
                                type="text"
                                name="timeline"
                                placeholder="Example: 2 Months"
                                value={formData.timeline}
                                onChange={handleChange}
                            />

                        </div>

                        {/* =====================
                            DESCRIPTION
                        ====================== */}

                        <div className="form-group">

                            <label>

                                Project Description *

                            </label>

                            <textarea
                                rows="8"
                                name="description"
                                placeholder="Tell us about your project requirements..."
                                value={formData.description}
                                onChange={handleChange}
                                required
                            />

                        </div>
                                                {/* =====================
                            SUBMIT BUTTON
                        ====================== */}

                        <button
                            type="submit"
                            className="submit-btn"
                            disabled={submitting}
                        >

                            {submitting
                                ? "Sending..."
                                : "Submit Project Inquiry"}

                        </button>

                    </form>

                </div>

            </div>

        </section>

    );

    /* ==========================================
       SUBMIT
    ========================================== */

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            setSubmitting(true);

            await send(

                process.env.REACT_APP_EMAILJS_SERVICE_ID,

                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,

                {

                    name: formData.name,

                    email: formData.email,

                    mobile: formData.mobile,

                    company: formData.company,

                    projectType: formData.projectType,

                    budget: formData.budget,

                    timeline: formData.timeline,

                    description: formData.description

                }

            );

            alert(
                "Thank you! Your project inquiry has been submitted successfully."
            );

            setFormData({

                name: "",

                email: "",

                mobile: "",

                company: "",

                projectType: "",

                budget: "",

                timeline: "",

                description: ""

            });

        }

        catch (err) {

            console.error(err);

            alert(
                "Unable to submit your inquiry. Please try again later."
            );

        }

        finally {

            setSubmitting(false);

        }

    }

};

export default SubmitForm;