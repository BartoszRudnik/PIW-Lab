import React, { useState } from "react";
import Navbar from "../NavigationBar/Navbar";
import SideBar from "../SideBar/Side";
import {
  HeroItems,
  HeroContainer,
  HeroContent,
  HeroP,
  HeroH1,
} from "./MainSelectionElements";

const Hero = ({ actualOrder, clearCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <SideBar
        isOpen={isOpen}
        toggle={toggle}
        actualOrder={actualOrder}
        clearCart={clearCart}
      />
      <HeroContent>
        <HeroItems>
          <HeroH1>Best Italian Pizza in town</HeroH1>
          <HeroP>Try it now</HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
