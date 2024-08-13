import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Button,
  Grid,
  Text,
  Flex,
  FlexItem,
} from "@bigcommerce/big-design";
import { GridProps, GridItemProps, ButtonProps } from "@bigcommerce/big-design";
import { ChevronRightIcon } from "@bigcommerce/big-design-icons";
import { StyledCardGridItem } from "./styled";

export type CardGridSkeletonItem = {
  heading?: boolean;
  description?: boolean;
  button?: boolean;
  icon?: boolean;
};

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
  skeleton?: CardGridSkeletonItem;
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
  skeleton,
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

  // if we got the skeleton definition, then render a skeleton
  if (skeleton) {
    contents = (
      <>
        <Flex flexGap="16px" flexDirection="row">
          {skeleton.icon && (
            <FlexItem>
              <Skeleton width={45} height={45} />
            </FlexItem>
          )}

          {skeleton.heading && (
            <FlexItem flexGrow={1}>
              <Skeleton width={150} />
            </FlexItem>
          )}

          {skeleton.button && (
            <FlexItem>
              <Skeleton height={36} width={100} />
            </FlexItem>
          )}
        </Flex>
        {skeleton.description && (
          <Text marginTop="medium">
            <Skeleton count={2} />
          </Text>
        )}
      </>
    );
  } else {
    // it's not a skeleton, let's render the actual content

    // if the format is "action", then render the content as an action card
    if (format === "action") {
      contents = (
        <>
          <Flex flexGap="16px" flexDirection="row">
            {icon && <FlexItem>{icon}</FlexItem>}
            {heading && <FlexItem flexGrow={1}>{heading}</FlexItem>}
            {button && (
              <FlexItem>
                <Button {...buttonProps}>
                  {button.text}
                </Button>
              </FlexItem>
            )}
          </Flex>
          {description && <Text marginTop="medium">{description}</Text>}
        </>
      );
    } else {
      // it's a content card
      // let's prepare the contents
      const itemContent = (
        <>
          {heading && (
            <Flex flexGap="16px" flexDirection="row">
              <FlexItem flexGrow={1}>{heading}</FlexItem>
              <FlexItem>
                <ChevronRightIcon />
              </FlexItem>
            </Flex>
          )}
          {description && <Text marginTop="medium">{description}</Text>}
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

export function CardGrid({ items, format, ...gridProps }: CardGridProps) {
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
