import React from "react";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";
import Stade3 from "../pages/Stade3.jsx";
import Stade2 from "../pages/Stade2.jsx";
import Stade1 from "../pages/Stade1.jsx";
import Choose from "../pages/Choose.jsx";
import SignUp from "../pages/SignUp.jsx";
import Contact from "../pages/Contact.jsx";
import Organization from "../pages/Organization.jsx";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/SignIn" element={<SignIn />} />

        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Choose" element={<Choose/>} />
        <Route path="/Contact" element={<Contact/>} />

        <Route path="/Organization" element={<Organization/>} />
        <Route path="/Choose/Stade1" element={<Stade1/>} />
        <Route path="/Choose/Stade2" element={<Stade2/>} />
        <Route path="/Choose/Stade3" element={<Stade3 />} />
        
      </Routes>
    </>
  );
};

export default Routers;
