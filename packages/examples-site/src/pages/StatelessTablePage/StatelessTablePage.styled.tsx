import styled from "styled-components";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";

export const StyledStatelessTablePage = styled.div`
  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }

  .table-toolbar button,
  .pagination button {
    padding-inline: ${({ theme }) => theme.spacing.xxSmall};
  }

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    .table-toolbar button {
      padding-inline: ${({ theme }) => theme.spacing.small};
    }
    .pagination button {
      padding-inline: ${({ theme }) => theme.spacing.xxSmall};
    }
  }
`;

StyledStatelessTablePage.defaultProps = { theme: defaultTheme };
