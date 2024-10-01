import { FunctionComponent, ReactNode } from "react";
import {
  Box,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Panel,
  Link,
  HR,
  Form,
  FormGroup,
  Button,
  Text,
  H1,
} from "@bigcommerce/big-design";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import { Page } from "@bigcommerce/big-design-patterns";
import { FeatureTag } from "../featureTag/FeatureTag";

import EmblaCarousel from "./Carousel";

import { theme } from "@bigcommerce/big-design-theme";
import {
  ArrowBackIcon,
  CheckIcon,
  CloseIcon,
  StarBorderIcon,
  StarHalfIcon,
  StarIcon,
} from "@bigcommerce/big-design-icons";

import { StyledBackLink } from "./styled";

interface SlideData {
  alt: string;
  imageUrl: string;
}

interface InstallScreenProps {
  backButtonLabel?: string;
  onBackButtonClick?: () => void;
  onInstallButtonClick?: () => void;
  app: {
    logoURL: string;
    name: string;
    developer: {
      name: string;
      url: string;
      tier?: string;
    };
    description?: string;
    summary: string;
    features: Array<{
      label: string;
      icon?: ReactNode;
      link?: string;
    }>;
    screenshots?: SlideData[];
    permissions?: Array<string>;
    rating?: number;
    price?: string;
    privacyPolicyURL?: string;
    termsOfServiceURL?: string;
  };
  about: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
}

const AppRating = ({ rating }: { rating: number }) => {
  const stars = [1, 2, 3, 4, 5].map((star) => {
    if (rating >= star) {
      return <StarIcon key={star} color="warning60" />;
    } else if (rating >= star - 0.5) {
      return <StarHalfIcon key={star} color="warning60" />;
    } else {
      return <StarBorderIcon key={star} color="warning60" />;
    }
  });

  return <>{stars}</>;
};

const textToHTML = (text: string) => {
  return { __html: text };
};

const partnerTier = (tier: string) => {
  let tierIcon = null;
  let tierName = null;

  switch (tier) {
    case "ELITE":
      tierIcon =
        "https://images.ctfassets.net/wowgx05xsdrr/mKRdJn9Ea3OXNOizSFotn/8d2579f3cdc3b214fdf635cfaee78cc9/elite.svg";
      tierName = "Elite";
      break;
    default:
      break;
  }

  if (tierName && tierIcon) {
    return (
      <FlexItem>
        <Text margin="none">Partner Tier</Text>
        <Flex marginTop="xxSmall">
          <FlexItem>
            <img src={tierIcon} height="24" />
          </FlexItem>
          <FlexItem>
            <Text color="brand" uppercase={true} marginLeft="xxSmall" bold>
              {tierName}
            </Text>
          </FlexItem>
        </Flex>
      </FlexItem>
    );
  }

  return null;
};

