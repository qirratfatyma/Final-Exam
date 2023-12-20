import React from "react";
import { Link } from "react-router-dom";
import imgi from "../assets/img/imgi.png";
import heroimg from "../assets/img/heroimg.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import fox from "../assets/img/fox.png";
import man from "../assets/img/man.png";
import moralis from "../assets/img/moralis.png";
import solidity from "../assets/img/solidity.png";
import ether from "../assets/img/ether.png";
import hardhat from "../assets/img/hardhat.png";
import Nav from 'react-bootstrap/Nav';

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

      <div className="future">
      <div>
        <h2>The Future of Web3 NoCode</h2>
        <h4>
          Web3Makr allows you to incorporate top ranked blockchain platforms
          into your work through the drag and drop feature.
        </h4>
  <div className="mt-5">
          <Container>
            <Row>
              <Col sm={12} md={12} lg={4} style={{ textAlign: "left" }}>
              <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home" style={{ marginBottom: "5rem", fontSize: "2.5rem", color: "white" }}>Multichain</Nav.Link>
      <Nav.Link eventKey="link-1" style={{ marginBottom: "5rem", fontSize: "2.5rem", color: "white" }}>Tools</Nav.Link>
      <Nav.Link eventKey="link-2" style={{ marginBottom: "5rem", fontSize: "2.5rem", color: "white"}}>DashBoard</Nav.Link>
    </Nav>
              </Col>
              <Col sm={12} md={12} lg={8}>
                <div className="images" style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={fox}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Wallets Support</p>
                  </div>
                  <div>
                    <Image
                      src={man}
                      width={"120px"}
                      roundedCircle
                      style={{ backgroundColor: "white", marginRight: "3rem" }}
                    />
                    <p>NFT Search</p>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={moralis}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Moralis Integration</p>
                  </div>
                  <div>
                    <Image
                      src={solidity}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Solidity</p>
                  </div>
                </div>
                <div className="images" style={{ display: "flex" }}>
                  <div>
                    <Image
                      src={ether}
                      width={"120px"}
                      roundedCircle
                      style={{
                        backgroundColor: "white",
                        padding: "3px",
                        marginRight: "3rem",
                      }}
                    />
                    <p>Ether.js</p>
                  </div>
                  <div>
                    <Image
                      src={hardhat}
                      width={"120px"}
                      roundedCircle
                      style={{ backgroundColor: "white", padding: "3px" }}
                    />
                    <p>Hardhat</p>
                  </div>
                </div>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
      
    </div>
    
    </div>
  );
};

export default Herosection;
