import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Box } from "@bigcommerce/big-design";

export const StyledCardGridItem = styled(Box)`
  &.card-grid__item--link{
    background-color: ${({ theme }) => theme.colors.transparent};
    cursor: pointer;

    & > a {
      display: inline-grid;
      text-decoration: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary10};
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
      outline: 4px solid ${({ theme }) => theme.colors.primary20};
    }
  }
`;

StyledCardGridItem.defaultProps = { theme: defaultTheme };