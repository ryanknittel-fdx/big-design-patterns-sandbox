import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  Box,
  Button,
  Grid,
  Text,
  Flex,
  FlexItem,
} from "@bigcommerce/big-design";
import { ChevronRightIcon } from "@bigcommerce/big-design-icons";
import { StyledLinkBox, StyledLink } from "./styled";

export type CardGridItem = {
  button?: {
    variant: "primary" | "secondary" | "subtle" | "danger";
    text: string;
  };
  name?: string;
  description?: string;
  format?: string;
  href?: string;
  icon?: React.ReactNode;
};

function CardGridItem({
  button,
  name,
  description,
  format = "content",
  href,
  icon,
}: CardGridItem) {
  if (format === "action") {
    return (
      <Box border="box" borderRadius="normal" padding="medium">
        <Flex flexGap="16px" flexDirection="row">
          <FlexItem>
            {icon ? icon : <Skeleton width={45} height={45} />}
          </FlexItem>
          <FlexItem flexGrow={1}>
            <Text bold>{name ?? <Skeleton width={150} />}</Text>
          </FlexItem>
          <FlexItem>
            {button ? (
              <Button
                variant="secondary"
                onClick={() => {
                  alert(`${name} clicked`);
                }}
              >
                {button.text}
              </Button>
            ) : (
              <Skeleton height={36} width={100} />
            )}
          </FlexItem>
        </Flex>

        <Text marginTop="medium">{description ?? <Skeleton count={2} />}</Text>
      </Box>
    );
  }

  // Default format is "content"
  const itemContent = (
    <>
      <Flex flexGap="16px" flexDirection="row">
        <FlexItem flexGrow={1}>
          <Text bold>{name ?? <Skeleton width={150} />}</Text>
        </FlexItem>
        <FlexItem>
          {name ? <ChevronRightIcon /> : <Skeleton width={24} />}
        </FlexItem>
      </Flex>

      <Text marginTop="medium">{description ?? <Skeleton count={2} />}</Text>
    </>
  );
  return href ? (
    <StyledLink target="_blank" href={href}>
      <StyledLinkBox border="box" borderRadius="normal" padding="medium">
        {itemContent}
      </StyledLinkBox>
    </StyledLink>
  ) : (
    <Box border="box" borderRadius="normal" padding="medium">
      {itemContent}
    </Box>
  );
}

export function CardGrid({
  items,
  format,
}: {
  items?: CardGridItem[];
  format?: "content" | "action";
}) {
  return (
    <Grid
      gridColumns={{ mobile: "repeat(1, 1fr)", tablet: "repeat(2, 1fr)" }}
      gridGap="16px"
    >
      {items ? (
        items.map((item) => <CardGridItem format={format} {...item} />)
      ) : (
        <>
          <CardGridItem format={format} />
          <CardGridItem format={format} />
        </>
      )}
    </Grid>
  );
}
