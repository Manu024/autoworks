import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  background: #000;
  position: fixed;
  margin-bottom: -80px;
`;
export const NavbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`;
export const NavbarHeading = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  font-weight: bold;
  color: #e8175d;
  justify-self: flex-start;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  &:hover {
    color: #cc527a;
  }
`;
export const NavbarTextWrapper = styled.div`
  display: flex;
  padding: 12px 36px;
  height: 80px;
  align-items: center;
  justify-content: space-evenly;
  &:nth-child(3) {
    padding-right: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavbarText = styled(Link)`
  text-decoration: none;
  padding-right: 54px;
  color: #fff;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
  white-space: no-wrap;
  text-overflow: ellipsis;

  &:hover {
    color: #cc527a;
  }
  @media screen and (max-width: 600px) {
    padding-right: 34px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    display: block;
    justify-self: flex-end;
  }
  &:hover {
    color: #cc527a;
  }
`;

export const NavbarBtnWrapper = styled(Link)`
  text-decoration: none;
`;
export const NavbarBtn = styled.div`
  font-size: 1.1rem;
  color: #000;
  background: #e8175d;
  border-radius: 50px;
  padding: 12px 24px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #e8175d;
    background: #fff;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
