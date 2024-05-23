import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledContextSelector = styled.div<BoxProps>`
  background-color: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  display: block;

  border: ${({ theme }) => theme.border.box};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: ${({ theme }) => theme.spacing.xSmall};
`;

StyledContextSelector.defaultProps = { theme: defaultTheme };
