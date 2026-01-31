import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/images/about-background1.jpg";

const AboutUs: React.FC = () => {
  return (
    <div
      className="about-background"
      style={{ backgroundImage: `url(${aboutImage})` }}
    >
      <div className="about-overlay">
        <h1 className="about-title">About Us</h1>
        <p className="about-text">
          Veduka Management is dedicated to providing efficient solutions that
          help educational institutions run smoothly and deliver the best
          learning experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
