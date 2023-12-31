import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(true);
  });

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRI@ASU
            <span>&nbsp;&nbsp;</span>
            <i class="fa-solid fa-person-swimming fa-flip-horizontal"></i>
            <span>&nbsp;</span>
            <i class="fa-solid fa-person-biking"></i>
            <span>&nbsp;</span>
            <i class="fa-solid fa-person-running"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/events"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/practices"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Practices
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="https://fitness.asu.edu/programs/sportclubs/join"
                target="_blank"
                rel="noreferrer"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              source="https://fitness.asu.edu/programs/sportclubs/join"
              target="_blank"
            >
              SIGN UP
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
