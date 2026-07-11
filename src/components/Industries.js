import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Industries.css";

const Industry = () => {
  const [industries, setIndustries] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const selectedRef = useRef(null);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const response = await fetch("/content.json");
        const data = await response.json();
        setIndustries(data.industries);
      } catch (error) {
        console.error("Failed to load industries:", error);
      }
    };

    fetchIndustries();
  }, []);

  useEffect(() => {
    if (selectedIndustry && selectedRef.current) {
      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedIndustry]);

  const handleSelect = (industry) => {
    setSelectedIndustry(industry);
  };

  const handleClose = () => {
    setSelectedIndustry(null);
  };

  const remainingIndustries = useMemo(() => {
    if (!selectedIndustry) return industries;

    return industries.filter(
      (item) => item.name !== selectedIndustry.name
    );
  }, [industries, selectedIndustry]);

  return (
    <section className="industry-container">
      <h1 className="industry-title">
        Industries We Serve
      </h1>

      {selectedIndustry && (
        <div
          className="selected-layout"
          ref={selectedRef}
        >
          {/* Selected Card */}

          <div className="selected-card">

            <img
              src={`${process.env.PUBLIC_URL}/${selectedIndustry.image}`}
              alt={selectedIndustry.name}
              className="industry-image"
            />

            <div className="industry-content">

              <h2>{selectedIndustry.name}</h2>

              <p>
                {selectedIndustry.description}
              </p>

              <button
                className="toggle-btn"
                onClick={handleClose}
              >
                Hide Details
              </button>

            </div>

          </div>

          {/* Details */}

          <div className="details-panel">

            <h2>
              {selectedIndustry.name} Features
            </h2>

            <ul>

              {selectedIndustry.details.map(
                (item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                )
              )}

            </ul>

          </div>

        </div>
      )}

      <div
        className={
          selectedIndustry
            ? "remaining-grid"
            : "industry-grid"
        }
      >

        {(selectedIndustry
          ? remainingIndustries
          : industries
        ).map((industry, index) => (

          <div
            key={index}
            className="industry-card"
          >

            <img
              src={`${process.env.PUBLIC_URL}/${industry.image}`}
              alt={industry.name}
              className="industry-image"
            />

            <div className="industry-content">

              <h2>{industry.name}</h2>

              <p>
                {industry.description}
              </p>

              <button
                className="toggle-btn"
                onClick={() =>
                  handleSelect(industry)
                }
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

export default Industry;