import React from "react";
import { NavLink } from "react-router-dom";
import BabyDairyBlogSection from "../components/BabyDairyBlogSection";
import BabyDairyPromo from "../components/BabyDairyPromo";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navigation from "../components/Navigation";
import Ourtools from "../components/Ourtools";
import Pregnancyschedule from "../components/Pregnancyschedule";
import QandASection from "../components/QandASection";
import Testimonials from "../components/Testimonials";

import VideosSection from "../components/VideosSection";

import baby1 from "../images/baby1.svg";

const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Hero />
      <Pregnancyschedule />
      <section className="to-know">
        <div className="container to-know--container">
          <div>
            <h1>Want to know how your baby looks like now?</h1>
            <div className="to-know__cta">
              <NavLink to="/" className="btn ">
                Show me
              </NavLink>
              <NavLink to="/" className="btn btn--white">
                Create account
              </NavLink>
            </div>
          </div>
          <div className="to-know__video">
            <img src={baby1} alt="baby" className="to-know__video__img" />
            <button className="to-know__video__btn">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div>
      </section>
      <section>
        <QandASection />
      </section>

      <section>
        <Ourtools />
      </section>

      <section>
        <VideosSection />
      </section>

      <section>
        <Testimonials />
      </section>

      <section>
        <BabyDairyBlogSection />
      </section>
      <section>
        <BabyDairyPromo />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Home;
