import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledScroller = styled.div<BoxProps>`
    overflow: auto;
    width: 100%;
    height: 100%;
`;

StyledScroller.defaultProps = { theme: defaultTheme };
