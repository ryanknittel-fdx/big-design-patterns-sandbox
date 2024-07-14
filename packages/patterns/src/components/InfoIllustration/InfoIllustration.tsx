import {
  ButtonProps,
  H1,
  Button,
  Flex,
  FlexItem,
  Box,
} from "@bigcommerce/big-design";
import React, { FunctionComponent, ReactNode } from "react";
import { StyledInfoIllustration } from "./InfoIllustration.styled";
import { theme } from "@bigcommerce/big-design-theme";

/**
 * Properties for actions within the InfoIllustration component, omitting children from ButtonProps.
 * @typedef {Object} InfoImageAction
 * @property {string} [text] - Text to display on the button.
 */
export interface InfoImageAction extends Omit<ButtonProps, "children"> {
  text?: string;
}

/**
 * Props for the InfoIllustration component.
 * @typedef {Object} InfoImageProps
 * @property {ReactNode} [children] - Child components to be rendered within the illustration.
 * @property {"info1" | "info2" | "info3" | "info4" | "success" | "warning" | "error"} [variant="info1"] - Variant of the illustration for different states or types.
 * @property {"up" | "down" | "square" | "cross"} [pattern] - Background pattern type, which changes based on the variant.
 * @property {"info" | "warning" | "success" | "empty" | "template" | "brands" | "server" | "permission" | "page" | "pickup" | "list" | "options" | "categories" | "products" | "orders" | "analytics" | "promotions"} [icon="info"] - Icon type displayed within the illustration.
 * @property {string} [heading] - Optional heading text.
 * @property {InfoImageAction} [actionPrimary] - Primary action configuration.
 * @property {InfoImageAction} [actionSecondary] - Secondary action configuration.
 */
export interface InfoImageProps {
  children?: ReactNode;
  variant?:
    | "info1"
    | "info2"
    | "info3"
    | "info4"
    | "success"
    | "warning"
    | "error";
  pattern?: "up" | "down" | "square" | "cross";
  icon?:
    | "info"
    | "warning"
    | "success"
    | "empty"
    | "template"
    | "brands"
    | "server"
    | "permission"
    | "page"
    | "pickup"
    | "list"
    | "options"
    | "categories"
    | "products"
    | "orders"
    | "analytics"
    | "promotions";
  heading?: string;
  actionPrimary?: InfoImageAction;
  actionSecondary?: InfoImageAction;
}

/**
 * A component that displays an informational illustration with optional actions.
 * This component can be used to provide contextual information with visual cues and associated actions to users.
 * It supports multiple visual variants and actions to suit different contexts.
 *
 * @param {InfoImageProps} props - Properties passed to the component
 * @returns {JSX.Element} A styled informational illustration component.
 */
export const InfoIllustration: FunctionComponent<InfoImageProps> = ({
  children,
  variant = "info1",
  pattern,
  icon = "info",
  heading,
  actionPrimary,
  actionSecondary,
}) => {
  // Determines the class for the background pattern. Defaults to 'up' unless overridden by specific conditions.
  const patternClass = variant === "error" ? "cross" : pattern || "up";

  return (
    <StyledInfoIllustration>
      <Flex
        flexDirection="column"
        alignItems="center"
        flexGap={theme.spacing.large}
      >
        <FlexItem className={`ini__bg ${variant}`} aria-hidden="true">
          <div className={`ini__pattern ${patternClass}`}>
            <div className={`ini__icon ${icon}`}></div>
          </div>
        </FlexItem>
        {heading && <H1 margin="none">{heading}</H1>}
        {children && <FlexItem>{children}</FlexItem>}
        {(actionPrimary || actionSecondary) && (
          <Flex justifyContent="center">
            {actionSecondary && (
              <Button variant="secondary" {...actionSecondary}>{actionSecondary.text}</Button>
            )}
            {actionPrimary && (
              <Button variant="primary"{...actionPrimary}>{actionPrimary.text}</Button>
            )}
          </Flex>
        )}
      </Flex>
    </StyledInfoIllustration>
  );
};
