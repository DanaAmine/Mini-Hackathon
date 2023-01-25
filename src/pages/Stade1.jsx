import React from "react";
import { Carousel } from "flowbite-react";

const Stade1 = () => {
  return (
    <div className="Carousels">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://media.istockphoto.com/id/1080845490/photo/allianz-arena.jpg?s=170667a&w=0&k=20&c=Z6lL5jzGTuQ8AxlM_rBDUauvyM5xh44DUDO54--n4ks%3D&fbclid=IwAR37pceRRT0F6KRDwcv98IZKxFj2v4govveh3Q5A7aoC3U9I7qP8BZPFjkg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
        <div className="inputBx m-10 ">
              <input type="submit" value={"Locate"} />
            </div>
            <div className="inputBx"></div>
      </div>
    </div>
  );
};

export default Stade1;
