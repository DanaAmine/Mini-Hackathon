import React from "react";
import { Link } from "react-router-dom";
import "./choose.css";
const Choose = () => {
  return (
    <div className="Pcard">
      <div className="containerCard">
        <div className="section-title">
          <h1>Css Image Hover Effect</h1>
        </div>

        <div className="row">
          <div className="column">
            <div className="effect">
              <div className="effect-img">
                <img
                  src="https://wallpapercave.com/wp/wp10271435.jpg?fbclid=IwAR24Dn1JaFWpB6L0szrv93tH_7Niso-OFCaQgeN6wW20VZyT7d-AqM_BPB0"
                  alt=""
                />
              </div>
              <div className="effect-text">
                <div className="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div className="effect-btn">
                    <a href="#" className="btn">
                      <i className="fa fa-eye"></i> <Link  to="/Choose/Stade1" >Read More</Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="effect">
              <div className="effect-img">
                <img
                  src="https://wallpapercave.com/wp/wp9346588.jpg?fbclid=IwAR1oiEE0fn3g9tAq2PvMaOhUbkO7NewZ76T3iJ7CuZUzQsBAQdpAfBQLql8"
                  alt=""
                />
              </div>
              <div className="effect-text">
                <div className="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div className="effect-btn">
                    <a href="#" className="btn">
                      <i className="fa fa-eye"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="effect">
              <div className="effect-img">
                <img
                  src="https://media.istockphoto.com/id/1080845490/photo/allianz-arena.jpg?s=170667a&w=0&k=20&c=Z6lL5jzGTuQ8AxlM_rBDUauvyM5xh44DUDO54--n4ks%3D&fbclid=IwAR37pceRRT0F6KRDwcv98IZKxFj2v4govveh3Q5A7aoC3U9I7qP8BZPFjkg"
                />
              </div>
              <div className="effect-text">
                <div className="inner">
                  <h2>This is heading</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quaerat velit qui quos repellat nulla cum soluta exceptu
                  </p>
                  <div className="effect-btn">
                    <a href="#" className="btn">
                      <i className="fa fa-eye"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
