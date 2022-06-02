import React from "react";
import Place1 from "../img/Place1.png";
import Place2 from "../img/Place2.png";
import Place3 from "../img/Place3.png";
import Place4 from "../img/Place4.png";
import bed from "../img/bed.png";
import shower from "../img/shower.png";
import { settings } from "./MultiCarouselSettings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PlacesCard = () => {
  const places = [
    {
      placeThumbnail: Place1,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place2,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Apartment",
      beds: "3",
      showers: "7",
    },

    {
      placeThumbnail: Place3,
      name: `SCI Shalismi `,
      price: "$120",
      description: "House",
      beds: "3",
      showers: "7",
    },

    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
    {
      placeThumbnail: Place4,
      name: `SCI Shalismi `,
      price: "$120",
      description: "Room",
      beds: "3",
      showers: "7",
    },
  ];
  return (
    <Slider {...settings} className="featured-place">
      {places.map((place) => (
        <div className="placecard">
          <img
            src={place.placeThumbnail}
            alt="images"
            className="placecard__image"
          />
          <div className="placecard__description">
            <div>
              <h4>{place.name}</h4>
              <div className="placecard__description__price">
                {place.price}
                <span>/night</span>
              </div>
            </div>
            <div className="placecard__details">
              <h4>{place.description}</h4>
              <div className="placecard__details__amenities">
                <div className="bed">
                  <div className="bed__no"> {place.beds}</div>
                  <img src={bed} alt="bed" className="images" />
                </div>
                <div className="shower">
                  <div className="shower__no">{place.showers}</div>
                  <img src={shower} alt="shower" className="images" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default PlacesCard;
