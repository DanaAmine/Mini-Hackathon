import React from "react";
import "./contact.css";
import Nav from "../components/Nav";
const Contact = () => {
  return (
    <>
      <section className="parent">
        <div className="container">
          <Nav />
          <div className="content">
            <div className="left-side">
              <div className="address details">
                <i className="fas fa-map-marker-alt"></i>
                <div className="topic">Address</div>
                <div className="text-one">ITC, NP12</div>
                <div className="text-two">Blida 06</div>
              </div>
              <div className="phone details">
                <i className="fas fa-phone-alt"></i>
                <div className="topic">Phone</div>
                <div className="text-one">+0699876564</div>
                <div className="text-two">+0765454543</div>
              </div>
              <div className="email details">
                <i className="fas fa-envelope"></i>
                <div className="topic">Email</div>
                <div className="text-one">team4@gmail.com</div>
                <div className="text-two">mini-hackathon@gmail.com</div>
              </div>
            </div>
            <div className="right-side">
              <div className="topic-text">Send us a message</div>
              <p>
                If you have any problem, you can take it here. It's our pleasure
                to help you.
              </p>
              <form action="#">
                <div class="input-box">
                  <input type="text" placeholder="Enter your name" />
                </div>
                <div class="input-box">
                  <input type="text" placeholder="Enter your email" />
                </div>
                <div class="input-box message-box">
                  <textarea placeholder="Enter your message"></textarea>
                </div>
                <div class="button">
                  <input type="button" value="Send Now" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
