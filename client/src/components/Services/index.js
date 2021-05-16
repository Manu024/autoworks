import React from "react";
import Img from "../../images/select_options.svg";
import {
  ServicesCard,
  ServicesCardImg,
  ServicesCardImgDescription,
  ServicesCardImgWrapper,
  ServicesContainer,
  ServicesHeading,
  ServicesWrapper,
  ServicesCardH2,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesHeading>Our Sevices</ServicesHeading>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesCardImgWrapper>
            <ServicesCardImg src={Img} />
          </ServicesCardImgWrapper>
          <ServicesCardH2>Oil Change</ServicesCardH2>
          <ServicesCardImgDescription>
            Dolore nostrud minim cupidatat nulla. Dolor duis minim commodo
            deserunt et ut nulla culpa tempor et aute.
          </ServicesCardImgDescription>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImgWrapper>
            <ServicesCardImg src={Img} />
          </ServicesCardImgWrapper>
          <ServicesCardH2>General Service</ServicesCardH2>
          <ServicesCardImgDescription>
            Dolore nostrud minim cupidatat nulla. Dolor duis minim commodo
            deserunt et ut nulla culpa tempor et aute.
          </ServicesCardImgDescription>
        </ServicesCard>
        <ServicesCard>
          <ServicesCardImgWrapper>
            <ServicesCardImg src={Img} />
          </ServicesCardImgWrapper>
          <ServicesCardH2>Wash Up</ServicesCardH2>
          <ServicesCardImgDescription>
            Dolore nostrud minim cupidatat nulla. Dolor duis minim commodo
            deserunt et ut nulla culpa tempor et aute.
          </ServicesCardImgDescription>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
