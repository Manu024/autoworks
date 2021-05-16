import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;
export const ServicesHeading = styled.h1`
  padding: 28px 0;
  margin-bottom: 16px;
  color: #fff;
`;
export const ServicesWrapper = styled.div`
  display: grid;
  align-items: center;
  margin: 0 auto;
  border: none;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
  overflow: hidden;
  padding: 24px 32px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;
export const ServicesCard = styled.div`
  padding: 12px 32px;
  margin-top: 16px;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 21px 22px -8px rgba(0, 0, 0, 0.035),
    0 36px 176px -8px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;
export const ServicesCardImgWrapper = styled.div`
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
`;
export const ServicesCardImg = styled.img`
  height: 150px;
`;

export const ServicesCardH2 = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  color: #e8175d;
  padding: 8px;
`;

export const ServicesCardImgDescription = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #fff;
`;
