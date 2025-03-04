import React, { useState, useEffect, useRef } from "react";
import "./Home.css";

function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activePoint, setActivePoint] = useState(0); // Track active timeline point
  const timelineRef = useRef(null); // Ref for timeline section

  const timelineData = [
    { year: "2021", icon: "", description: "Detailed description for 2021." },
    { year: "2020", icon: "", description: "Detailed description for 2020." },
    { year: "2019", icon: "", description: "Detailed description for 2019." },
    { year: "2018", icon: "", description: "Detailed description for 2018." },
    { year: "2017", icon: "", description: "Detailed description for 2017." },
  ];

  useEffect(() => {
    if (!timelineRef.current) return; // Ensure timelineRef exists

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.5 }
    );

    const observeElements = () => {
      const timelineItems = timelineRef.current?.querySelectorAll(".timeline-item");
      timelineItems?.forEach((item) => observer.observe(item));
    };

    // Initial observation of elements
    observeElements();

    // MutationObserver to detect dynamically added elements
    const mutationObserver = new MutationObserver(() => {
      observeElements(); // Re-observe if new elements are added
    });

    mutationObserver.observe(timelineRef.current, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [timelineRef.current]); // Re-run when timelineRef.current changes




  return (
    
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div
          className="hero-background"
          style={{ transform: `translateY(${scrollPosition * 0.5}px)` }}
        ></div>
      </section>

      {/* Solution Section */}
      <section className="website-solution-section">
        <div className="solution-container">
          {/* Left Content */}
          <div className="left-content">
            <h2>
              One of the best company of Nagpur for increasing{" "}
              <span className="highlight-text">your business</span>
            </h2>
          </div>
          {/* Right Content */}
          <div className="right-content">
            <p>We develop all website and application</p>
            <button className="orange-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      
      <div className="timeline-section" ref={timelineRef}>
        <div className="timeline-title">
          <h2>
            <span className="highlight-white">Our</span>{" "}
            <span className="highlight-orange">Journey</span>
          </h2>
        </div>
        <div className="timeline-container">
          {/* Timeline Items */}
          <div className="timeline">
            {timelineData.map((point, index) => (
              <div
                key={index}
                className="timeline-item"
                onClick={() => setActivePoint(index)}
              >
                <div className="timeline-icon">{point.icon}</div>
                <div className="timeline-content">
                  <h3>
                    <span className="highlight-orange">{point.year}</span>
                  </h3>
                  <p>
                    Click to view <span className="highlight-orange">details</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Timeline Details */}
          <div className="timeline-details">
            <p>{timelineData[activePoint].description}</p>
          </div>
        </div>
      </div>

      {/* Steps Section */}
      <section className="steps-section">
        <h2 className="section-heading">
          <span className="highlight-white">3 Steps to Get</span>{" "}
          <span className="highlight-orange">Started</span>
        </h2>
        <div className="steps">
          <div className="step">
            <h3>
              <span className="highlight-white">1.</span>{" "}
              <span className="highlight-orange">Call</span>
            </h3>
            <p>
              <span className="highlight-white">
                The uniqueness of websites adds value to your business by
                clearing your{" "}
              </span>
              <span className="highlight-orange">pre-registration</span>.
            </p>
          </div>
          <div className="step">
            <h3>
              <span className="highlight-white">2.</span>{" "}
              <span className="highlight-orange">Quote</span>
            </h3>
            <p>
              <span className="highlight-white">
                Pay the price of technologies instead of websites. Make
                decisions on values like time, cost, and
              </span>{" "}
              <span className="highlight-orange">yourself</span>.
            </p>
          </div>
          <div className="step">
            <h3>
              <span className="highlight-white">3.</span>{" "}
              <span className="highlight-orange">Enter the New World!</span>
            </h3>
            <p>
              <span className="highlight-white">
                Plans, goals, and milestones to build what is best for your
              </span>{" "}
              <span className="highlight-orange">project</span>.
            </p>
            <button className="action-button">Get Started</button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h3 className="footer-title">
              Romo <span className="highlight-orange">Tech</span>
            </h3>
            <p className="footer-address">
              123 Business Street
              <br />
              City, Country
              <br />
              Zip Code
            </p>
            <p className="footer-details">
              VAT-ID: 123456789
              <br />
              REGON: 987654321
              <br />
              KRS: 123456789
            </p>
            <a href="mailto:contact@yourcompany.com" className="footer-email">
              contact: @RomoTech.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;





