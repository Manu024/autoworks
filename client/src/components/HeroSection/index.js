import React, { useState } from "react";
import Bike from "../../images/bike_ride.svg";
import {
  HeroSectionContainer,
  HeroSectionWrapper,
  HeroSectionTextWrapper,
  HeroSectionTextHeading,
  HeroSectionTextDescription,
  HeroSectionCta,
  HeroSectionImageWrapper,
  HeroSectionImage,
  Icon,
} from "./HeroSectionElements";

const HeroSection = ({ toggleClick }) => {
  const [hover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover(!hover);

  return (
    <HeroSectionContainer>
      <HeroSectionWrapper>
        <HeroSectionTextWrapper>
          <HeroSectionTextHeading>
            We fix your dream Vehicle
          </HeroSectionTextHeading>
          <HeroSectionTextDescription>
            Occaecat fugiat laborum nulla laborum eu amet ipsum voluptate amet
            quis do ipsum non amet.
          </HeroSectionTextDescription>
          <HeroSectionCta
            to="/signin"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            onClick={toggleClick}
          >
            Book your's <Icon hover={hover ? "true" : undefined} />
          </HeroSectionCta>
        </HeroSectionTextWrapper>
        <HeroSectionImageWrapper>
          <HeroSectionImage src={Bike} />
        </HeroSectionImageWrapper>
      </HeroSectionWrapper>
    </HeroSectionContainer>
  );
};

export default HeroSection;
