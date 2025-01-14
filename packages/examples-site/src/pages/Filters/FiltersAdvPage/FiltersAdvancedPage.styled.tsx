import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

import { GridItem, Link } from "@bigcommerce/big-design";

export const StyledGridItem = styled(GridItem)`
  align-content: center;
`;

export const StyledFiltersLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex-gap: 0.25rem;
`;