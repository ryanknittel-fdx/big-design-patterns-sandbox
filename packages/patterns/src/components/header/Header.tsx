import { FunctionComponent, ReactNode } from "react";
import {
  Flex,
  FlexItem,
  H1,
  H2,
  BadgeProps,
  Badge,
} from "@bigcommerce/big-design";
import { ArrowBackIcon } from "@bigcommerce/big-design-icons";
import { StyledBackButton } from "./Header.styled";

/**
 * Props for the BackButton component.
 */
export interface BackButtonProps {
  /** Content to display inside the back button. */
  children?: ReactNode;
  /** Label for the back button. Defaults to "Back". */
  backButtonLabel?: string;
  /** Callback function to handle back button click events. */
  onBackButtonClick?(): void;
}

/**
 * BackButton component displays a button with an arrow icon and a label.
 * 
 * @param {BackButtonProps} props - The props for the BackButton component.
 * @returns {JSX.Element} The rendered BackButton component.
 */
const BackButton: FunctionComponent<BackButtonProps> = ({
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

/**
 * Props for the Header component.
 */
export interface HeaderProps {
  /** Title to be displayed in the header. */
  headerTitle?: string;
  /** Label for the back button in the header. */
  headerBackButtonLabel?: string;
  /** Callback function to handle back button click events in the header. */
  onHeaderBackButtonClick?(): void;
  /** Call-to-action elements to be displayed in the header. */
  headerCTAs?: ReactNode;
  /** Additional content to be displayed below the header title. */
  children?: ReactNode;
  /** Defines if the header is the main header (H1) or a subheader (H2). */
  isMain?: boolean;
  /** Badge component props to be displayed next to the title. */
  headerBadge?: BadgeProps;
  /** Icon to be displayed next to the header title. */
  headerIcon?: ReactNode;
}

/**
 * Header component displays a title, optional back button, badge, and additional content.
 * 
 * @param {HeaderProps} props - The props for the Header component.
 * @returns {JSX.Element} The rendered Header component.
 */
export const Header: FunctionComponent<HeaderProps> = ({
  headerTitle,
  onHeaderBackButtonClick,
  headerBackButtonLabel,
  headerCTAs,
  children,
  isMain = true,
  headerBadge,
  headerIcon,
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
            <Flex marginBottom="medium" alignItems="center" flexGap="1rem">
              {headerIcon && headerIcon}
              {isMain ? (
                <H1 margin="none">{headerTitle}</H1>
              ) : (
                <H2 margin="none">{headerTitle}</H2>
              )}
              {headerBadge && <Badge {...headerBadge} />}
            </Flex>
            {children && (
              <FlexItem marginBottom="xLarge" color="secondary60">
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