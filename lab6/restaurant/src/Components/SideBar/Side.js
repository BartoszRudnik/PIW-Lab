import React from "react";
import HomePage from "../Account/HomePage";
import UserProvider from "../../Providers/UserProvider";
import {
  Icon,
  CloseIcon,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBtnWrap,
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <HomePage />
        Orders History
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to="/">Order Now</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
};

export default SideBar;
