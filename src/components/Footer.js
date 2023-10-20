import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About</h2>
            {/* <Link to='/events'>About Us</Link> */}
            <Link to="/faq">FAQ</Link>
            {/* <Link to='/'>Officers</Link> */}
            <Link to="/practices">Practices</Link>
            <Link to="/events">Events</Link>
          </div>
          <div class="footer-link-items">
            <h2>Races</h2>
            <Link
              to="https://4peaksracing.com/events/castle-creek-2023/"
              target="_blank"
            >
              Castle Creek
            </Link>
            <Link
              to="https://register.bbscendurance.com/event/pumpkinman-triathlon-2023"
              target="_blank"
            >
              Pumpkinman
            </Link>
            <Link
              to="https://4peaksracing.com/events/splash-dash-swim-3-2023/"
              target="_blank"
            >
              Splash and Dash
            </Link>
            <Link to="https://tritonman.com" target="_blank">
              Tritonman
            </Link>
            <Link to="https://www.3disciplines.com/events/" target="_blank">
              Havasu
            </Link>
            <Link to="https://www.usatrichamps.com/" target="_blank">
              Nationals
            </Link>
            <Link
              to="https://4peaksracing.com/events/cactus-man-2024/"
              target="_blank"
            >
              Cactus Man
            </Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          {/* <div class='footer-link-items'>
            <h2>Resources</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div> */}
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link
              to="https://www.instagram.com/triathlonatasu/"
              target="_blank"
            >
              Instagram
            </Link>
            <Link to="mailto:asutripresident@gmail.com" target="_blank">
              Email
            </Link>
            <Link
              to="https://www.strava.com/clubs/asu-triathlon-107316"
              target="_blank"
            >
              Strava
            </Link>
            {/* <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link> */}
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              <span>&nbsp;&nbsp;</span>
              <i class="fa-solid fa-person-swimming fa-flip-horizontal"></i>
              <span>&nbsp;</span>
              <i class="fa-solid fa-person-biking"></i>
              <span>&nbsp;</span>
              <i class="fa-solid fa-person-running"></i>
            </Link>
          </div>
          <small class="website-rights">Triathlon at ASU © 2023</small>
          <div class="social-icons">
            {/* <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link> */}
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link email"
              to="mailto:asutripresident@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <i class="fa-regular fa-envelope" />
            </Link>
            <Link
              class="social-icon-link strava"
              to="https://www.strava.com/clubs/asu-triathlon-107316"
              target="_blank"
              aria-label="Strava"
            >
              <i class="fa-brands fa-strava" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
