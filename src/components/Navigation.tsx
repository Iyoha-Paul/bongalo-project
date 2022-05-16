import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcon from "react-icons/fa";
import * as CgIcon from "react-icons/cg";
import CompanyLogoBlue from "../img/CompanyLogoBlue.png";
import { IconContext } from "react-icons";
import SideNav from "./SideNav";
const Navigation = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleShowSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <IconContext.Provider
      value={{ style: { width: "3rem", height: "3rem", color: "#fff" } }}
    >
      <div className="nav">
        <SideNav setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

        <button className="btn--open-nav-menu" onClick={handleShowSidebar}>
          <CgIcon.CgMenuLeft />
        </button>
        <div className="nav__name">
          <div className="nav__name__logo">
            <img src={CompanyLogoBlue} alt="image" className="icon" />
          </div>
          <p>Bongalo</p>
        </div>
        <nav>
          <ul className="nav__links">
            <li>
              <NavLink className="link" to="/">
                Home
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/" className="link">
                List a property
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/" className="link">
                Blog
              </NavLink>
            </li>
            <li className="link">
              <NavLink to="/" className="link">
                FAQs
              </NavLink>
            </li>
          </ul>
          <div>
            <NavLink to="/" className="btn--login">
              Login
            </NavLink>
          </div>
        </nav>
      </div>
    </IconContext.Provider>
  );
};

export default Navigation;
