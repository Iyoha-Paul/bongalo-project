import React from "react";
import PlacesCard from "./PlacesCard";

const FeaturedPlaces = () => {
  return (
    <div className="featured-places">
      <div className="container featured-places__container">
        <h2>Featured Places</h2>
        <div className=" ">
          <PlacesCard />
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlaces;
