import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Services.css";

const Services = () => {

    const [services, setServices] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        const loadServices = async () => {

            try {

                const response = await fetch("/content.json");

                if (!response.ok) {
                    throw new Error("Unable to load services.");
                }

                const data = await response.json();

                setServices(data.services);

            }
            catch (err) {

                setError(err.message);

            }

        };

        loadServices();

    }, []);

    if (error) {
        return <div className="loading">{error}</div>;
    }

    if (!services.length) {
        return <div className="loading">Loading Services...</div>;
    }

    return (

        <section id="services">

            <h2 className="service-title">
                Our Services
            </h2>

            <p className="service-subtitle">
                Delivering reliable technology solutions that empower businesses
                to innovate, automate and scale with confidence.
            </p>

            <Swiper

                modules={[Navigation, Pagination, Autoplay]}

                slidesPerView={1}

                loop

                navigation

                pagination={{
                    clickable: true
                }}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}

                speed={900}

            >

                {services.map((service, index) => (

                    <SwiperSlide key={service.id}>

                        <div
                            className={`service-slide ${
                                index % 2 === 0 ? "" : "reverse"
                            }`}
                        >

                            <div className="service-text">

                                <span className="service-tag">
                                    {service.tag}
                                </span>

                                <h2>
                                    {service.title}
                                </h2>

                                <p>
                                    {service.description}
                                </p>

                                <ul className="service-features">

                                    {service.details.map((item) => (

                                        <li key={item}>
                                            {item}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                            <div className="service-image-wrapper">

                                <img
                                    src={`${process.env.PUBLIC_URL}/${service.image}`}
                                    alt={service.title}
                                    className="service-image"
                                    loading="lazy"
                                />

                            </div>

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>

    );

};

export default Services;