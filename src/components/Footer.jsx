import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Nav from "react-bootstrap/Nav";
import ig from "../assets/img/ig.png";
import fb from "../assets/img/fb.png";
import tw from "../assets/img/tw.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-12 col-sm-12 col-md-12 footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="col-lg-12 col-sm-6 col-md-12">
            <Link to="/HeroSection" className="navbar-elements">
              <h3>Web3Makr</h3>
            </Link>
            <Link to="/Skills" className="navbar-elements">
              <h3>White Paper</h3>
            </Link>
            <Link to="/Contact" className="navbar-elements">
              <h3>Services</h3>
            </Link>
            <Link to="/Documentation" className="navbar-elements">
              <h3>Tools</h3>
            </Link>
            <Link to="/Documentation" className="navbar-elements">
              <h3>Contact Us</h3>
            </Link>
            </div>
          </div>
        <div className="row">
          <div style={{ textAlign: "left", color: "white" }}>
          <p>
            &copy; {new Date().getFullYear()} ExpertiseLink All rights reserved.
          </p>
           <div className="social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fb} alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tw} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ig} alt="Instagram" />
              </a>
            </div>
            </div>
        </div>
      </div>
      </div>
  );
};

export default Footer;
