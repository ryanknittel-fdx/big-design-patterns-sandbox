import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled, { css } from "styled-components";

import { PanelContentProps } from "./PanelContents";

export const StyledPanelContents = styled.div<
  Omit<PanelContentProps, "children">
>`
  ${({ theme, padded }) =>
    padded !== true &&
    css`
      margin-inline: -${theme.spacing.medium};
    `}

  ${({ theme }) => theme.breakpoints.tablet} {
    ${({ theme, padded }) =>
      padded !== true &&
      css`
        margin-inline: -${theme.spacing.xLarge};
      `}
  }
`;
StyledPanelContents.defaultProps = { theme: defaultTheme };
