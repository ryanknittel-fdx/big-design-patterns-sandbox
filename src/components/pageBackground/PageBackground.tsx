import React, { FunctionComponent, ReactNode } from "react";
import { StyledPageBackground } from "./PageBackground.styled";

interface PageBackgroundProps {
  children?: ReactNode;
}

/**
 * The Page background component is used to wrap a page component with a diversified background to enhance the visual aspect of the page.
 * It is mostly used in featured content pages with a hero element.
 */
const PageBackground: FunctionComponent<PageBackgroundProps> = ({
  children,
}) => <StyledPageBackground>{children}</StyledPageBackground>;

export default PageBackground;
