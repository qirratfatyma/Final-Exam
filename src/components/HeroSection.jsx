import React from "react";
import { Link } from "react-router-dom";
import imgi from "../assets/img/imgi.png"
import heroimg from "../assets/img/heroimg.png"

const Herosection = () => {
  return (
    <div >
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row g-2">
            <div className="col-sm-12 col-lg-12 col-md-12">
              <b><h1>Web3Makr Redefinng</h1>
              <h2>How You Create</h2></b>
              <h4>Unlock the blockchain potential to create Web3 Applications</h4>
            </div>
            </div>
            <div className="video-container">
      <div className="play-button">
        <span className="play-icon"></span>      
      <br></br>
      </div>
      <img src={imgi} alt="midimage" className="imgi-size"/>
    </div>
        </div>
      </section>
      <br></br>
      <br></br>
      {/* Officially Supported Languages Section */}
      <section>
        <div className="container">
          <div className="row g-2">
            <div className="col-sm-12 col-lg-6 col-md-6 Hero-text">
              <br></br>
              <h1> <b>Create your own Web3 Masterpiece</b> </h1>
              <br></br>
              <p>
              Most entrepreneurs want to create their own web3 sites, unfortunately,
               they dont know much about creating one. Web3Makr makes it easier for newbies to create
                a blockchain-based collectibles solution without the hassle of leaving their favorite
                 creation tools and by simple drag and drop functionality.
              </p>
              <button type="submit" className="signup-button">
          Start Building
        </button>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <img src={heroimg} alt="Hero" className="Hero-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
