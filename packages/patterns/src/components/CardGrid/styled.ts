import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Box } from "@bigcommerce/big-design";

interface StyledCardGridProps {
  shadow?: "raised";
  visualAppearance?: "raised";
}

export const StyledCardGridItem = styled(Box)`
  max-width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  background-color: ${({ theme }) => theme.colors.white};

  /* Handle any potential overflow content */
  & img,
  & video,
  & iframe {
    max-width: 100%;
    height: auto;
  }

  &.card-grid__item--link {
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

export const StyledCardGrid = styled(Box).attrs<StyledCardGridProps>(
  ({ shadow, ...props }) => ({
    visualAppearance: shadow,
    ...props,
    shadow: undefined,
  })
)<StyledCardGridProps>`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  margin-inline: -16px;
  width: calc(100% + 32px);
  max-width: calc(100% + 32px);

  @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
    margin-inline: 0;
    width: 100%;
    max-width: 100%;
  }

  /* Ensure Grid children don't overflow */
  & > .bd-grid {
    max-width: 100%;
    width: 100%;
  }

  /* Icon and heading alignment */
  & .flex-row-mobile {
    align-items: center;

    & .icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    & .heading-container {
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
    & .card-grid-item-mobile {
      height: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  @media (max-width: 719px) {
    & .card-grid-item-mobile {
      border: none; /* Reset all borders first */
      border-bottom: ${({ visualAppearance, theme }) =>
        visualAppearance === "raised"
          ? "none"
          : `1px solid ${theme.colors.secondary30}`};
      border-radius: 0;
      margin-bottom: 0;
      padding: ${({ theme }) => theme.spacing.medium};
      max-width: 100vw;
      box-sizing: border-box;

      /* Handle long text properly */
      & > * {
        max-width: 100%;
      }
    }

    & .bd-grid > .card-grid-item-mobile:first-child {
      border-top: ${({ visualAppearance, theme }) =>
        visualAppearance === "raised"
          ? "none"
          : `1px solid ${theme.colors.secondary30}`};
    }

    & .bd-grid > .card-grid-item-mobile:last-child {
      border-bottom: ${({ visualAppearance, theme }) =>
        visualAppearance === "raised"
          ? "none"
          : `1px solid ${theme.colors.secondary30}`};
    }

    /* Adjust spacing for icon and heading */
    & .flex-row-mobile {
      flex-wrap: wrap;
    }
  }
`;

StyledCardGridItem.defaultProps = { theme: defaultTheme };
StyledCardGrid.defaultProps = { theme: defaultTheme };
