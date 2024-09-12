import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { ButtonProps } from "@bigcommerce/big-design";

export const StyledBackButton = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: ${({ theme }) => theme.typography.fontSize.medium};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};
  margin: ${({ theme }) => theme.spacing.none};
  padding-inline-start: ${({ theme }) => theme.spacing.none};
  padding-inline-end: ${({ theme }) => theme.spacing.xxSmall};
  background-color: ${({ theme }) => theme.colors.transparent};
  color: ${({ theme }) => theme.colors.secondary50};
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    outline: 4px solid ${({ theme }) => theme.colors.primary20};
  }
`;

StyledBackButton.defaultProps = { theme: defaultTheme };
