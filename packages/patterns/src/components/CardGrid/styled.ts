import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Box } from "@bigcommerce/big-design";

export const StyledLinkBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.transparent};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary10};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 4px solid ${({ theme }) => theme.colors.primary20};
  }
`;

StyledLinkBox.defaultProps = { theme: defaultTheme };

export const StyledLink = styled.a`
  display: inline-grid;
  text-decoration: none;


`;

StyledLink.defaultProps = { theme: defaultTheme };
