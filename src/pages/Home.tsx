import React from "react";
import Experiences from "../components/Experiences";
import FeaturedCities from "../components/FeaturedCities";
import FeaturedPlaces from "../components/FeaturedPlaces";
import Hero from "../components/Hero";
import OurFeatures from "../components/OurFeatures";
import Support from "../components/Support";

const Home = () => {
  return (
    <div className="home">
      <section className=" ">
        <Hero />
      </section>
      <section>
        <FeaturedCities />
      </section>
      <section>
        <FeaturedPlaces />
      </section>
      <section>
        <Experiences />
      </section>
      <section>
        <OurFeatures />
      </section>
      <section>
        <Support />
      </section>
    </div>
  );
};

export default Home;
