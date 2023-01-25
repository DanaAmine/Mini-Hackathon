import React, { useState } from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const USER = {
    userName: "",
    password: "",
    confPassword: "",
  };
  const [user, setUser] = useState(USER);
  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }
  const [match, setMatch] = useState(true);
  function handleSubmit(event) {
    event.preventDefault();
    if (user.password !== user.confPassword) return setMatch(false);
    console.log(user);
  }
  return (
    <>
      <Nav />
      <div className="shadow">
        <div>
          {!match && <h1> password not match</h1>}
          <h2>Login</h2>
          <form action="">
            <div className="inputBx">
              <span>Username</span>
              <input
                type="text"
                value={user.userName}
                name="userName"
                onChange={handleChange}
              />
            </div>
            <div className="inputBx">
              <span>New Password</span>
              <input
                type="password"
                value={user.password}
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="inputBx">
              <span>Confirm Password</span>
              <input
                type="password"
                value={user.confPassword}
                name="confPassword"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-between">
              <div className="remember">
                <label>
                  <input type="checkbox" />
                  <span className="remember">Remember me</span>
                </label>
              </div>
              <p>Forget Password?</p>
            </div>
            <div className="inputBx">
              <input type="submit" value={"Sign in"} onClick={handleSubmit} />
            </div>
            <div className="inputBx">
              <p>
                If you have an account? <Link to="/signin"> Sign in </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
