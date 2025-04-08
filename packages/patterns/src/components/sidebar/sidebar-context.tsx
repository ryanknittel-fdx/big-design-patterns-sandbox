"use client";

import React, { createContext, ReactNode, useEffect } from "react";

import { useBoolean } from "./hooks/use-toggle";
import { useWindowSize } from "./hooks/use-window-size";

type SidebarContextType = {
  isCollapsed: boolean;
  toggleIsCollapsed: () => void;
  openSidebar: () => void;
  closeSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextType>({
  isCollapsed: false,
  toggleIsCollapsed: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

type SidebarProviderProps = {
  children: ReactNode | ReactNode[];
};

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const { isTablet, isMobile } = useWindowSize();
  const [isCollapsed, { toggle, on, off }] = useBoolean(false);

  // This is to make sure that the sidebar is collapsed when going from desktop to mobile
  useEffect(() => {
    if (!isCollapsed && (isTablet || isMobile)) {
      toggle(true);
    }
  }, [isTablet, isMobile]);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed,
        toggleIsCollapsed: () => toggle(!isCollapsed),
        openSidebar: off, // Off because we set isCollapsed to false
        closeSidebar: on, // On because we set isCollapsed to true
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
