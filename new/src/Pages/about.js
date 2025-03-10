import React from "react";
import "./About.css";
import mayur from "../assets/mayur.jpg"; 

function AboutUs() {
  return (
    <>
      {/* About Section */}
      <section className="about-container">
        <h2 className="about-heading">
          About <span className="highlight">Romo</span>
        </h2>
        <p className="about-text">
          Romo Technologies is a leading IT solutions provider dedicated to empowering businesses through 
          innovative technology. With a focus on software development, web applications, cloud computing, 
          cybersecurity, AI, etc., we deliver cutting-edge solutions that drive efficiency, scalability, 
          and growth for organizations of all sizes.
        </p>
        <p className="about-text">
          Founded in 2020, our team of experienced professionals brings together expertise in key areas, 
          e.g., software engineering, data analytics, IT infrastructure, etc. We pride ourselves on 
          staying ahead of the curve by leveraging the latest advancements in technology to solve complex 
          challenges and deliver measurable results.
        </p>
      </section>

      {/* CEO Testimonial Section */}
      <section className="testimonial-container">
        <div className="testimonial-content">
          <p className="testimonial-text">
            At Romo Technologies , we believe in building long-term partnerships with our clients. 
            By understanding their unique needs, we tailor our solutions to
            ensure seamless integration, enhanced productivity, and a competitive edge in today’s digital landscape.
          </p>
          <div className="ceo-info">
            <img src={mayur} alt="CEO" className="ceo-image" />
            <p className="ceo-name">Mayur sir / Founder & CMO</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;









