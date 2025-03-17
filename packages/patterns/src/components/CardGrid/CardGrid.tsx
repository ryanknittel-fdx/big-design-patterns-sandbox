import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button, Grid, Text, Flex, FlexItem } from "@bigcommerce/big-design";
import { GridProps, GridItemProps, ButtonProps } from "@bigcommerce/big-design";
import { ChevronRightIcon } from "@bigcommerce/big-design-icons";
import { StyledCardGridItem, StyledCardGrid } from "./styled";

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
export const CardGridItem: React.FC<CardGridItemProps> = ({
  button,
  heading,
  description,
  format = "content",
  href,
  hrefTarget = "_self",
  onClick,
  icon,
  shadow,
  ...gridItemProps
}) => {
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
        {heading}
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

  if (format === "action") {
    contents = (
      <>
        <Flex
          flexGap="16px"
          flexDirection="row"
          className="flex-row-mobile"
          style={{ width: "100%" }}
        >
          {icon && (
            <div
              className="icon-container"
              style={{
                minHeight: "20px",
                minWidth: "20px",
                maxHeight: "45px",
                maxWidth: "45px",
              }}
            >
              {theIcon}
            </div>
          )}
          {theHeading}
          {theButton}
        </Flex>
        {theDescription}
      </>
    );
  } else {
    const theChevron = isLoading ? (
      <Skeleton width={16} height={16} />
    ) : (
      <FlexItem flexShrink={0}>
        <ChevronRightIcon color="secondary70" size="medium" />
      </FlexItem>
    );

    const itemContent = (
      <>
        <Flex
          flexGap="16px"
          flexDirection="row"
          className="flex-row-mobile"
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
    ) : (
      itemContent
    );
  }

  return (
    <StyledCardGridItem
      className={`card-grid__item${href ? "--link" : ""} card-grid-item-mobile`}
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
  /** Shadow to be applied */
  shadow?: "raised";
}

/**
 * CardGrid component renders a grid of items, each formatted as either 'action' or 'content'.
 * It also manages default grid settings for columns and gaps.
 *
 * @param {CardGridProps} props - The props for the CardGrid component.
 * @returns {JSX.Element} The rendered CardGrid component.
 */
export const CardGrid: React.FC<CardGridProps> = ({
  items = [{}, {}],
  format = "content",
  shadow,
  ...gridProps
}) => {
  const gridColumns = gridProps.gridColumns || {
    mobile: "repeat(1, 1fr)",
    tablet: "repeat(2, 1fr)",
    desktop: "repeat(3, 1fr)",
    wide: "repeat(4, 1fr)",
  };

  // On mobile we want no gap between items if the shadow is raised
  const gridGap = gridProps.gridGap || {
    mobile: shadow === "raised" ? "16px" : "0",
    tablet: "16px",
  };

  gridProps = { ...gridProps, gridColumns, gridGap };

  return (
    items && (
      <StyledCardGrid shadow={shadow}>
        <Grid className="bd-grid" {...gridProps}>
          {items.map((item, i) => {
            item.format = format;
            return (
              <CardGridItem key={i} format={format} shadow={shadow} {...item} />
            );
          })}
        </Grid>
      </StyledCardGrid>
    )
  );
};
