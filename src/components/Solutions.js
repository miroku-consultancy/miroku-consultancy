import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import "./Solutions.css";

const Solutions = () => {

  const [solutionsData, setSolutionsData] = useState([]);
  const [selectedSolution, setSelectedSolution] = useState(null);

  const selectedRef = useRef(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const response = await fetch("/content.json");
        const data = await response.json();

        setSolutionsData(data.solutions);

      } catch (error) {

        console.error("Error fetching solutions:", error);

      }

    };

    fetchData();

  }, []);

  useEffect(() => {

    if (selectedSolution && selectedRef.current) {

      selectedRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  }, [selectedSolution]);

  const handleSelect = (solution) => {

    setSelectedSolution(solution);

  };

  const handleClose = () => {

    setSelectedSolution(null);

  };

  const remainingSolutions = useMemo(() => {

    if (!selectedSolution) return solutionsData;

    return solutionsData.filter(
      (item) => item.title !== selectedSolution.title
    );

  }, [solutionsData, selectedSolution]);

  if (!solutionsData.length) {

    return <div className="loading">Loading...</div>;

  }

  return (

    <section id="solutions">

      <h2 className="solution-title">
        Our Solutions
      </h2>

      <p className="solution-subtitle">
        We deliver innovative, scalable and enterprise-ready
        technology solutions that help businesses grow faster.
      </p>

      {selectedSolution && (

        <div
          className="selected-layout"
          ref={selectedRef}
        >

          <div className="selected-card">

            <img
              src={`${process.env.PUBLIC_URL}/${selectedSolution.image}`}
              alt={selectedSolution.title}
              className="solution-image"
            />

            <div className="solution-content">

              <h3>{selectedSolution.title}</h3>

              <p>{selectedSolution.description}</p>

              <button
                className="solution-btn"
                onClick={handleClose}
              >
                Hide Details
              </button>

            </div>

          </div>

          <div className="details-panel">

            <h2>
              {selectedSolution.title} Features
            </h2>

            <ul>
                              {selectedSolution.details &&
                selectedSolution.details.map((item, index) => (

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
          selectedSolution
            ? "remaining-grid"
            : "solutions-list"
        }
      >

        {(selectedSolution
          ? remainingSolutions
          : solutionsData
        ).map((solution, index) => (

          <div
            key={index}
            className="solution-card"
          >

            <img
              src={`${process.env.PUBLIC_URL}/${solution.image}`}
              alt={solution.title}
              className="solution-image"
            />

            <div className="solution-content">

              <h3>{solution.title}</h3>

              <p>{solution.description}</p>

              <button
                className="solution-btn"
                onClick={() => handleSelect(solution)}
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

export default Solutions;