import React from "react";
import Spacer from "../../components/common/spacer/spacer";
import RentPath from "../../components/users/about/rent-path/rent-path";
import WhyChooseUs from "../../components/users/about/why-choose-us/why-choose-us";
import PageHeader from "../../components/users/common/page-header/page-header";

const AboutPage = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <Spacer height={70} />
      <RentPath />
      <Spacer height={70} />
      <WhyChooseUs />
      <Spacer height={70} />
    </>
  );
};

export default AboutPage;
