import type { MenuItem } from "./menu-items.types";
import { ExpandMoreIcon } from "@bigcommerce/big-design-icons";
import React, { ReactNode, useContext, useEffect, useMemo } from "react";
import styled from "styled-components";

import { SidebarContext } from "./sidebar-context";
import { SidebarNavLink } from "./sidebar-nav-link";
import { useRouter } from "./hooks/router-context";
import { useBoolean } from "./hooks/use-toggle";

const NavContainer = styled.div`
  overflow: hidden;
`;

const NavHeader = styled.div<{ hasActiveChild: boolean }>`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  white-space: nowrap;
  border-radius: 0.25rem;
  padding: 0.5rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgb(240, 243, 255);
    color: rgb(40, 82, 235);
  }

  ${props => props.hasActiveChild && `
    background-color: rgb(246, 247, 252);
  `}
`;

const NavButton = styled.button`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const NavLabel = styled.span<{ isCollapsed: boolean }>`
  font-size: 1rem;
  display: ${props => props.isCollapsed ? 'none' : 'inline-block'};
  opacity: ${props => props.isCollapsed ? 0 : 1};
  
  @media (min-width: 768px) {
    transition: opacity, display;
    transition-behavior: allow-discrete;
  }
`;

const ExpandButton = styled.button<{ isCollapsed: boolean }>`
  display: ${props => props.isCollapsed ? 'none' : 'block'};
  border-radius: 0.25rem;
  transition: background-color 0.3s;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    background-color: #F6F7FC;
  }
`;

const ExpandIcon = styled(ExpandMoreIcon)<{ isOpen: boolean }>`
  transition: transform 0.3s;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0)'};
`;

const SubnavContainer = styled.div<{ isOpen: boolean; isCollapsed: boolean }>`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s;
  
  & > div {
    overflow: hidden;
  }
  
  ${props => (!props.isCollapsed && props.isOpen) && `
    grid-template-rows: 1fr;
  `}
`;

const SubnavItem = styled.div`
  position: relative;
  &:hover {
    border-color: #3b82f6;
    background-color: #ECEEF5;
  }
`;

const StyledNavLink = styled(SidebarNavLink)<{ isActive: boolean }>`
  overflow: hidden;
  transition: background-color 0.3s;
  
  &::after {
    content: '';
    position: absolute;
    left: 1rem;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #D9DCE9;
    ${props => props.isActive && `background-color: rgb(60, 100, 244);`}
  }
  
  &:hover::after {
    background-color: ${props => props.isActive ? 'rgb(60, 100, 244)' : 'rgb(158, 179, 252)'};
  }
  
  ${props => props.isActive && `
    background-color: rgb(219, 227, 254);
    color: rgb(11, 56, 217);

  `}
`;

interface SidebarSubNavProps {
  items?: MenuItem[] | undefined;
  icon?: React.ElementType;
  label: string;
  hash: string;
}

export const SidebarSubNav = (props: SidebarSubNavProps) => {
  const { isCollapsed } = useContext(SidebarContext);
  const { pathname, navigate } = useRouter();

  const hasActiveChild = useMemo(
    () => props.items?.some((item) => item.href && pathname.startsWith(item.href)) ?? false,
    [pathname, props.items],
  );

  const [
    isSubnavOpened,
    { toggle: toggleSubnavState, on: openSubnav, off: closeSubnav },
  ] = useBoolean(hasActiveChild);

  useEffect(() => {
    if (!hasActiveChild) {
      closeSubnav();
    }
  }, [hasActiveChild, closeSubnav]);

  if (!props.items || props.items.length === 0) return null;

  const Icon = props.icon;

  return (
    <NavContainer>
      <NavHeader 
        hasActiveChild={hasActiveChild}
        onClick={() => {
          if (props.items?.[0]?.href) {
            navigate(props.items[0]!.href);
          }
          openSubnav();
        }}
      >
        <NavButton>
          {Icon && (
            <Icon
              className="inline-block"
              isActive={hasActiveChild || false}
            />
          )}

          <NavLabel isCollapsed={isCollapsed}>
            {props.label}
          </NavLabel>
        </NavButton>
        <ExpandButton
          isCollapsed={isCollapsed}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleSubnavState(!isSubnavOpened);
          }}
        >
          <ExpandIcon 
            color="secondary60"
            isOpen={isSubnavOpened}
          />
        </ExpandButton>
      </NavHeader>
      <SubnavContainer isOpen={isSubnavOpened} isCollapsed={isCollapsed}>
        <div>
          {props.items?.map(({ icon, ...item }) => {
            const isActive = item.href ? pathname.startsWith(item.href) : false;

            return (
              <SubnavItem key={item.hash}>
                <StyledNavLink
                  isActive={isActive}
                  isCollapsed={isCollapsed}
                  {...item}
                />
              </SubnavItem>
            );
          })}
        </div>
      </SubnavContainer>
    </NavContainer>
  );
};
