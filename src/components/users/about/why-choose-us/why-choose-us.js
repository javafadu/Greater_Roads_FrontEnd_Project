import React from "react";
import "./why-choose-us.scss";
import { Container, Row, Col, Button } from "react-bootstrap";
import SectionHeader from "../../common/section-header/section-header";
import { GiPayMoney, GiTakeMyMoney, GiVacuumCleaner } from "react-icons/gi";

const WhyChooseUs = () => {
  return (
    <Container fluid className="why-choose-us">
      <img
        src={require("../../../../assets/img/bg/vehicles.png")}
        alt="vehicles"
        className="img-fluid"
      />

      <Container>
        <Row>
          <Col md={6}>
            <SectionHeader
              title="Best valued deals you will ever find"
              subTitle="Why Choose Us"
              desc=""
            />
            <p>
              Whether you're flying into undefined for a short break or a longer
              stay, you can take the stress out of your onward journey by
              renting a car. We make it easy to find the best deal. Simply tell
              us your travel dates and we'll show you which cars are available
              with the best prices.
            </p>
            <Button variant="primary">Rent Now</Button>
          </Col>

          <Col md={6}>
            <ul>
              <li>
                <div>
                  <GiPayMoney />
                </div>
                <div>
                  <h3>Price Equalization</h3>
                  <p>
                    If you find the same service cheaper, we will provide the
                    service at the price you found
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <GiVacuumCleaner />
                </div>
                <div>
                  <h3>Hygienic Cars</h3>
                  <p>
                    We disinfect our vehicles before giving them to you to keep
                    you safe in the driver's seat.
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <GiTakeMyMoney />
                </div>
                <div>
                  <h3>No Extra Price</h3>
                  <p>
                    You will not encounter surprise payments. You know exactly
                    what you're paying for.
                  </p>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default WhyChooseUs;
