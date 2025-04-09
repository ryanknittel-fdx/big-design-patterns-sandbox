import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Button,
  Grid,
  Text,
  Flex,
  FlexItem,
  H4,
} from "@bigcommerce/big-design";
import { GridProps, GridItemProps, ButtonProps } from "@bigcommerce/big-design";
import { ChevronRightIcon } from "@bigcommerce/big-design-icons";
import { StyledCardGridItem, StyledCardGrid } from "./styled";
import React from "react";
import { HeadingTag } from "@bigcommerce/big-design/dist/components/Typography/types";

/**
 * Interface for button props used within the CardGridItem component.
 * Extends BigDesign's ButtonProps.
 */
export interface CardGridButtonProps extends ButtonProps {
  /** Text to be displayed inside the button */
  text: string;
}

/**
 * Interface for props used in the CardGridItem component.
 * Extends BigDesign's GridItemProps.
 */
export interface CardGridItemProps extends GridItemProps {
  /** Optional button configuration */
  button?: CardGridButtonProps;
  /** Heading content, can be a string or React node */
  heading?: React.ReactNode;
  /** Heading tag, defaults to 'h4' */
  headingTag?: HeadingTag;
  /** Description text */
  description?: string;
  /** Format of the item, either 'action' or 'content' */
  format?: "action" | "content";
  /** Optional hyperlink URL */
  href?: string;
  /** Target attribute for the hyperlink */
  hrefTarget?: string;
  /** Click handler for the item */
  onClick?: () => void;
  /** Optional icon to be displayed */
  icon?: React.ReactNode;
  /** Shadow to be applied */
  shadow?: "raised";
}

/**
 * CardGridItem component renders an individual item within a grid.
 * It can be formatted as either an "action" or "content" item with optional loading states.
 *
 * @param {CardGridItemProps} props - The props for the CardGridItem component.
 * @returns {JSX.Element} The rendered CardGridItem component.
 */
export const CardGridItem = ({
  button,
  heading,
  headingTag = "h4",
  description,
  format = "content",
  href,
  hrefTarget = "_self",
  onClick,
  icon,
  shadow,
  ...gridItemProps
}: CardGridItemProps): JSX.Element => {
  let contents: React.ReactNode = null;

  const buttonProps = button
    ? {
        variant: "secondary",
        ...button,
      }
    : {};

  const isLoading = !heading && !description && !button && !icon;

  const theIcon = isLoading ? (
    <Skeleton width={20} height={20} />
  ) : (
    icon && (
      <FlexItem
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </FlexItem>
    )
  );

  const theHeading = isLoading ? (
    <FlexItem flexGrow={1}>
      <Skeleton width={150} />
    </FlexItem>
  ) : (
    heading && (
      <FlexItem
        flexGrow={1}
        style={{ minWidth: 0, overflow: "hidden" }}
        className="heading-container"
      >
        <H4 marginBottom="none" as={headingTag}>
          {heading}
        </H4>
      </FlexItem>
    )
  );

  const theButton = isLoading ? (
    <Skeleton height={36} width={100} />
  ) : (
    button && (
      <FlexItem>
        <Button {...buttonProps}>{button.text}</Button>
      </FlexItem>
    )
  );

  const theDescription = isLoading ? (
    <Text marginTop="medium">
      <Skeleton count={2} />
    </Text>
  ) : (
    description && (
      <Text
        marginTop="medium"
        style={{ overflowWrap: "break-word", wordWrap: "break-word" }}
      >
        {description}
      </Text>
    )
  );

  const theChevron = isLoading ? (
    <Skeleton width={16} height={16} />
  ) : (
    // Only show chevron if there's a link (href) and no button
    (href || onClick) &&
    !button && (
      <FlexItem
        flexShrink={0}
        style={{ display: "flex", alignItems: "center" }}
      >
        <ChevronRightIcon color="secondary70" size="medium" />
      </FlexItem>
    )
  );

  if (format === "action") {
    contents = (
      <>
        <Flex
          flexGap="8px"
          flexDirection="row"
          className="flex-row-mobile"
          alignItems="center"
          justifyContent="flex-start"
          style={{
            width: "100%",
            alignSelf: "stretch",
            display: "inline-flex",
          }}
        >
          {icon && (
            <div
              className="icon-container"
              style={{
                maxHeight: "45px",
                maxWidth: "45px",
              }}
            >
              {theIcon}
            </div>
          )}
          {theHeading}
          {theButton}
          {theChevron}
        </Flex>
        {theDescription}
      </>
    );
  } else {
    const itemContent = (
      <>
        <Flex
          flexGap="16px"
          flexDirection="row"
          className="flex-row-mobile"
          alignItems="center"
          style={{ width: "100%" }}
        >
          {theHeading}
          {theChevron}
        </Flex>
        {theDescription}
      </>
    );

    contents = href ? (
      <a
        className="card-grid__item-link"
        target={hrefTarget}
        href={href}
        onClick={onClick}
      >
        {itemContent}
      </a>
    ) : onClick ? (
      <div className="card-grid__item--link" onClick={onClick}>
        {itemContent}
      </div>
    ) : (
      itemContent
    );
  }

  // Only apply the card-grid__item--link class if there's an href and no button
  const linkClass = (href || onClick) && !button ? "--link" : "";

  return (
    <StyledCardGridItem
      className={`card-grid__item${linkClass} card-grid-item-mobile`}
      border={gridItemProps.border || "box"}
      borderRadius={gridItemProps.borderRadius || "normal"}
      padding={gridItemProps.padding || "medium"}
      shadow={shadow}
      {...gridItemProps}
    >
      {contents}
    </StyledCardGridItem>
  );
};

