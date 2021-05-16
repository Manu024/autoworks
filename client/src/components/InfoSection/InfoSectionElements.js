import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export const InfoSectionContainer = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#000")};
`;
export const InfoSectionWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: ${({ imageFront }) =>
    imageFront ? "flex-start" : "flex-end"};
  grid-template-rows: 1fr;
  grid-template-columns: repeat(2, 50%);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 50%);
    justify-items: center;
  }
`;
export const InfoSectionTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: ${({ imageFront }) => (imageFront ? "flex-start" : "flex-end")};
  padding: 12px 54px;
  transition: all 0.2s ease-in-out;
  max-width: 440px;
`;

export const TopLine = styled.div`
  align-self: ${({ imageFront }) => (imageFront ? "flex-start" : "center")};
  color: #e8175d;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const InfoSectionTextHeading = styled.h1`
  font-size: 2.5rem;
  transition: all 0.2s ease-in-out;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#e8175d")};

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 540px) {
    font-size: 1.5rem;
  }
`;
export const InfoSectionTextDescription = styled.p`
  margin-bottom: 35px;
  font-size: 1.1rem;
  line-height: 24px;
  font-size: small;
  margin-top: 8px;
  transition: all 0.2s ease-in-out;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
`;
export const InfoSectionCta = styled(Link)`
  text-decoration: none;
  display: ${({ btnshow }) => (btnshow ? "flex" : "none")};
  align-items: center;
  align-self: flex-start;
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

export const InfoSectionImageWrapper = styled.div`
  display: flex;
  justify-content: ${({ imageFront }) =>
    imageFront ? "flex-end" : "flex-start"};
  align-items: center;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  order: ${({ imageFront }) => (imageFront ? "-1" : "0")};

  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: flex-start;
    order: 0;
  }
`;
export const InfoSectionImage = styled.img`
  height: 600px;
  width: 50%;

  @media screen and (max-width: 600px) {
    height: 400px;
    width: 50%;
  }
`;
