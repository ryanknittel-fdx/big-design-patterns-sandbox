"use client";

import { ChevronLeftIcon } from "@bigcommerce/big-design-icons";
import React, { useContext } from "react";
import styled from "styled-components";

import { SidebarContext } from "./sidebar-context";

const ToggleButton = styled.button`
  position: absolute;
  right: -0.875rem;
  bottom: 25%;
  display: none;
  border-radius: 9999px;
  border: 1px solid #d9dce9;
  background-color: white;
  padding: 0;

  @media (min-width: 768px) {
    display: inline-flex;
  }

  &:hover {
    background-color: #f4f5fa;
  }
`;

const StyledIcon = styled(ChevronLeftIcon)<{ isCollapsed: boolean }>`
  width: 24px;
  height: 24px;
  transition: transform 150ms;
  transition-delay: 150ms;
  cursor: pointer;
  transform: ${(props) => (props.isCollapsed ? "rotate(180deg)" : "rotate(0)")};
`;

export const SidebarToggle = () => {
  const { isCollapsed, toggleIsCollapsed } = useContext(SidebarContext);

  return (
    <ToggleButton onClick={toggleIsCollapsed}>
      <StyledIcon color="secondary60" isCollapsed={isCollapsed} />
    </ToggleButton>
  );
};
