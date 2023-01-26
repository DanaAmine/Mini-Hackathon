import React from "react";
import { Carousel } from "flowbite-react";

const Stade3 = () => {
  return (
    <div className="Carousels">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Allianz_Arena%2C_M%C3%BAnich%2C_Alemania%2C_2013-02-11%2C_DD_10.JPG"
            alt="..."
          />
          <img
            src="https://img.fcbayern.com/image/upload/cms/public/images/fcbayern-com/homepage/stadien/wallpaper-allianz-arena/allianz_arena9.jpg"
            alt="..."
          />
          <img
            src="https://img.fcbayern.com/image/upload/cms/public/images/allianz-arena/wallpaper/wallpaper-11.jpg"
            alt="..."
          />
          <img
            src="https://img.fcbayern.com/image/upload/cms/public/images/allianz-arena/wallpaper/wallpaper-18.jpg"
            alt="..."
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Allianz_Arena%2C_M%C3%BAnich%2C_Alemania%2C_2013-02-11%2C_DD_10.JPG"
            alt="..."
          />
        </Carousel>
        <div className="inputBx m-10 ">
              <input type="submit" value={"Locate"} />
              
            </div>
            
      </div>
    </div>
  );
};

export default Stade3;
