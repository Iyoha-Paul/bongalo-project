import React from "react";
import * as BsIcon from "react-icons/bs";
import FlightForm from "./FlightForm";
import Navigation from "./Navigation";

const hero = () => {
  return (
    <div className="hero">
      <Navigation />
      <div className=" hero__header">
        <h1>
          Travelling Africa for business or leisure? <span>Book</span> a place
          to stay.
        </h1>
        <button className="hero__header__btn hero__header__btn--right">
          <BsIcon.BsChevronRight />
        </button>
        <button className="hero__header__btn hero__header__btn--left">
          <BsIcon.BsChevronLeft />
        </button>
      </div>
      <button className="hero__btn hero__header__btn--down">
        <div>
          <div className="hero__btn__design"> &nbsp; </div>
          <BsIcon.BsChevronDown />
        </div>
      </button>
      <FlightForm />
    </div>
  );
};

export default hero;
