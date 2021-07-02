import React, { useState } from "react";
import Carousels from "../components/Carusel";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjthree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import SideBar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Services  />
      <div>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />

        <InfoSection {...homeObjthree} />
        <Carousels />
      </div>

      <Footer />
    </>
  );
};

export default Home;
