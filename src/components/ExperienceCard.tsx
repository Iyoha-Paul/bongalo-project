import eprience1 from "../img/eprience1.png";
import eprience2 from "../img/eprience2.png";
import eprience3 from "../img/eprience3.png";
import eprience4 from "../img/eprience4.png";
import LocationBlack from "../img/LocationBlack.png";
import React, { Component } from "react";
import Slider from "react-slick";
import { settings } from "./MultiCarouselSettings";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ExperienceCard = () => {
  const experiences = [
    {
      experienceThumbnail: eprience1,
      name: `Kigali Genocie Memorial `,
      location: "Gisozi , Kigali",
    },
    {
      experienceThumbnail: eprience2,
      name: `Mountain View`,
      location: "Gisozi , Kigali",
    },
    {
      experienceThumbnail: eprience3,
      name: `Anastasia Paradise `,
      location: "Gisozi , Kigali",
    },
    {
      experienceThumbnail: eprience4,
      name: `Nirvana Heights `,
      location: "Gisozi , Kigali",
    },
  ];

  return (
    <Carousel
      className="experience"
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={settings}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={false}
      autoPlaySpeed={10000}
      keyBoardControl={true}
      customTransition="all 5.5"
      transitionDuration={500}
      containerClass="carousel-container"
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {/* <button className="btn ">
        <i className="fa-solid fa-chevron-right"></i>
      </button> */}
      {experiences.map((experience) => (
        <div className="cont">
          <div className="experience__card">
            <img
              src={experience.experienceThumbnail}
              alt="images"
              className="experience__image"
            />
            <div className="experience__details">
              <h4>{experience.name}</h4>
              <div className="experience__details__location">
                <img
                  src={LocationBlack}
                  alt="images"
                  className="location__icon"
                />
                {experience.location}
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ExperienceCard;
