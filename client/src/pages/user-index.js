import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import UserOrders from "../components/UserOrders/index.js";
import Booking from "../components/Booking";
import Sidebar from "../components/Sidebar";

const UserIndex = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleBar={toggleBar} {...props} />
      <Sidebar isOpen={isOpen} {...props} toggleBar={toggleBar} />
      <HeroSection {...props} />
      <UserOrders {...props} />
      <Footer />
      {props.click ? <Booking {...props} /> : null}
    </>
  );
};

export default UserIndex;
