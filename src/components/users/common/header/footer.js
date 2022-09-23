import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../assets/img/logo/logo-white.png";
import { settings } from "../../../../utils/settings";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <Link to="/">
              <img src={logo} alt={settings.siteName} />
            </Link>
            <p>
              Check out our new fleet of cars, latest offers, our advantages and
              free extras online. Choose from one of our new car models.
            </p>
          </Col>
          <Col md={3}>
            <h2>Quick Links</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/vehicles">Vehicles</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h2>Working Hours</h2>
            <ul>
              <li>Mon-Fir: 09:00AM - 09:00 PM</li>
              <li>Saturday: 09:00AM - 07:00 PM</li>
              <li>Sunday: 09:00AM - 05:00 PM</li>
            </ul>
          </Col>
          <Col md={3}>
            <h2>Contact Us</h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
