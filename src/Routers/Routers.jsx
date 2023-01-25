import React from "react";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import { Routes, Route } from "react-router-dom";
import { MyProvider } from "../utils/MyContext.jsx";
import SignIn from "../pages/SignIn.jsx";

const Routers = () => {
  return (
    <MyProvider>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/SignIn" element={<SignIn />}></Route>
      </Routes>
    </MyProvider>
  );
};

export default Routers;
