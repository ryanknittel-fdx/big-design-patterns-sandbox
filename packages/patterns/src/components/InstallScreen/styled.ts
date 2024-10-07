import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Box, GridItem, Link } from "@bigcommerce/big-design";

export const StyledBackLink = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary70};

    &:hover,
    &:hover:not(:active) {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

StyledBackLink.defaultProps = { theme: defaultTheme };

export const StyledAsideForm = styled(GridItem)`
    position: fixed;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    align-self: end;

    @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
        position: sticky;
        top: ${({ theme }) => theme.spacing.xxLarge};);
        bottom: auto;
        align-self: start;
        max-height: none;
        margin: 0;
        left: auto;
        right: auto;
    }
`;

StyledAsideForm.defaultProps = { theme: defaultTheme };

export const StyledMovingBlock = styled(GridItem)`

    order: 1;
    @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
        order: 0;
    }

`;

StyledMovingBlock.defaultProps = { theme: defaultTheme };


export const StyledScopes = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    & > li {
        margin-bottom: ${({ theme }) => theme.spacing.xxSmall};
    }
`;

StyledScopes.defaultProps = { theme: defaultTheme };

export const StyledPanelViewport = styled(Box)`
    .contents{
        overflow: auto;
    }
    
    .mobile-toggle{
        overflow: hidden;
    }
        
    &.isClosed{
        .contents{
            max-height: 0;
            transition: max-height 0.3s ease;
            overflow: hidden;

            @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
                max-height: none;
            }
        }
        .mobile-toggle{
            max-height: 5rem;
            transition: max-height 0.3s ease 0.3s;
        }
    }

    &.isOpen {
        .contents {
            max-height: 90vh;
            transition: max-height 0.3s ease 0.3s;

            @media (min-width: ${({ theme }) => theme.breakpointValues.desktop}) {
                max-height: none;
            }
        }
        .mobile-toggle{
            max-height: 0;
            transition: max-height 0.3s ease;
        }
    }
`;

StyledPanelViewport.defaultProps = { theme: defaultTheme };