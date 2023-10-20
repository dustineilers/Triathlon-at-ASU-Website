import React from "react";
import "../../App.css";
import "./Practices.css";
import Footer from "../Footer";

export default function Practices() {
  return (
    <>
      <div className="practices">
        <h1>PRACTICES</h1>
      </div>
      <div className="practices-content">
        <h1>PRACTICE SCHEDULE</h1>
        <table class="practice-schedule">
          <tbody>
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
            <tr className="icon">
              <td>
                <i class="fa-solid fa-person-running"></i>
              </td>
              <td>
                <i class="fa-solid fa-person-swimming fa-flip-horizontal"></i>
              </td>
              <td>
                <i class="fa-solid fa-person-biking"></i>
              </td>
              <td>
                <i class="fa-solid fa-person-running"></i>
                <i class="fa-solid fa-person-swimming fa-flip-horizontal"></i>
              </td>
              <td>
                <i class="fa-solid fa-person-biking"></i>
              </td>
            </tr>
            <tr>
              <td>
                <span className="discipline">RUN:</span> <br /> 6:00 PM
              </td>
              <td>
                <span className="discipline">SWIM:</span> <br /> 6:00 - 7:00 PM
              </td>
              <td>
                <span className="discipline">INDOOR BIKE:</span> <br /> 7:00 -
                8:00 PM
              </td>
              <td>
                <span className="discipline">RUN:</span> <br />
                6:00 AM
                <br /> <span className="discipline">SWIM:</span> <br /> 6:00 -
                7:00 PM
              </td>
              <td>
                <span className="discipline">BIKE:</span> <br />
                7:00 AM
              </td>
            </tr>
            <tr>
              <td>
                SDFC Fields <br /> Bike Rack
              </td>
              <td>SDFC West Pool</td>
              <td>SDFC Synergy Studio</td>
              <td>
                <span className="discipline">RUN:</span> <br /> SDFC Fields Bike
                Rack
                <br /> <span className="discipline">SWIM:</span> <br /> SDFC
                West Pool
              </td>
              <td>
                SDFC Fields <br /> Bike Rack
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}
