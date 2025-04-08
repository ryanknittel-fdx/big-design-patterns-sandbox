import React, { useEffect, useState } from "react";

const BREAKPOINTS = {
  MOBILE: 720,
  TABLET: 1024,
} as const;

type WindowSize = {
  width: number | null;
  height: number | null;
};

type ScreenSize = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export const useWindowSize = () => {
  const [size, setSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      const width = window.innerWidth;

      setSize({
        width,
        height: window.innerHeight,
      });

      setScreenSize({
        isMobile: width < BREAKPOINTS.MOBILE,
        isTablet: width >= BREAKPOINTS.MOBILE && width < BREAKPOINTS.TABLET,
        isDesktop: width >= BREAKPOINTS.TABLET,
      });
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { size, ...screenSize };
};
