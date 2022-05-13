import React from "react";
import eprience1 from "../img/eprience1.png";
import eprience2 from "../img/eprience2.png";
import eprience3 from "../img/eprience3.png";
import eprience4 from "../img/eprience4.png";
import LocationBlack from "../img/LocationBlack.png";

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
    <div className="experience">
      {experiences.map((experience) => (
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
      ))}
    </div>
  );
};

export default ExperienceCard;
