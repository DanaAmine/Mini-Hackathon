import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-section">
        <div className="inner-container">
          <h1>About Us</h1>
          <p className="text">
            Sports Manager is an online platform designed to make organizing and
            running sports tournaments easier than ever. With its intuitive user
            interface, Sports Manager allows tournament organizers to quickly
            and easily create events, manage teams, track scores and standings,
            and more. It also provides tools for communication between players,
            coaches, and tournament staff. Whether you're organizing a local
            tournament or a large-scale event, Sports Manager has the features
            you need to make it a success.
          </p>
          <div className="skills">
            <span><Link to="/choose">Location Des Stade</Link></span>
            <span><Link to="/Organization">Organization Des tournois</Link></span>
            <span><Link to="/">Back To Home</Link></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