export const InstallScreen: FunctionComponent<InstallScreenProps> = ({
  backButtonLabel,
  onBackButtonClick,
  onInstallButtonClick,
  app,
}) => {
  const descriptionAsHTML = app.description
    ? textToHTML(app.description)
    : null;

  return (
    <Page
      background={{
        src: "./assets/images/hero-bg.svg",
        backgroundPosition: "top right",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        gridColumns={{ mobile: "1fr", desktop: "minmax(0px, 4fr) 425px" }}
        gridGap="30px"
      >
        <GridItem>
          <Grid gridColumns={"102px 1fr"} gridColumnGap={theme.spacing.large}>
            <GridItem gridColumnStart={"1"} gridColumnEnd={"3"}>
              <StyledBackLink href="#" onClick={onBackButtonClick}>
                <ArrowBackIcon size="large" /> {backButtonLabel}
              </StyledBackLink>
            </GridItem>
            <GridItem
              backgroundColor="white"
              borderRadius="normal"
              padding={`large`}
            >
              <img src={app.logoURL} width={"60"} height={"60"} />
            </GridItem>
            <GridItem>
              <H1 marginBottom={"small"}>{app.name}</H1>
              <Link href={app.developer.url} target="_blank">
                {app.developer.name}
              </Link>{" "}
              | {app.summary}
            </GridItem>
            <GridItem gridColumnStart={"1"} gridColumnEnd={"3"}>
              {app.features ? (
                <Flex
                  flexDirection={{ mobile: "row" }}
                  flexGap={theme.spacing.xSmall}
                  flexWrap={"wrap"}
                  justifyContent={{ mobile: "flex-start" }}
                  alignContent={{ mobile: "flex-start" }}
                >
                  {app.features.map((tag, index) => (
                    <FeatureTag key={index} label={tag.label} icon={tag.icon} />
                  ))}
                </Flex>
              ) : null}
            </GridItem>
          </Grid>

          <Flex flexDirection="column" flexGap="24px">
            {app.screenshots && app.screenshots.length > 0 ? (
              <FlexItem>
                <Box>
                  <HR />
                </Box>
                <Box>
                  <EmblaCarousel
                    slides={app.screenshots}
                    options={{ loop: false }}
                  />
                </Box>
              </FlexItem>
            ) : null}
            <Box>
              <HR />
            </Box>
            {descriptionAsHTML ? (
              <Box dangerouslySetInnerHTML={descriptionAsHTML} />
            ) : null}
          </Flex>
        </GridItem>
        <Box>
          <Flex flexDirection="column" flexGap={defaultTheme.spacing.xLarge}>
            <FlexItem>
              <Panel header={`Easily install ${app.name} now`}>
                <HR />
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  marginBottom="medium"
                  marginTop="small"
                >
                  {app.price ? (
                    <FlexItem>
                      <Text margin="none">Price</Text>
                      <Text bold marginTop="xxSmall">
                        {app.price}
                      </Text>
                    </FlexItem>
                  ) : null}
                  {app.rating ? (
                    <FlexItem>
                      <Text margin="none">Rating</Text>
                      <Box marginTop="xxSmall">
                        <AppRating rating={app.rating} />
                      </Box>
                    </FlexItem>
                  ) : null}

                  {app.developer.tier ? partnerTier(app.developer.tier) : null}
                </Flex>

                <Form fullWidth>
                  <FormGroup>
                    <Button
                      variant="primary"
                      marginBottom="medium"
                      onClick={onInstallButtonClick}
                    >
                      Install
                    </Button>
                  </FormGroup>
                </Form>

                <HR />
                <Text marginBottom="medium">
                  By clicking on install you agree to the{" "}
                  <strong>BigCommerce</strong>{" "}
                  <Link href="#" target="_blank">
                    terms of service
                  </Link>{" "}
                  and <strong>{app.name}</strong>{" "}
                  {app.privacyPolicyURL ? (
                    <Link href={app.privacyPolicyURL} target="_blank">
                      privacy policy
                    </Link>
                  ) : null}
                  {app.privacyPolicyURL && app.termsOfServiceURL
                    ? " and "
                    : null}
                  {app.termsOfServiceURL ? (
                    <Link href={app.termsOfServiceURL} target="_blank">
                      terms of service
                    </Link>
                  ) : null}
                  .
                </Text>

                {app.permissions && app.permissions.length > 0 ? (
                  <Box marginBottom="medium">
                    <Text marginBottom="small">
                      By installing {app.name}, it will be able to:
                    </Text>
                    <Flex flexDirection="column" flexGap="4px">
                      {app.permissions?.map(
                        (permission: string, index: number) => (
                          <Flex alignItems="center" key={index}>
                            <CheckIcon color="success" />
                            <FlexItem marginLeft="small">{permission}</FlexItem>
                          </Flex>
                        )
                      )}
                    </Flex>
                  </Box>
                ) : null}
                <Box>
                  <Text marginBottom="small">
                    {app.name} <strong>will not be able</strong> to:
                  </Text>
                  <Flex flexDirection="column" flexGap="4px">
                    <Flex alignItems="center">
                      <CloseIcon color="danger" />
                      <FlexItem marginLeft="small">
                        Access your password
                      </FlexItem>
                    </Flex>
                  </Flex>
                </Box>
              </Panel>
            </FlexItem>
          </Flex>
        </Box>
      </Grid>
    </Page>
  );
};
