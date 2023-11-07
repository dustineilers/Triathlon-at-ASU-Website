import React from "react";
import "../../App.css";
import Footer from "../Footer";
import "./Registration.css";

export default function Registration() {
  return (
    <>
      <div className="registration">
        <h1>REGISTRATION</h1>
      </div>
      <div className="registration-content">
        <h1>HOW TO REGISTER</h1>
        <p>
          Triathlon at ASU is a Sun Devil Sports Club, and as such, registration 
          must be carried out through the Do Sports Easy site. 
          <a href="https://fitness.asu.edu/programs/sportclubs/join" target="_blank">This link </a>
          will direct you to several Canvas safety courses and the other membership 
          requirements (sickle cell test, $25 semester facilities charge, etc.), 
          which are standard across all on-campus sports clubs. If you are currently 
          an active member of another on-campus sports club, you only need to request 
          membership for the club on Sun Devil Sync. If you are not a member of any 
          other sports club, then you need to complete this entire process. If you 
          have any doubts or questions, please email the president and vice president, 
          which are listed at the bottom of the page.
        </p>
        <h1>CLUB DUES</h1>
        <p>
          In addition to ASU's requirements for joining a sports club, to become a member of
          Triathlon at ASU you must pay club dues. There are two tiers of membership offered.
        </p>
      </div>
      <Footer />
    </>
  );
}
