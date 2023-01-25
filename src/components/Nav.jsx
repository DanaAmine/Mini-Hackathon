import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <div id="logo">SPORTS</div>

    <div id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About Us</Link>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
        <Link to="/Contact">Contact</Link>
        </li>

        <li id="login">
          <Link to="/SignIn">Login</Link>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Nav;
