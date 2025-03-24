import { Box } from "@bigcommerce/big-design";
import styled from "styled-components";

const ASIDE_WIDTH = "320px";

export const StyledPageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative; /* For absolutely positioned pseudo-element */

  /* Create a pseudo-element left aside border that extends from the aside to the bottom of the page */
  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    min-height: 100vh;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(100% - ${ASIDE_WIDTH});
      width: 1px;
      background-color: ${({ theme }) => theme.colors.secondary30};
      z-index: 0;
    }
  }
`;

export const StyledContentContainer = styled(Box)`
  display: grid;
  flex: 1;
  width: 100%;

  grid-template-columns: 1fr;
  grid-template-areas:
    "main"
    "aside";

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    grid-template-columns: 1fr ${ASIDE_WIDTH};
    grid-template-areas: "main aside";
  }
`;

export const StyledPageContent = styled(Box)`
  grid-area: main;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: auto;
  z-index: 1;

  /* Override any Page component styles that might cause 100vh height so we can show the aside on mobile */
  > * {
    flex: 0 0 auto;
    min-height: 0;
    height: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    min-height: 0;
  }
`;

export const StyledAside = styled(Box)`
  grid-area: aside;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;
