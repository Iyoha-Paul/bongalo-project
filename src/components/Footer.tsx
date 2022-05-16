import React from "react";
import { NavLink } from "react-router-dom";
import CompanyLogoBlue from "../img/CompanyLogoBlue.png";
import VISA from "../img/VISA.png";
import Circles from "../img/Circles.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__subscribe">
          <div className="footer__subscribe__name">
            <img src={CompanyLogoBlue} alt="images" className="images" />
            <h4>Bongalo</h4>
          </div>
          <form action="" className="form">
            <label htmlFor="" className="label">
              Enter your email to subscribe to our newsletter
            </label>
            <div className="form__input">
              <div className="form__input__email">
                <div className="form__input__email__input-container">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    className="form__input__email__input-container__input"
                    type="text"
                    required
                    placeholder="Enter Email Address"
                  />
                </div>
                <button className="form__input__email__btn">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
        <div className="footer__info">
          <div className="footer__info__section">
            <h5>ABOUT BONGALO</h5>

            <ul>
              <li>
                <NavLink to="/" className="link">
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  Press Release
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__info__section">
            <h5>LINKS</h5>
            <ul>
              <li>
                <NavLink to="/" className="link">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="link">
                  Terms &amp; Conditions
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer__info__section">
            <h5>CONTACT</h5>
            <ul className="">
              <li className="address">
                4th Floor, Fairview Building KG 622 St, Kigali, Rwanda
              </li>
              <li className=" ">
                6th Floor CamCull Building Comm Ave, Bamenda, Cameroon
              </li>
              <li>
                <a href="mailto:info@bongalo.co">info@bongalo.co</a>
              </li>
            </ul>
          </div>
          <div className=" footer__info__section footer__info__section--media">
            <h5>JOIN US ON</h5>
            <div className="footer__info__section__social-media">
              <a href="*">
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a href="*">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="*">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="*">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright__rights">
            Copyright <span>©</span> 2021 Bongal.co. All rights reserved
          </div>
          <div className="footer__copyright__payments">
            <p>PAYMENT METHODS</p>
            <img src={Circles} alt="images" className="images" />
            <img src={VISA} alt="images" className="images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
