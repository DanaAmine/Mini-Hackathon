import React from "react";
import Nav from "../components/Nav";
import Form from "../components/Form";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Nav />
      <div className="shadow">
        <div>
          <h2>Login</h2>
          <form action="">
            <div className="inputBx">
              <span>Username</span>
              <input type="text" />
            </div>
            <div className="inputBx">
              <span>Password</span>
              <input type="password" />
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
              <input type="submit" value={"Sign in"} />
            </div>
            <div className="inputBx">
              <p>
                Don't have an account?
                <Link to="/SignUp"> Sign Up </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
