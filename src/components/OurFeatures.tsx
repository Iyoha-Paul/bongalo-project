import React from "react";
import Payment from "../img/Payment.png";
import Globe from "../img/Globe.png";
import Person from "../img/Person.png";

const OurFeatures = () => {
  return (
    <div className="">
      <div className="container">
        <div className="features">
          <div className="feature">
            <div>
              <img src={Globe} alt="images" className="globe__icon" />
            </div>
            <h4>Availability</h4>
            <p>
              We know how hard it can be finding a perfect home to rent,
              especially when moving to a new country; so we are available 24/7
              for your inquiries about the best places to stay. You’ll find the
              best places to stay on our platform without stress.
            </p>
          </div>
          <div className="feature">
            <div>
              <img src={Payment} alt="images" className="globe__icon" />
            </div>
            <h4>Client Satisfaction</h4>

            <p>
              Whether you are on a budget or travelling for a; conference,
              seminar, vacation, we got you covered. Plus, you can pay easily
              with your mobile wallet from any country in Africa in addition to
              the other payment methods available on our system.
            </p>
          </div>
          <div className="feature">
            <div>
              <img src={Person} alt="images" className="globe__icon" />
            </div>
            <h4> Support</h4>
            <p>
              We're available to support you as you book and set out on your
              trip across the continent. Our experienced support team ensures
              your experience stays awesome all the way on your trip and even
              beyond. Count on us for our 24/7 support service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
