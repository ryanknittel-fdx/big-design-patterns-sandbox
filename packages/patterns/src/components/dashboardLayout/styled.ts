import { Box } from "@bigcommerce/big-design";
import styled from "styled-components";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";

const ASIDE_WIDTH = "250px";
const ASIDE_WIDTH_DESKTOP = "300px";

export const StyledPageWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  position: relative; /* For absolutely positioned pseudo-element */
  background-color: ${({ theme }) => theme.colors.secondary10};
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

  @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
    min-height: 100vh;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: calc(100% - ${ASIDE_WIDTH_DESKTOP});
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

  @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
    grid-template-columns: 1fr ${ASIDE_WIDTH_DESKTOP};
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
  max-width: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;

  /* Ensure any child components respect the width of the aside */
  & > * {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  & .bd-grid {
    /* Ensures proper display of stacked in the aside */
    display: flex;
    flex-direction: column;
  }

  & .in-aside.flat-cards .card-grid-item-mobile {
    border: none; /* Reset all borders first */
    border-bottom: ${({ theme }) => `1px solid ${theme.colors.secondary30}`};
    border-radius: 0;
    margin-bottom: 0;
    padding: ${(props) => props.theme?.spacing?.medium};
    max-width: 100vw;
    box-sizing: border-box;
  }

  & .flat-cards .bd-grid > .card-grid-item-mobile:first-child {
    border-top: ${({ theme }) => `1px solid ${theme.colors.secondary30}`};
  }

  @media (max-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    padding: ${(props) => props.theme?.spacing?.medium};
  }
`;

StyledPageWrapper.defaultProps = { theme: defaultTheme };
StyledContentContainer.defaultProps = { theme: defaultTheme };
StyledPageContent.defaultProps = { theme: defaultTheme };
StyledAside.defaultProps = { theme: defaultTheme };
