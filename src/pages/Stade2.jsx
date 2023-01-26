import React from "react";
import { Carousel } from "flowbite-react";

const Stade2 = () => {
  return (
    <div className="Carousels">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://www.floornature.eu/media/photos/1/14760/03_zha_al-wakrah-stadium_qatar_ph-hufton-crow_full.jpg"
            alt="..."
          />
          <img
            src="https://i.ytimg.com/vi/6BAhiEM_Lwk/maxresdefault.jpg"
            alt="..."
          />
          <img
            src="https://www.floornature.eu/media/photos/1/14760/09_zha_al-wakrah-stadium_qatar_ph-hufton-crow_full.jpg"
            alt="..."
          />
          <img
            src="https://media.istockphoto.com/id/1206969988/fr/photo/stade-al-janoub-al-wakrah-qatar.jpg?s=612x612&w=0&k=20&c=XV-sjG2i942BOPG_-Z0Xc3j-Ni7GlrfXTvPupnpy8NI="
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

export default Stade2;
