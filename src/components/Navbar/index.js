import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  NavLinks,
  MobileIcon,
  NavItem,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/"> dolla</Navlogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">about</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin"> Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
