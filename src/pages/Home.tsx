import React from "react";
import FeaturedCities from "../components/FeaturedCities";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="home">
      <section className=" ">
        <Hero />
      </section>
      <section>
        <FeaturedCities />
      </section>
    </div>
  );
};

export default Home;
