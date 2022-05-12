import React from "react";
import Guest from "../img/Guest.png";
import Location from "../img/Location.png";
import Calender from "../img/Calender.png";
const FlightForm = () => {
  return (
    <div className="hero__footer">
      <form action="" className="form">
        <div className="form__item">
          <label>
            <img src={Location} alt="image" className="icon" />
            <div className="form__item__option"> Destination</div>
          </label>
          <select
            name="dropdown"
            className="form__item__select"
            value="Kigali, Rawanda"
          >
            <option value="">Kigali, Rawanda</option>
          </select>
        </div>
        <div className="form__item">
          <label>
            <img src={Calender} alt="image" className="icon" />
            <div className="form__item__option"> Arrival - Depature</div>
          </label>
          <select
            name="dropdown"
            className="form__item__select"
            value="Wed, Oct 1 - Tue, Dec 10"
          >
            <option value="">Wed, Oct 1 - Tue, Dec 10</option>
          </select>
        </div>
        <div className="form__item">
          <label>
            <img src={Guest} alt="image" className="icon" />
            <div className="form__item__option"> Guest</div>
          </label>
          <select
            name="dropdown"
            className="form__item__select"
            value="5 Guest"
          >
            <option value="">5 Guest</option>
          </select>
        </div>
        <button className="btn btn--submit">Search</button>
      </form>
    </div>
  );
};

export default FlightForm;
