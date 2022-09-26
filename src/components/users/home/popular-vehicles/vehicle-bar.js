import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

const VehicleBar = (props) => {
  const { vehicles } = props;

  return (
    <Container className="vehicle-bar">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 1</SwiperSlide>
        ...
      </Swiper>

      {vehicles.map((vehicle) => (
        <div>{vehicle.model}</div>
      ))}
    </Container>
  );
};

export default VehicleBar;
