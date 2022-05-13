import React from "react";
import * as BsIcon from "react-icons/bs";
import FlightForm from "./FlightForm";
import Navigation from "./Navigation";
import HeroImg from "../img/HeroImg.png";
import { IconContext } from "react-icons";
const hero = () => {
  return (
    <div
      className="hero"
      style={{
        background: `linear-gradient(
         rgba(30, 40, 52, 0.7),
        rgba(18, 23, 30, 0.4582),
        rgba(255, 255, 255, 0.007)
           ),url(${HeroImg})   no-repeat center / cover`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        {" "}
        <Navigation />
        <div className=" hero__header">
          <h1>
            Travelling Africa for business or leisure? <span>Book</span> a place
            to stay.
          </h1>
          <button className="hero__header__btn hero__header__btn--right">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
          <button className="hero__header__btn hero__header__btn--left">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </div>
        <button className="hero__btn hero__header__btn--down">
          <div>
            <div className="hero__btn__design"> &nbsp; </div>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </button>
        <FlightForm />
      </div>
    </div>
  );
};

export default hero;
