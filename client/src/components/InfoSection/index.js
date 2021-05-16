import React, { useState } from "react";
import {
  InfoSectionContainer,
  InfoSectionWrapper,
  InfoSectionTextWrapper,
  InfoSectionTextHeading,
  InfoSectionTextDescription,
  InfoSectionCta,
  InfoSectionImageWrapper,
  InfoSectionImage,
  Icon,
  TopLine,
} from "./InfoSectionElements";

const InfoSection = ({
  lightBg,
  btnshow,
  heading,
  description,
  imageFront,
  imageUrl,
  topLine,
  toggleClick,
}) => {
  const [hover, setIsHover] = useState(false);

  const toggleHover = () => setIsHover(!hover);
  return (
    <InfoSectionContainer lightBg={lightBg}>
      <InfoSectionWrapper imageFront={imageFront}>
        <InfoSectionTextWrapper imageFront={imageFront}>
          <InfoSectionTextHeading lightBg={lightBg}>
            <TopLine imageFront={imageFront}>{topLine}</TopLine>
            {heading}
          </InfoSectionTextHeading>
          <InfoSectionTextDescription lightBg={lightBg}>
            {description}
          </InfoSectionTextDescription>
          <InfoSectionCta
            to="/"
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
            btnshow={btnshow.toString()}
            onClick={toggleClick}
          >
            Book your's <Icon hover={hover ? "true" : undefined} />
          </InfoSectionCta>
        </InfoSectionTextWrapper>
        <InfoSectionImageWrapper imageFront={imageFront}>
          <InfoSectionImage src={imageUrl} />
        </InfoSectionImageWrapper>
      </InfoSectionWrapper>
    </InfoSectionContainer>
  );
};

export default InfoSection;
