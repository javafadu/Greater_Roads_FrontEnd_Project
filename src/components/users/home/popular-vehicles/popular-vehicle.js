import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { settings } from "../../../../utils/settings";
import { RiGasStationFill, RiCarLine, RiCaravanLine } from "react-icons/ri";
import { IoIosSnow } from "react-icons/io";
import { MdOutlineAirlineSeatReclineExtra } from "react-icons/md";
import { GiJoystick, GiCalendarHalfYear } from "react-icons/gi";
import "./popular-vehicle.scss";
import Spacer from "../../../common/spacer/spacer";

const PopularVehicle = (props) => {
  const { activeVehicle } = props;
  const {
    image,
    model,
    age,
    airConditioning,
    doors,
    fuelType,
    id,
    luggage,
    pricePerHour,
    seats,
    transmission,
  } = activeVehicle;

  return (
    <Container className="popular-vehicle">
      <Row className="g-5">
        <Col md={8}>
          <img
            src={`${settings.apiURL}/files/display/${image[0]}`}
            className="img-fluid"
            alt={model}
          />
        </Col>
        <Col md={4}>
          <h2>
            <sup>$</sup>
            <span>{pricePerHour}</span>
          </h2>
          <p>rent per hour</p>

          <ul>
            <li>
              <RiCarLine /> Model: {model}
            </li>
            <li>
              <RiCarLine /> Doors: {doors}
            </li>
            <li>
              <MdOutlineAirlineSeatReclineExtra /> Seats: {seats}
            </li>
            <li>
              <RiCaravanLine /> Luggage: {luggage}
            </li>
            <li>
              <GiJoystick /> Transmission: {transmission}
            </li>
            <li>
              <IoIosSnow /> Air conditioning
            </li>
            <li>
              <RiGasStationFill /> Fuel Type: {fuelType}
            </li>
            <li>
              <GiCalendarHalfYear /> Age: {age}
            </li>
          </ul>
          <Spacer height={30} />
          <Button variant="primary">Rent Now</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularVehicle;
