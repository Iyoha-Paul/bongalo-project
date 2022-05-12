import React from "react";
import ButarePicture from "../img/ButarePicture.png";
import DoulaPicture from "../img/DoulaPicture.png";
import RubavuPicture from "../img/RubavuPicture.png";
import YaondePicture from "../img/YaondePicture.png";
import KigaliPicture from "../img/KigaliPicture.png";

const FeaturedCities = () => {
  return (
    <div className="featured-cities ">
      <div className="container">
        <h2>Featured Cities</h2>
        <div className="featured-cities__cities">
          <div className="featured-cities__cities--2-col">
            <div className="featured-cities__cities">
              <img src={KigaliPicture} alt="images" className="images" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
