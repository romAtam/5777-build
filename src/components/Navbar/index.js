import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import smile from "../../images/smile1.svg";
import { objs } from "../InfoSection/Data";
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
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const els = objs.map((el) => {
    return (
      <NavItem>
        <NavLinks
          to={el.id}
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
        >
          {el.id}
        </NavLinks>
      </NavItem>
    );
  });
  return (
    <>
      <IconContext.Provider value={{ color: "red" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Navlogo onClick={toggleHome} to="/">
              {" "}
              <img src={smile} alt="smile" width="100" />
              &nbsp; &nbsp;IT SMILE
            </Navlogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>{els}</NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin"> Sign in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
