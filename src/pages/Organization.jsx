import React from "react";
import "./Organization.css";
import Nav from "../components/Nav";
const Organisation = () => {
  return (
    <section className="organization">
      <Nav />
      <div className="orga">
        <h1 className="head1">Tournaments Organization</h1>
        <p> How Many Teams Do You Have ? </p>
        <div className="Winner">
          <h2>The Winner Is</h2>
          <p>Team 06</p>
        </div>
      </div>
      
      
    </section>
  );
};

export default Organisation;
