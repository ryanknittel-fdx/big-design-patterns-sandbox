import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Box } from "@bigcommerce/big-design";

export const StyledCardGridItem = styled(Box)`
  /* Ensure content doesn't overflow the card */
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;

  /* Handle any potential overflow content */
  & img,
  & video,
  & iframe {
    max-width: 100%;
    height: auto;
  }

  &.card-grid__item--link {
    background-color: ${({ theme }) => theme.colors.transparent};
    cursor: pointer;

    & > a {
      display: inline-grid;
      text-decoration: none;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.secondary10};
      color: ${({ theme }) => theme.colors.primary};
    }

    &:focus {
      outline: 4px solid ${({ theme }) => theme.colors.primary20};
    }
  }
`;

// New styled component for wrapping the CardGrid
export const StyledCardGrid = styled(Box)`
  /* Ensure the grid doesn't exceed the window width */
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;

  /* Ensure Grid children don't overflow */
  & > .bd-grid {
    max-width: 100%;
    width: 100%;
  }

  /* Icon and heading alignment */
  & .flex-row-mobile {
    align-items: center;

    /* Icon container specific styling */
    & .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    /* Ensure heading text is vertically centered with icon */
    & .heading-container {
      display: flex;
      align-items: center;
      min-height: 45px; /* Match the typical icon height */
    }
  }

  /* Desktop and larger adjustments */
  @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
    & .card-grid-item-mobile {
      /* Ensure consistent card heights in multi-column layout */
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    /* Add horizontal padding on small screens to prevent content touching edges */
    padding: 0;

    & .card-grid-item-mobile {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.secondary30};
      border-radius: 0;
      margin-bottom: 0;
      padding: ${({ theme }) => theme.spacing.medium};
      max-width: 100vw;
      box-sizing: border-box;

      /* Handle long text properly */
      & > * {
        max-width: 100%;
      }

      &:first-child {
        border-top: 1px solid ${({ theme }) => theme.colors.secondary30};
      }

      &:last-child {
        /* Keep the bottom border on the last card */
        border-bottom: 1px solid ${({ theme }) => theme.colors.secondary30};
      }
    }

    /* Adjust spacing for icon and heading */
    & .flex-row-mobile {
      flex-wrap: wrap; /* Allow wrapping on very small screens */
    }
  }
`;

StyledCardGridItem.defaultProps = { theme: defaultTheme };
StyledCardGrid.defaultProps = { theme: defaultTheme };
