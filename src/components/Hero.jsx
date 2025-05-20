import React from "react";
import "./hero.css";

const Hero = ({ title = "Become a React Dev", substitle = "" }) => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-center">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{substitle}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
