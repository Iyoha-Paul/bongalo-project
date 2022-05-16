import React from "react";
import { NavLink } from "react-router-dom";

const SideNav = ({ setShowSidebar, showSidebar }: any) => {
  const handleCloseSideNav = () => {
    setShowSidebar(false);
  };
  return (
    <div className={showSidebar ? "sidenav active" : "sidenav"}>
      <button className="sidenav__close" onClick={handleCloseSideNav}>
        <i className="fa-solid fa-xmark"></i>
      </button>

      <button
        onClick={handleCloseSideNav}
        className={
          showSidebar ? "sidenav__bg sidenav__bg--active" : "sidenav__bg"
        }
      >
        &nbsp;
      </button>

      <ul className="sidenav__links">
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
    </div>
  );
};

export default SideNav;
