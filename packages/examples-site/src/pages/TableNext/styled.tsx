import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

export const StyledPanelContents = styled.div<BoxProps>`
    display: block;
    box-sizing: border-box;
    margin-inline: -${({ theme }) => theme.spacing.medium};

    @media (min-width: ${({ theme }) => theme.breakpointValues.tablet}) {
        margin-inline: -${({ theme }) => theme.spacing.xLarge};
    }
`;

StyledPanelContents.defaultProps = { theme: defaultTheme };