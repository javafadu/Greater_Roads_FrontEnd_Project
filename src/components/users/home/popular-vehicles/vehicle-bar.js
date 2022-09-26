import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "./vehicle-bar.scss";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const VehicleBar = (props) => {
  const { vehicles, activeVehicle, setActiveVehicle } = props;
  const swiperRef = useRef(null);

  const handlePrev = () => {

  }

  const handleRight = () => {

  }

  return (
    <Container className="vehicle-bar" onClick={handlePrev}>
      <div className="arrow-left">
        <IoIosArrowDropleft />
      </div>
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {vehicles.map((vehicle) => (
          <SwiperSlide
            className={vehicle.id === activeVehicle.id ? "active" : ""}
            onClick={() => setActiveVehicle(vehicle)}
            key={vehicle.id}
          >
            {vehicle.model}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="arrow-right" onClick={handleRight}>
        <IoIosArrowDropright />
      </div>
    </Container>
  );
};

export default VehicleBar;
