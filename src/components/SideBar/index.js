import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SideBarElements";
const SideBar = ({ toggle, isOpen }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="garanty">
            Гарантия
          </SidebarLink>
          <SidebarLink onClick={toggle} to="contact">
            Контакты
          </SidebarLink>
          <SidebarLink onClick={toggle} to="Services">
            Услуги
          </SidebarLink>
          <SidebarLink onClick={toggle} to="usaaa">
            Галерея
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign in</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
