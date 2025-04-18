import React, { memo } from "react";
import styled from "styled-components";

import type { MenuItem } from "./menu-items.types";
import { useRouter } from "./hooks/router-context";

type SidebarNavLinkProps = {
  className?: string;
  isCollapsed?: boolean;
} & Omit<MenuItem, "items">;

const StyledLink = styled.a<{ isActive?: boolean; hasDivider?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  overflow: hidden;
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: #313440;
  text-decoration: none;

  ${(props) =>
    props.hasDivider &&
    `
  margin-top: 1rem;
  position: relative;
  overflow:visible;

  &::before {
    content: "";
    display: block;
    width: calc(100% - 1rem);
    height: 1px;
    background-color: #d9dce9;
    position: absolute;
    top: 0;
    margin-top: -0.5rem;
  }
  `}

  ${(props) =>
    !props.isActive &&
    `
  &:hover {
    background-color: #F0F3FF;
  }`}

  ${(props) =>
    props.isActive &&
    `
    background-color: #DBE3FE;
    font-weight: 600;
    color:rgb(0, 36, 166);
  `}
`;

const LinkText = styled.span<{ isCollapsed?: boolean }>`
  display: ${(props) => (props.isCollapsed ? "none" : "inline-block")};
  opacity: ${(props) => (props.isCollapsed ? 0 : 1)};
  font-size: 1rem;
  flex-shrink: 1;

  @media (min-width: 768px) {
    transition: opacity, display;
    transition-behavior: allow-discrete;
  }
`;

const IconPlaceholder = styled.div`
  width: 24px;
  height: 24px;

  flex-shrink: 0;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const SidebarNavLink = memo(
  ({ className, isCollapsed, ...props }: SidebarNavLinkProps) => {
    const { Link } = useRouter();
    const Icon = props.icon;

    if (props.href) {
      return (
        <StyledLink
          as={props.target ? "a" : Link}
          href={props.href}
          isActive={props.isActive}
          className={className}
          target={props.target}
          hasDivider={props.hasDivider}
        >
          {Icon ? (
            <IconWrapper>
              <Icon />
            </IconWrapper>
          ) : (
            <IconPlaceholder />
          )}

          <LinkText isCollapsed={isCollapsed}>{props.label}</LinkText>
        </StyledLink>
      );
    }
    return <div>{props.label}</div>;
  }
);

SidebarNavLink.displayName = "SidebarNavLink";
