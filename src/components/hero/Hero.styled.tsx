import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledHero = styled.div<BoxProps>`

`;

StyledHero.defaultProps = { theme: defaultTheme };
