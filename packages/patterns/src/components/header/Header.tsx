import React, { FunctionComponent, ReactNode } from "react";
import { Flex, FlexItem, H1, H2, Text } from "@bigcommerce/big-design";
import { ArrowBackIcon } from "@bigcommerce/big-design-icons";
import { StyledBackButton } from "./Header.styled";

/**
 * Props for the BackButton component.
 * @typedef {Object} BackButtonProps
 * @property {ReactNode} [children] - Optional children elements.
 * @property {string} [backButtonLabel] - Label for the back button.
 * @property {Function} [onBackButtonClick] - Callback triggered on back button click.
 */
export interface BackButtonProps {
  children?: ReactNode;
  backButtonLabel?: string;
  onBackButtonClick?(): void;
}

/**
 * BackButton component, used for navigating back.
 * @param {BackButtonProps} props - Props for the BackButton component.
 */
export const BackButton: FunctionComponent<BackButtonProps> = ({
  onBackButtonClick,
  backButtonLabel = "Back",
}) => {
  return (
    <StyledBackButton onClick={onBackButtonClick} tabIndex={0}>
      <ArrowBackIcon />
      {backButtonLabel}
    </StyledBackButton>
  );
};

export interface HeaderProps {
  headerTitle?: string;
  headerBackButtonLabel?: string;
  onHeaderBackButtonClick?(): void;
  headerCTAs?: ReactNode;
  children?: ReactNode;
  isMain?: boolean;
}

/**
 * Main Header component.
 * @param {HeaderProps} props - Props for the Header component.
 */
export const Header: FunctionComponent<HeaderProps> = ({
  headerTitle,
  onHeaderBackButtonClick,
  headerBackButtonLabel,
  headerCTAs,
  children,
  isMain = true,
}) => {
  return (
    <Flex flexDirection="column">
      {onHeaderBackButtonClick && (
        <FlexItem>
          <BackButton
            backButtonLabel={headerBackButtonLabel}
            onBackButtonClick={onHeaderBackButtonClick}
          />
        </FlexItem>
      )}
      <FlexItem>
        <Flex
          flexDirection={{ mobile: "column", tablet: "row" }}
          justifyContent="space-between"
          alignItems="stretch"
        >
          <FlexItem>
            {isMain ? (
              <H1 marginBottom={"medium"}>{headerTitle}</H1>
            ) : (
              <H2 marginBottom={"medium"}>{headerTitle}</H2>
            )}
            {children && (
              <FlexItem marginBottom={"xLarge"} color="secondary60">
                {children}
              </FlexItem>
            )}
          </FlexItem>

          {headerCTAs && (
            <FlexItem marginBottom="xLarge">
              <Flex flexDirection={{ mobile: "column", tablet: "row" }}>
                {headerCTAs}
              </Flex>
            </FlexItem>
          )}
        </Flex>
      </FlexItem>
    </Flex>
  );
};
