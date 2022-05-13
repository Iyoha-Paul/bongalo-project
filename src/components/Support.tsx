import React from "react";
import DigitalOcean from "../img/DigitalOcean.png";
import Enkap from "../img/Enkap.png";
import GoogleCloud from "../img/GoogleCloud.png";
import SendGrid from "../img/SendGrid.png";

const Support = () => {
  return (
    <div className="support ">
      <div className="container">
        <h3>Powered By</h3>
        <div className="support__companies">
          <div className="img__container">
            <img src={DigitalOcean} alt="images" className="globe__icon" />
          </div>
          <div className="img__container">
            <img src={SendGrid} alt="images" className="globe__icon" />
          </div>
          <div className="img__container">
            <img src={GoogleCloud} alt="images" className="globe__icon" />
          </div>
          <div className="img__container">
            <img src={Enkap} alt="images" className="globe__icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
