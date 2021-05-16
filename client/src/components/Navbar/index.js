import React from "react";
import { CgMenuRight } from "react-icons/cg";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarHeading,
  NavbarTextWrapper,
  NavbarText,
  MobileIcon,
  NavbarBtnWrapper,
  NavbarBtn,
} from "./NavbarElements";

const Navbar = ({ toggleBar, isAuth, email }) => {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarHeading to="/">Autoworks</NavbarHeading>
        {isAuth ? (
          <NavbarBtnWrapper to="/">
            <NavbarBtn>{email}</NavbarBtn>
          </NavbarBtnWrapper>
        ) : (
          <>
            <NavbarTextWrapper>
              <NavbarText to="/about">About</NavbarText>
              <NavbarText to="/services">Services</NavbarText>
              <NavbarText to="/signin">User Login</NavbarText>
              <NavbarText to="/admin-signin">Admin Login</NavbarText>
            </NavbarTextWrapper>
            <NavbarBtnWrapper to="/signup">
              <NavbarBtn>SignUp</NavbarBtn>
            </NavbarBtnWrapper>
          </>
        )}
        <MobileIcon onClick={toggleBar}>
          <CgMenuRight />
        </MobileIcon>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
