import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #0d0d0d;
  z-index: 99;
  display: grid;
  align-items: center;
  transition: all 0.2s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 10%;
  right: 5%;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: #e8175d;
  }
`;
export const SidebarWrapper = styled.div`
  color: #fff;
`;
export const SidebarTextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(5, 60px);
  }
`;
export const SidebarText = styled(Link)`
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #e8175d;
  }
`;
export const SidebarBtnWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
export const SidebarBtn = styled.div`
  color: #000;
  padding: 12px 64px;
  border-radius: 50px;
  background: #e8175d;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #fff;
    color: #000;
  }
`;
