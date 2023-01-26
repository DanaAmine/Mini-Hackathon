import React from "react";
import Nav from "./Nav";
import image from "./image.png";
const Container = () => {
  return (
    <section>
      <Nav />
      {/* <!-- image --> */}
      <div id="image">
        <img src={image} alt="" />
      </div>

      {/* <!-- content --> */}
      <div id="content">
        <h2>SPORTS</h2>
        <h4>MANAGER</h4>
      </div>

      {/* <!-- icons --> */}
      <div id="icons">
        {/* <!-- visit => "fontawesome.com" for icons --> */}
        <a href="https://www.facebook.com/amine.dana14" target={"_blank"}>
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/teck.alger/" target={"_blank"}>
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-youtube"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter"></i>
        </a>
      </div>

      <div id="pagination">
        {/* <!-- left arrow --> */}
        <a href="#">
          <i class="fas fa-angle-left"></i>
        </a>
        {/* <!-- right arrow --> */}
        <a href="#">
          <i class="fas fa-angle-right"></i>
        </a>
      </div>

      {/* <!-- lines --> */}
      <div id="line1"></div>
      <div id="line2"></div>
    </section>
  );
};

export default Container;
