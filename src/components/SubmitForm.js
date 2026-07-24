import React, { useEffect, useState } from "react";

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

                const response = await fetch("/content.json");

                if (!response.ok) {

                    throw new Error("Unable to load submit form.");

                }

                const data = await response.json();
                console.log(data, "data")

                setFormContent(data.submitForm);

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

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value

        }));

    };
    /* ==========================================
   SUBMIT
========================================== */

const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        setSubmitting(true);

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    access_key: "2a5092aa-ce46-4fa9-b342-3b33a52d3cc0",

                    subject: "New Project Inquiry",

                    from_name: formData.name,

                    name: formData.name,

                    email: formData.email,

                    mobile: formData.mobile,

                    company: formData.company,

                    projectType: formData.projectType,

                    budget: formData.budget,

                    timeline: formData.timeline,

                    description: formData.description

                })

            }
        );

        const result = await response.json();

        if (result.success) {

            alert("Thank you! Your project inquiry has been submitted successfully.");

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

        } else {

            alert(result.message || "Unable to submit your inquiry.");

        }

    }
    catch (err) {

        console.error(err);

        alert("Something went wrong. Please try again.");

    }
    finally {

        setSubmitting(false);

    }

};

if (loading) {

    return (

        <div className="submit-loading">

            Loading...

        </div>

    );

}
return (
    <section id="submit-form">

        <div className="submit-container">

            {/* HEADER */}

            <div
                className="submit-header"
                data-aos="fade-up"
            >

                <span className="submit-badge">
                    Start Your Project
                </span>

                <h2>{formContent.heading}</h2>

                <p>{formContent.description}</p>

            </div>

            {/* FORM */}

            <div
                className="submit-form-wrapper"
                data-aos="fade-up"
            >

                <form
                    className="submit-form"
                    onSubmit={handleSubmit}
                >

                    {/* ROW 1 */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="name">
                                Full Name *
                            </label>

                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="email">
                                Email Address *
                            </label>

                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                            />

                        </div>

                    </div>

                    {/* ROW 2 */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="mobile">
                                Mobile Number *
                            </label>

                            <input
                                id="mobile"
                                type="tel"
                                name="mobile"
                                placeholder="Enter your mobile number"
                                value={formData.mobile}
                                onChange={handleChange}
                                pattern="[0-9]{10}"
                                maxLength={10}
                                required
                            />

                        </div>

                        <div className="form-group">

                            <label htmlFor="company">
                                Company
                            </label>

                            <input
                                id="company"
                                type="text"
                                name="company"
                                placeholder="Company Name"
                                value={formData.company}
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                    {/* ROW 3 */}

                    <div className="form-row">

                        <div className="form-group">

                            <label htmlFor="projectType">
                                Project Type
                            </label>

                            <select
                                id="projectType"
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                            >
                                <option value="">Select Project</option>
                                <option value="Website">Website</option>
                                <option value="Web Application">Web Application</option>
                                <option value="Mobile App">Mobile App</option>
                                <option value="SaaS Platform">SaaS Platform</option>
                                <option value="AI Solution">AI Solution</option>
                                <option value="Cloud Migration">Cloud Migration</option>
                                <option value="Enterprise Software">Enterprise Software</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>

                        <div className="form-group">

                            <label htmlFor="budget">
                                Estimated Budget
                            </label>

                            <select
                                id="budget"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                            >
                                <option value="">Select Budget</option>
                                <option value="Under $5,000">Under $5,000</option>
                                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                                <option value="$25,000+">$25,000+</option>
                            </select>

                        </div>

                    </div>

                    {/* TIMELINE */}

                    <div className="form-group">

                        <label htmlFor="timeline">
                            Expected Timeline
                        </label>

                        <input
                            id="timeline"
                            type="text"
                            name="timeline"
                            placeholder="Example: 2 Months"
                            value={formData.timeline}
                            onChange={handleChange}
                        />

                    </div>

                    {/* DESCRIPTION */}

                    <div className="form-group">

                        <label htmlFor="description">
                            Project Description *
                        </label>

                        <textarea
                            id="description"
                            rows="8"
                            name="description"
                            placeholder="Tell us about your project requirements..."
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    {/* BUTTON */}

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
};

export default SubmitForm;