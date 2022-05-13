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
          <div className="featured-cities__cities--col">
            <div className="img-container">
              <div className="img-container__design">&nbsp;</div>
              <img src={KigaliPicture} alt="images" className="images" />
              <div className="img-container__description">
                <h3>Kigali</h3>
                <p>25 properties</p>
              </div>
            </div>
            <div className="img-container">
              <div className="img-container__design">&nbsp;</div>
              <img src={YaondePicture} alt="images" className="images" />
              <div className="img-container__description">
                <h3>Yaounde</h3>
                <p>15 properties</p>
              </div>
            </div>
          </div>
          <div className="featured-cities__cities--col featured-cities__cities--col--3">
            <div className="img-container">
              <div className="img-container__design">&nbsp;</div>
              <img src={RubavuPicture} alt="images" className="images" />
              <div className="img-container__description">
                <h3>Rubavu</h3>
                <p>32 properties</p>
              </div>
            </div>
            <div className="img-container">
              <div className="img-container__design">&nbsp;</div>
              <img src={DoulaPicture} alt="images" className="images" />
              <div className="img-container__description">
                <h3>Doula</h3>
                <p>16 properties</p>
              </div>
            </div>
            <div className="img-container">
              <div className="img-container__design">&nbsp;</div>
              <img src={ButarePicture} alt="images" className="images" />
              <div className="img-container__description">
                <h3>Butare</h3>
                <p>32 properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCities;
