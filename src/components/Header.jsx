import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-color ">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navbar-title">
            <img src={logo} alt="yeslogo"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-section">
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
          </Nav>
          <Link to="/Login">
            <button className="btn navbar-btn"><b>START FOR FREE</b></button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
