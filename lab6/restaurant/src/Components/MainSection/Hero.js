import React, { useState } from "react";
import Navbar from "../NavigationBar/Navbar";
import SideBar from "../SideBar/Side";
import {
  HeroItems,
  HeroContainer,
  HeroContent,
  HeroBtn,
  HeroP,
  HeroH1,
} from "./MainSelectionElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Italian Pizza in town</HeroH1>
          <HeroP>Try it now</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
