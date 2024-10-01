import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { Link } from "@bigcommerce/big-design";

export const StyledBackLink = styled(Link)`
    color: ${({ theme }) => theme.colors.secondary70};

    &:hover,
    &:hover:not(:active) {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

StyledBackLink.defaultProps = { theme: defaultTheme };