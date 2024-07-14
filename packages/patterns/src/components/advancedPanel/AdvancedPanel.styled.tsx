import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledAdvancedPanelContents = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    padding: ${({ theme }) => theme.spacing.xxLarge};
  }
`;

// Provides default theme props to ensure consistent styling if not provided externally
StyledAdvancedPanelContents.defaultProps = { theme: defaultTheme };
