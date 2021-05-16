import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const HeroSectionContainer = styled.div`
  background: #fff;
  padding-top: 80px;
`;
export const HeroSectionWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 50%);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50%);
  }
`;
export const HeroSectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px 54px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 600px) {
    padding: 12px 24px;
  }
`;
export const HeroSectionTextHeading = styled.h1`
  font-size: 2.5rem;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
`;
export const HeroSectionTextDescription = styled.p`
  font-size: small;
  margin-top: 8px;
  transition: all 0.2s ease-in-out;
`;
export const HeroSectionCta = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-top: 8px;
  padding: 12px 24px;
  background: #e8175d;
  color: #fff;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    padding: 12px 28px;
  }
`;

export const Icon = styled(FaArrowRight)`
  opacity: ${({ hover }) => (hover ? "1" : "0")};
  transition: all 0.2s ease-in-out;
  margin-left: 6px;
  padding-left: 6px;
`;

export const HeroSectionImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;
export const HeroSectionImage = styled.img`
  height: 700px;
  width: 70%;

  @media screen and (max-width: 600px) {
    height: 400px;
    width: 60%;
  }
`;
