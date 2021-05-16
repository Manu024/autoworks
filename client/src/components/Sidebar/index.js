import React from "react";
import {
  SidebarContainer,
  SidebarWrapper,
  SidebarTextWrapper,
  SidebarText,
  SidebarBtnWrapper,
  SidebarBtn,
  CloseIcon,
} from "./SidebarElements";

const Sidebar = ({ toggleBar, isOpen, user, email, toggleClick }) => {
  let text = (
    <SidebarTextWrapper>
      <SidebarText to="/">About</SidebarText>
      <SidebarText to="/">Services</SidebarText>
      <SidebarText to="/signin">User Login</SidebarText>
      <SidebarText to="/admin-signin">Admin Login</SidebarText>
      <SidebarBtnWrapper to="/signup">
        <SidebarBtn>SignUp</SidebarBtn>
      </SidebarBtnWrapper>
    </SidebarTextWrapper>
  );
  if (user === "admin") {
    text = (
      <SidebarTextWrapper>
        <SidebarText to="/">About</SidebarText>
        <SidebarText to="/" onClick={() => toggleClick("delete")}>
          Delete Services
        </SidebarText>
        <SidebarText to="/" onClick={() => toggleClick("update")}>
          Update Services
        </SidebarText>
        <SidebarBtnWrapper to="/">
          <SidebarBtn>{email}</SidebarBtn>
        </SidebarBtnWrapper>
      </SidebarTextWrapper>
    );
  } else if (user === "user") {
    text = (
      <SidebarTextWrapper>
        <SidebarText to="/about">About</SidebarText>
        <SidebarText to="/services" onClick={toggleClick}>
          Book Services
        </SidebarText>
        <SidebarBtnWrapper to="/">
          <SidebarBtn>{email}</SidebarBtn>
        </SidebarBtnWrapper>
      </SidebarTextWrapper>
    );
  }
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleBar}>
      <CloseIcon onClick={toggleBar}></CloseIcon>
      <SidebarWrapper>{text}</SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
