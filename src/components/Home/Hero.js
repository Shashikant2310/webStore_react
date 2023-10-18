import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
} from "../../assets/index";

const Hero = () => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="">
          <img priority="true" src={banner1} alt="banner image" />
        </div>
        <div>
          <img src={banner2} alt="banner image" />
        </div>
        <div>
          <img src={banner3} alt="banner image" />
        </div>
        <div>
          <img src={banner4} alt="banner image" />
        </div>
        <div>
          <img src={banner5} alt="banner image" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
