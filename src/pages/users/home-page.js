import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import MobileApp from "../../components/users/home/mobile-app/mobile-app";
import Slider from "../../components/users/home/slider/slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <Spacer />
      <MobileApp />
    </>
  );
};

export default HomePage;
