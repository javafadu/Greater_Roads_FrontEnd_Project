import React, { useState } from "react";
import { Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import "./auth.scss";
import logo from "../../../../assets/img/logo/logo-white.png";
import { RiCloseCircleLine, RiHome7Line } from "react-icons/ri";

const Auth = () => {

  return (
    <Container fluid className="auth">
      <Row>
        <Col lg={7}>
          <img src={logo} alt="TRVLCar" />
          <div className="toolbar">
            <RiCloseCircleLine/>
            <RiHome7Line/>
          </div>
        </Col>
        <Col lg={5}>
          <Card>
            <Card.Body>
              <Tabs>
                <Tab eventKey="login" title="Login">
                </Tab>
                <Tab eventKey="register" title="Register">
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
