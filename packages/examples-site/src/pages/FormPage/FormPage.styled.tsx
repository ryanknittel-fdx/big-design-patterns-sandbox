import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledFormContents = styled.div<BoxProps>`
  .form__group {
    width: 100%;
  }
`;

StyledFormContents.defaultProps = { theme: defaultTheme };
