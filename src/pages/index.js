import React, { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { objs } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import SideBar from "../components/SideBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const els = objs.map((el) => <InfoSection {...el} />);
  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      {els}

      <Services />
      <Footer />
    </>
  );
};

export default Home;
