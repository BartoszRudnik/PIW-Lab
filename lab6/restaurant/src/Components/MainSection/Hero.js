import React, { useState } from "react";
import Navbar from "../NavigationBar/Navbar";
import SideBar from "../SideBar/Side";
import {
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
      <Navbar toggle={this.toggle}/>
      <SideBar isOpen={isOpen} toggle={this.toggle}/>
      <HeroContent>
        <HeroItems>
          <HeroH1>Title</HeroH1>
          <HeroP>Subtitle</HeroP>
          <HeroBtn>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
