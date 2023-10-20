import React from "react";
import "../../App.css";
import Footer from "../Footer";
import EventItem from "../EventItem";
import { Button } from "../HashButton";

export default function Events() {
  return (
    <>
      <div className="events">
        <h1>EVENTS</h1>
        <div className="event-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            source="#fall"
          >
            FALL SCHEDULE
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            source="#spring"
          >
            SPRING SCHEDULE
          </Button>
        </div>
      </div>
      <div className="events-body">
        <h2 id="fall">Fall Schedule</h2>
        <ul>
          <EventItem
            src="images/castlecreek.jpg"
            name="Castle Creek Triathlon"
            date="October 7th, 2023"
            city="Lake Pleasant, Arizona"
            path="https://4peaksracing.com/events/castle-creek-2023/"
            side="left"
          />
          <EventItem
            src="images/pumpkin-man.jpg"
            name="Pumpkinman"
            date="October 28th, 2023"
            city="Boulder City, Nevada"
            path="https://register.bbscendurance.com/event/pumpkinman-triathlon-2023"
            side="right"
          />
          <EventItem
            src="images/tempetownlake.jpg"
            name="Splash and Dash #3"
            date="November 12th, 2023"
            city="Tempe, Arizona"
            path="https://4peaksracing.com/events/splash-dash-swim-3-2023/"
            side="left"
          />
        </ul>
        <h2 id="spring">Spring Schedule</h2>
        <ul>
          <EventItem
            src="images/triton-man.jpg"
            name="Tritonman"
            date="February 11th, 2024"
            city="San Diego, California"
            path="http://tritonman.com"
            side="right"
          />
          <EventItem
            src="images/lake-havasu.jpg"
            name="Lake Havasu Triathlon"
            date="March 17th, 2024"
            city="Lake Havasu City, Arizona"
            path="https://www.3disciplines.com/events/"
            side="left"
          />
          <EventItem
            src="images/cactusman.jpg"
            name="Cactus Man"
            date="April 28th, 2024"
            city="Tempe, Arizona"
            path="https://4peaksracing.com/events/cactus-man-2024/"
            side="right"
          />
        </ul>
      </div>
      <Footer />
    </>
  );
}
