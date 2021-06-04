import React from "react";
import {
  Nav,
  NavLink,
  NavIcon,
  Bars
} from "./Elements";


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/">Italian Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Account</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
