import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const AdminIndexContainer = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 200px 1fr;
  background: #fff;
  transition: all 0.2s ease-in-out;
`;
export const AdminIndexHeaderWrapper = styled.div`
  padding: 16px 32px;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    padding: 8px 18px;
  }
`;
export const AdminIndexHeading = styled.h1`
  font-size: 1.5rem;
  padding-right: 12px;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    display: none;
  }
`;

export const AdminIndexSearchbarWrapper = styled.form`
  padding-right: 12px;
  &:hover {
    color: #e8175d;
  }
`;

export const AdminIndexSearchbar = styled.input`
  padding: 12px 48px;
  border-radius: 50px;
  outline: none;
  border: none;
  color: #e8175d;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    padding: 12px 24px;
  }
  
`;

export const SearchIcon = styled.button`
  position: relative;
`;

export const Icon = styled(FaSearch)`
  position: absolute;
  font-size: 1.1rem;
  top: -14px;
  right: 16px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #e8175d;
  }
`;

export const AdminIndexEditServices = styled.div`
  cursor: pointer;
  white-space: nowrap;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const AdminIndexCustomerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  transition: all 0.2s ease-in-out;
`;

export const AdminIndexCustomerHeading = styled.h1`
  margin-bottom: 12px;
  color: #e8175d;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const AdminIndexCustomerDetail = styled.li`
  list-style-type: decimal;
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
export const AdminIndexCustomerOrdersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 32px;
  transition: all 0.2s ease-in-out;
`;
export const AdminIndexCustomerOrdersHeading = styled.h1`
  margin-bottom: 12px;
  color: #e8175d;
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
  }
`;
export const AdminIndexCustomerOrdersList = styled.ul`
  list-style-type: decimal;
`;
export const AdminIndexCustomerOrdersItem = styled.li`
  cursor: pointer;
  padding: 12px;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    color: #e8175d;
  }
  transition: all 0.2s ease-in-out;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;
