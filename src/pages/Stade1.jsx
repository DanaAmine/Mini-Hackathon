import React from "react";
import { Carousel } from "flowbite-react";

const Stade1 = () => {
  return (
    <div className="Carousels">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={5000}>
          <img
            src="https://d12eu00glpdtk2.cloudfront.net/public/images/local/inside-al-bayt-stadium-sc-qatar2022.jpg"
            alt="..."
          />
          <img
            src="https://preview.redd.it/stadium-guide-how-to-reach-all-eight-world-cup-stadiums-by-v0-3v2ao4u5s7b91.png?auto=webp&s=8d419bd2b29c8ceaabc67c59fb1c55a56e5917ae"
            alt="..."
          />
          <img
            src="https://media.istockphoto.com/id/1401388316/fr/photo/vue-du-parc-al-bayt-avec-le-stade-al-bayt-en-arri%C3%A8re-plan.jpg?s=612x612&w=0&k=20&c=5lM-WpzASaz82_wndHzU_V5H0v_cf_cTfo66kFzK96Q="
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
