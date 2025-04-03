"use client";

import { useContext } from "react";
import styled from "styled-components";

import { SidebarContext } from "./sidebar-context";
import { SidebarMenu } from "./sidebar-menu";
import { SidebarToggle } from "./sidebar-toggle";
import { MenuItem } from "./menu-items.types";

const DesktopAside = styled.aside`
  position: relative;
  z-index: 10;
  display: none;
  border-right: 1px solid #D9DCE9;
  padding: 0.5rem;
  background-color: white;
  
  @media (min-width: 720px) {
    display: block;
  }
`;

const MobileAside = styled.aside<{ isCollapsed: boolean }>`
  position: fixed;
  bottom: 0;
  left: 0;
  top: 57px;
  z-index: 50;
  border-right: 1px solid #D9DCE9;
  background-color: white;
  transition: transform 0.3s;
  transform: ${props => props.isCollapsed ? 'translateX(-100%)' : 'translateX(0)'};
  
  @media (min-width: 720px) {
    display: none;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  top: 57px;
  z-index: 40;
  display: block;
  background-color: rgba(0, 0, 0, 0.4);
  
  @media (min-width: 768px) {
    display: none;
  }
`;

function SidebarDesktop({ menuItems }: { menuItems: MenuItem[] }) {
  return (
    <DesktopAside>
      <SidebarMenu menuItems={menuItems} />
      <SidebarToggle />
    </DesktopAside>
  );
}

function SidebarMobile({ menuItems }: { menuItems: MenuItem[] }) {
  const { isCollapsed, closeSidebar } = useContext(SidebarContext);

  return (
    <>
      <MobileAside isCollapsed={isCollapsed}>
        <SidebarMenu menuItems={menuItems} />
      </MobileAside>
      {!isCollapsed && <Overlay onClick={closeSidebar} />}
    </>
  );
}

export default function Sidebar({ menuItems = [] }: { menuItems?: MenuItem[] }) {
  return (
    <>
      <SidebarDesktop menuItems={menuItems} />
      <SidebarMobile menuItems={menuItems} />
    </>
  );
}
