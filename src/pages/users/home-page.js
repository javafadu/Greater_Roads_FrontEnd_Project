import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import MobileApp from "../../components/users/home/mobile-app/mobile-app";
import PopularVehicles from "../../components/users/home/popular-vehicles/popular-vehicles";
import Slider from "../../components/users/home/slider/slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Spacer />
      <PopularVehicles />
      <Spacer />
      <MobileApp />
      <Spacer />
    </>
  );
};

export default HomePage;
