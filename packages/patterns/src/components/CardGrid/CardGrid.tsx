import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Button, Grid, Text, Flex, FlexItem } from "@bigcommerce/big-design";
import { GridProps, GridItemProps, ButtonProps } from "@bigcommerce/big-design";
import { ChevronRightIcon } from "@bigcommerce/big-design-icons";
import { StyledCardGridItem } from "./styled";

export interface CardGridButtonProps extends ButtonProps {
  text: string;
}

export interface CardGridItem extends GridItemProps {
  button?: CardGridButtonProps;
  heading?: React.ReactNode;
  description?: string;
  format?: "action" | "content";
  href?: string;
  hrefTarget?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export function CardGridItem({
  button,
  heading,
  description,
  format = "content",
  href,
  hrefTarget = "_self",
  onClick,
  icon,
  ...gridItemProps
}: CardGridItem) {
  // let's define the html structure of the contents first
  let contents = null;

  // let's define the default button props if any
  let buttonProps = {};

  if (button) {
    buttonProps = {
      variant: "secondary",
      ...button,
    };
  }

  // define if it's still in loading state, by checking if any of the item content props are not defined
  const isLoading = !heading && !description && !button && !icon;

  // THE CARD CONTENTS
  const theIcon = isLoading ? (
    <Skeleton width={45} height={45} />
  ) : (
    icon && <FlexItem>{icon}</FlexItem>
  );

  const theHeading = isLoading ? (
    <FlexItem flexGrow={1}>
      <Skeleton width={150} />
    </FlexItem>
  ) : (
    heading && <FlexItem flexGrow={1}>{heading}</FlexItem>
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
    description && <Text marginTop="medium">{description}</Text>
  );

  if (format === "action") {
    // AN ACTION CARD

    contents = (
      <>
        <Flex flexGap="16px" flexDirection="row">
          {theIcon}
          {theHeading}
          {theButton}
        </Flex>
        {theDescription}
      </>
    );
  } else {
    // A CONTENT CARD

    // let's prepare the contents
    const theChevron = isLoading ? (
      <Skeleton width={24} height={24} />
    ) : (
      <FlexItem>
        <ChevronRightIcon />
      </FlexItem>
    );

    const itemContent = (
      <>
        <Flex flexGap="16px" flexDirection="row">
          {theHeading}
          {theChevron}
        </Flex>
        {theDescription}
      </>
    );

    // determine if it's a link to render the hyperlink tag, otherwise render a div
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

  // render
  return (
    <StyledCardGridItem
      className={`card-grid__item${href ? "--link" : ""}`}
      border={gridItemProps.border || "box"}
      borderRadius={gridItemProps.borderRadius || "normal"}
      padding={gridItemProps.padding || "medium"}
      {...gridItemProps}
    >
      {contents}
    </StyledCardGridItem>
  );
}

// define an interface for the CardGrid component
export interface CardGridProps extends GridProps {
  items?: CardGridItem[];
  format?: "content" | "action";
}

export function CardGrid({ items = [{}], format, ...gridProps }: CardGridProps) {
  // define if the colums have been set from the frid props and if not apply the default values
  const gridColumns = gridProps.gridColumns || {
    mobile: "repeat(1, 1fr)",
    tablet: "repeat(2, 1fr)",
  };
  // define if the gap has been set from the frid props and if not apply the default values
  const gridGap = gridProps.gridGap || "16px";
  gridProps = { ...gridProps, gridColumns: gridColumns, gridGap: gridGap };
  return (
    items && (
      <Grid {...gridProps}>
        {items.map((item, i) => (
          <CardGridItem key={i} format={format} {...item} />
        ))}
      </Grid>
    )
  );
}
