"use client";

import { useContext } from "react";
import styled from "styled-components";

import { SidebarContext } from "./sidebar-context";
import { SidebarNavLink } from "./sidebar-nav-link";
import { SidebarSubNav } from "./sidebar-subnav";
import { useRouter } from "./hooks/router-context";
import { MenuItem } from "./menu-items.types";

import {
  COLLAPSED_WIDTH,
  EXPANDED_WIDTH,
} from "./sidebar-constants";

const StyledNav = styled.nav<{ width: string }>`
  height: 100%;
  width: ${props => props.width};
  transform-origin: left;
  transition: width 300ms ease-in-out;
`;

const StyledMenuContainer = styled.div`
  width: 100%;
`;

export const SidebarMenu = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const { isCollapsed } = useContext(SidebarContext);
  const { pathname } = useRouter();
  
  const navWidth = !isCollapsed ? `${EXPANDED_WIDTH}px` : `${COLLAPSED_WIDTH}px`;

  return (
    <StyledNav width={navWidth}>
      <StyledMenuContainer>
        {menuItems.map((item) => {
          if (item?.items && item.items.length > 0) {
            return <SidebarSubNav key={item.hash} {...item} />;
          }

          return (
            <SidebarNavLink
              key={item.hash}
              isActive={pathname === item.href}
              isCollapsed={isCollapsed}
              {...item}
            />
          );
        })}
      </StyledMenuContainer>
    </StyledNav>
  );
};
