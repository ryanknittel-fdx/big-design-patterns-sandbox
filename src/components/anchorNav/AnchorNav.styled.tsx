import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";
import {
  anchorNavWidth,
  tabAnchorBorder,
} from "../../big-design-theme-extras/StyleDefinitions";

const anchorBorderIdleArray = tabAnchorBorder.split(" ");
anchorBorderIdleArray.pop();
anchorBorderIdleArray.push("transparent");
const anchorBorderIdle = anchorBorderIdleArray.join(" ");

export const StyledAnchorNav = styled.div<BoxProps>`
display: block;
position relative;

.anchor-nav {
    &__list {
        position: sticky;
        inset-block-start: 0;
        width: ${anchorNavWidth};
        float: inline-start;

        & > ul {
            list-style-type: none;
            padding: 0;
            margin: 0;

            & > li {
                display:block;
                margin: 0;
                padding: 0;
                box-sizing: border-box;

                & > a {
                    color: ${defaultTheme.colors.primary};
                    text-decoration: none;
                    display: block;
                    padding: ${defaultTheme.spacing.small} ${defaultTheme.spacing.large};
                    border-inline-start: ${anchorBorderIdle};

                    &:hover {
                        background-color: ${defaultTheme.colors.primary10};
                    }

                    &.active {
                        color: ${defaultTheme.colors.secondary70};
                        border-inline-start: ${tabAnchorBorder};

                        &:hover {
                            background-color: transparent;
                        }
                    }
                }
            }
        }
    
    }

    &__element {
        padding-inline-start: calc( ${anchorNavWidth} + ${defaultTheme.spacing.xLarge} );
    }
}
`;

StyledAnchorNav.defaultProps = { theme: defaultTheme };
