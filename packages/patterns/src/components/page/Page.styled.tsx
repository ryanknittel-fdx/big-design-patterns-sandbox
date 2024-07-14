import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";
import { pageMaxWidth } from "../../big-design-theme-extras/StyleDefinitions";

export const StyledPage = styled.div<BoxProps>`
  /* We use the global font definitions */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
  /* the background color for pages */
  background-color: ${({ theme }) => theme.colors.secondary10};
  /* the text color for pages */
  color: ${({ theme }) => theme.colors.secondary70};
  width: 100%;
  height: 100%;
  /* we make sure the page has a min height of the 100% of the viewport to avoid the background color to be split if the contents do not span the full height of the viewport */
  min-height: 100vh;

  /* The style definition for the main contents of the page */
  & > main {
    box-sizing: border-box;
    display: block;
    /* the contents of pages do not span the full width of the viewport */
    max-width: ${pageMaxWidth};
    /* the contents of pages are centered horizontally */
    margin-inline: auto;
    margin-block: ${({ theme }) => theme.spacing.none};
    /* the contents of pages have a padding, we set the mobile value as default and then enlarge with media queries */
    padding: ${({ theme }) => theme.spacing.xLarge};

    /* the contents of pages have a bigger padding value when on tablet and beyond */
    @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
      padding: ${({ theme }) => theme.spacing.xxLarge};
    }
  }

  /* when creating a page for a featured hero content, we set the page background color to transparent, as it ill be taken care of by a svg asset that a page wrapper will provide */
  &.bg-feature {
    background-color: transparent;
  }


  /* In some instances the inputs default to Sans serif fonts, so we make sure that the adequate font family will be used */
  input {
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }
`;

StyledPage.defaultProps = { theme: defaultTheme };
