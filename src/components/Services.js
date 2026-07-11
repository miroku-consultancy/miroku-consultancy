import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Services.css";

const Services = () => {

    const [servicesData, setServicesData] = useState([]);
    const [selectedService, setSelectedService] = useState(null);

    const selectedRef = useRef(null);

    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch("/content.json");
                const data = await response.json();

                setServicesData(data.services);

            } catch (error) {

                console.error("Error fetching services:", error);

            }

        };

        fetchData();

    }, []);

    useEffect(() => {

        if (selectedService && selectedRef.current) {

            selectedRef.current.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        }

    }, [selectedService]);

    const handleSelect = (service) => {

        setSelectedService(service);

    };

    const handleClose = () => {

        setSelectedService(null);

    };

    const remainingServices = useMemo(() => {

        if (!selectedService) return servicesData;

        return servicesData.filter(
            (item) => item.title !== selectedService.title
        );

    }, [servicesData, selectedService]);

    if (!servicesData.length) {

        return <div className="loading">Loading...</div>;

    }

    return (

        <section id="services">

            <h2 className="service-title">
                Our Services
            </h2>

            <p className="service-subtitle">
                We provide end-to-end software development services
                tailored to your business needs.
            </p>

            {selectedService && (

                <div
                    className="selected-layout"
                    ref={selectedRef}
                >

                    <div className="selected-card">

                        <img
                            src={`${process.env.PUBLIC_URL}/${selectedService.image}`}
                            alt={selectedService.title}
                            className="service-image"
                        />

                        <div className="service-content">

                            <h3>{selectedService.title}</h3>

                            <p>
                                {selectedService.description}
                            </p>

                            <button
                                className="service-btn"
                                onClick={handleClose}
                            >
                                Hide Details
                            </button>

                        </div>

                    </div>

                    <div className="details-panel">

                        <h2>
                            {selectedService.title} Features
                        </h2>

                        <ul>

                            {selectedService.details.map((item, index) => (

                                <li key={index}>
                                    ✔ {item}
                                </li>

                            ))}

                        </ul>

                    </div>

                </div>

            )}

            <div
                className={
                    selectedService
                        ? "remaining-grid"
                        : "services-list"
                }
            >

                {(selectedService
                    ? remainingServices
                    : servicesData
                ).map((service, index) => (

                    <div
                        key={index}
                        className="service-card"
                    >

                        <img
                            src={`${process.env.PUBLIC_URL}/${service.image}`}
                            alt={service.title}
                            className="service-image"
                        />

                        <div className="service-content">

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <button
                                className="service-btn"
                                onClick={() => handleSelect(service)}
                            >
                                Show Details
                            </button>

                        </div>

                    </div>
                                    ))}

            </div>

        </section>

    );
};

export default Services;