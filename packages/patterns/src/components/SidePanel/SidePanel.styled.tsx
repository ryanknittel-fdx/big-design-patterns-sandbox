import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled, { css } from "styled-components";
import { MarginProps, withMargins } from "@bigcommerce/big-design";

import { BoxProps } from "@bigcommerce/big-design";

export const StyledSidePanel = styled.aside<BoxProps>`

`;


StyledSidePanel.defaultProps = { theme: defaultTheme };
