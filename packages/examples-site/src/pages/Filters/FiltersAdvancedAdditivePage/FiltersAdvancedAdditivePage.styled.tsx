import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

import { Link } from "@bigcommerce/big-design";

export const StyledModalContents = styled.div<BoxProps>`
  margin-inline: -${({ theme }) => theme.spacing.medium};
  border-top: ${({ theme }) => theme.border.box};
  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    margin-inline: -${({ theme }) => theme.spacing.xLarge};
  }
`;

StyledModalContents.defaultProps = { theme: defaultTheme };

export const StyledFiltersLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-gap: 0.25rem;
`;

StyledFiltersLink.defaultProps = { theme: defaultTheme };