/**
 * Interface for props used in the CardGrid component.
 * Extends BigDesign's GridProps.
 */
export interface CardGridProps extends GridProps {
  /** Array of items to be rendered within the grid */
  items?: CardGridItemProps[];
  /** Format of all grid items, either 'content' or 'action' */
  format?: "content" | "action";
  /** Shadow to be applied. When "raised", items will be displayed in a grid with gaps. When not set, items will be stacked. */
  shadow?: "raised";
}

/**
 * CardGrid component renders a grid of items, each formatted as either 'action' or 'content'.
 * It also manages default grid settings for columns and gaps.
 *
 * @param {CardGridProps} props - The props for the CardGrid component.
 * @returns {JSX.Element} The rendered CardGrid component.
 */
export const CardGrid = ({
  items = [{}, {}],
  format = "content",
  shadow,
  ...gridProps
}: CardGridProps): JSX.Element => {
  const gridColumns = gridProps.gridColumns || {
    mobile: "repeat(1, 1fr)",
    tablet: "repeat(2, 1fr)",
    desktop: "repeat(3, 1fr)",
    wide: "repeat(4, 1fr)",
  };

  // Set gap for all cards when in grid view
  const gridGap = gridProps.gridGap || {
    mobile: shadow === "raised" ? "16px" : "0",
    tablet: "16px",
    desktop: "16px",
    wide: "16px",
  };

  gridProps = {
    ...gridProps,
    gridColumns,
    gridGap,
  };

  return (
    items && (
      <StyledCardGrid
        shadow={shadow}
        className={`${shadow === "raised" ? "raised-cards" : "flat-cards"}`}
      >
        <Grid className="bd-grid" {...gridProps}>
          {items.map((item, i) => {
            return (
              <CardGridItem key={i} shadow={shadow} format={format} {...item} />
            );
          })}
        </Grid>
      </StyledCardGrid>
    )
  );
};

/**
 * Interface for props used in the AsideCardGrid component.
 * Extends CardGridProps.
 */
export interface AsideCardGridProps extends CardGridProps {}

/**
 * AsideCardGrid component specifically designed for use within aside containers.
 * It uses a single column layout with appropriate styling.
 *
 * @param {AsideCardGridProps} props - The props for the AsideCardGrid component.
 * @returns {JSX.Element} The rendered AsideCardGrid component.
 */
export const AsideCardGrid = ({
  items = [{}, {}],
  format = "content",
  shadow,
  ...gridProps
}: AsideCardGridProps): JSX.Element => {
  // Always use single column for aside layouts
  const gridColumns = gridProps.gridColumns || {
    mobile: "repeat(1, 1fr)",
    tablet: "repeat(1, 1fr)",
    desktop: "repeat(1, 1fr)",
    wide: "repeat(1, 1fr)",
  };

  // Set gap for aside cards
  const gridGap = gridProps.gridGap || {
    mobile: shadow === "raised" ? "16px" : "0",
    tablet: shadow === "raised" ? "16px" : "0",
    desktop: shadow === "raised" ? "16px" : "0",
    wide: shadow === "raised" ? "16px" : "0",
  };

  gridProps = {
    ...gridProps,
    gridColumns,
    gridGap,
  };

  return (
    items && (
      <StyledCardGrid
        shadow={shadow}
        className={`${
          shadow === "raised" ? "raised-cards" : "flat-cards"
        } in-aside`}
      >
        <Grid className="bd-grid" {...gridProps}>
          {items.map((item, i) => {
            return (
              <CardGridItem key={i} shadow={shadow} format={format} {...item} />
            );
          })}
        </Grid>
      </StyledCardGrid>
    )
  );
};
