import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledProductImage = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;
  width: 47px;
  height: 47px;
  border: ${({ theme }) => theme.border.box};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

StyledProductImage.defaultProps = { theme: defaultTheme };

export const StyledPanelContents = styled.div<BoxProps>`
  display: block;
  box-sizing: border-box;
  margin-inline: -${({ theme }) => theme.spacing.medium};
  max-width: calc(
    100% + ${({ theme }) => theme.spacing.medium}px +
      ${({ theme }) => theme.spacing.medium}px
  );
  overflow-x: auto;
  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    margin-inline: -${({ theme }) => theme.spacing.xLarge};
    max-width: calc(
      100% + ${({ theme }) => theme.spacing.xLarge}px +
        ${({ theme }) => theme.spacing.xLarge}px
    );
  }
`;

// Provides default theme props to ensure consistent styling if not provided externally
StyledPanelContents.defaultProps = { theme: defaultTheme };