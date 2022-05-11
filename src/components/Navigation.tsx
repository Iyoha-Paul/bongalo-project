import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as CgIcon from "react-icons/cg";
import CompanyLogoBlue from "../img/CompanyLogoBlue.png";
const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="nav">
      <button className="btn--open-nav-menu">
        <FaIcon.FaBars />
      </button>
      <div className="nav__name">
        <div className="nav__name__logo">
          <img src={CompanyLogoBlue} alt="image" className="icon" />
        </div>
        <p>Bongalo</p>
      </div>
      <nav>
        <button className=" btn--close-nav-menu">
          <CgIcon.CgMenuLeft />
        </button>
        <ul className={sidebar ? "nav__links active" : "nav__links"}>
          <li>
            <NavLink className="link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/home" className="link">
              List a property
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/home" className="link">
              Blog
            </NavLink>
          </li>
          <li className="link">
            <NavLink to="/home" className="link">
              FAQs
            </NavLink>
          </li>
        </ul>
        <div>
          <NavLink to="/home" className="btn--login">
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
