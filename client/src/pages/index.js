import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { InfoSec1, InfoSec2, InfoSec3 } from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBar = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar toggleBar={toggleBar} {...props} />
      <Sidebar isOpen={isOpen} toggleBar={toggleBar} />
      <HeroSection {...props} />
      <InfoSection {...InfoSec1} />
      <InfoSection {...InfoSec2} />
      <Services />
      <InfoSection {...InfoSec3} {...props} />
      <Footer />
    </>
  );
};

export default Home;
