import styled from "styled-components";
import { FaCheckCircle } from "react-icons/fa";

export const OrdersContainer = styled.div`
  background: #000;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;
export const OrdersWrapper = styled.ul`
  display: flex;
  /* border: 1px solid red; */
  padding: 44px 24px;
  flex-direction: column;
  justify-self: center;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const OrdersListHeading = styled.h1`
  padding: 16px;
  font-size: 1.5rem;
  color: #e8175d;
`;
export const OrdersListItems = styled.li`
  padding: 16px;
  list-style-type: none;
  cursor: pointer;
  &:hover {
    color: #e8175d;
  }
  @media screen and (max-width: 768px) {
    align-self: flex-start;
  }
`;
export const OrdersTrackingWrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  flex-direction: column;
`;

export const OrdersError = styled.h2`
  margin-top: 20px;
  padding: 52px 20px;
`;
export const OrdersTrackingStatus = styled.ul`
  display: flex;
  padding: 12px 24px;
  flex-direction: column;
  color: #fff;
  position: relative;
`;

export const Icon = styled.span`
  &::after {
    content: "";
    width: 3px;
    border-radius: 60px;
    display: inline-block;
    height: 58px;
    position: absolute;
    margin: 22px 0;
    left: 51px;
    background: #fff;
    color: #cc527a;
  }
`;

export const OrdersTrackingSymbol = styled(FaCheckCircle)`
  font-size: larger;
  color: ${({ status }) => (status ? `#0BE588` : `#C0CDC2`)};
  margin-right: 36px;
`;

export const OrdersHeading = styled.h1`
  padding: 16px 0;
  margin-top: 20px;
  font-size: 1.5rem;
  color: #e8175d;
  align-self: center;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    align-self: flex-start;
    padding: 16px 42px;
  }
`;
export const OrdersTrackingItem = styled.li`
  padding: 20px;
  color: ${({ status }) => (status ? `#0BE588` : `#C0CDC2`)};
  list-style-type: none;
  margin-bottom: 20px;
  &:last-child ::after {
    width: 0;
  }
`;
