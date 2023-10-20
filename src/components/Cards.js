import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out the EPIC things we do!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/IMG-4489.jpg"
              text="Race Cactus Man at home in Tempe"
              label="Race"
              path="/events"
            />
            <CardItem
              src="images/IMG-4491.jpg"
              text="Practice open water swimming at Saguaro Lake"
              label="Training"
              path="/practices"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/IMG-4494.jpg"
              text="Compete in a fast-paced sprint triathlon in San Diego"
              label="Race"
              path="/events"
            />
            <CardItem
              src="images/IMG-4495.jpg"
              text="Aid athletes competing in the legendary Ironman Arizona"
              label="Volunteer"
              path="/faq"
            />
            <CardItem
              src="images/IMG-4496.jpg"
              text="Beat the heat and attend a spin class at the SDFC"
              label="Training"
              path="/practices"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
