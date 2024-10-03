import { FunctionComponent, ReactNode, useState } from "react";
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
  H2,
} from "@bigcommerce/big-design";
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
  ArrowDropDownIcon,
} from "@bigcommerce/big-design-icons";

import {
  StyledAsideForm,
  StyledBackLink,
  StyledMovingBlock,
  StyledPanelViewport,
  StyledScopes,
} from "./styled";

interface SlideData {
  alt: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

interface DeveloperType {
  name: string;
  url: string;
  tier?: string;
}

interface FeatureType {
  label: string;
  icon?: ReactNode;
  link?: string;
}

interface InstallScreenProps {
  onBackButtonClick?: () => void;
  onInstallButtonClick?: () => void;
  app: {
    logoURL: string;
    name: string;
    developer: DeveloperType;
    description?: string;
    summary: string;
    features: Array<FeatureType>;
    screenshots?: Array<SlideData>;
    scopesAllowed?: Array<string>;
    scopesDenied: Array<string>;
    rating?: number;
    price?: string;
    privacyPolicyURL?: string;
    termsOfServiceURL?: string;
  };
  copy: {
    panelHeader: string;
    backButton: string;
    price: string;
    rating: string;
    partnerTier: string;
    policiesAndTerms: ReactNode;
    install: string;
    scopesAllowed: ReactNode;
    scopesDenied: ReactNode;
    cancel: string;
  };
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

const partnerTier = (tier: string, headingText: string) => {
  let tierIcon = null;
  let tierName = null;

  const tierObjectKey = tier.toLowerCase().replace(" ", "");

  switch (tierObjectKey) {
    case "elite":
      tierIcon =
        "https://images.ctfassets.net/wowgx05xsdrr/mKRdJn9Ea3OXNOizSFotn/8d2579f3cdc3b214fdf635cfaee78cc9/elite.svg";
      tierName = "Elite";
      break;
    case "verified":
      tierIcon =
        "https://images.ctfassets.net/wowgx05xsdrr/3ZKVZyGsz1WXl7N7sxPbVy/3871c5fcf98bf81bd6de60d081f37c8f/verified.svg";
      tierName = "Verified";
      break;
    case "preferred":
      tierIcon =
        "https://images.ctfassets.net/wowgx05xsdrr/h1Hsopo4cU1d39UVItu6q/0f01262b0fadcc6271984e2ac063c627/preferred.svg";
      tierName = "Preferred";
      break;
    default:
      break;
  }

  if (tierName && tierIcon) {
    return (
      <FlexItem>
        <Text margin="none">{headingText}</Text>
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
  onBackButtonClick,
  onInstallButtonClick,
  app,
  copy = {
    panelHeader: <>App Installation</>,
    backButton: "Apps",
    price: "Price",
    rating: "Rating",
    partnerTier: "Partner Tier",
    policiesAndTerms: <>Policies and Terms</>,
    install: "Install",
    scopesAllowed: <>"Scopes Allowed"</>,
    scopesDenied: <>"Scopes Denied"</>,
    cancel: "Cancel",
  },
}) => {
  // state to determine if form is open or closed
  const [formOpen, setFormOpen] = useState(false);

  const descriptionAsHTML = app.description
    ? textToHTML(app.description)
    : null;

  const cancelButtonHandler = (e) => {
    e.preventDefault();
    setFormOpen(false);
  };

  const toggleForm = (e: MouseEvent) => {
    e.preventDefault();
    setFormOpen(true);
  };
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
        gridGap="2rem"
      >
        <GridItem>
          <Grid gridColumns={"102px 1fr"} gridColumnGap={theme.spacing.large}>
            <GridItem gridColumnStart={"1"} gridColumnEnd={"3"}>
              <StyledBackLink href="#" onClick={onBackButtonClick}>
                <ArrowBackIcon size="large" /> {copy.backButton}
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
        <StyledAsideForm backgroundColor="white" shadow="raised">
          <StyledPanelViewport className={formOpen ? "isOpen" : "isClosed"}>
            <Box className="contents">
              <Grid gridColumns="1fr" gridGap="medium" padding="large">
                <H2>{copy.panelHeader}</H2>
                <Flex
                  flexDirection={{ mobile: "row" }}
                  justifyContent="space-between"
                  alignItems="start"
                  marginBottom="medium"
                  paddingVertical="small"
                  borderTop="box"
                  borderBottom="box"
                >
                  {app.price ? (
                    <FlexItem>
                      <Text margin="none">{copy.price}</Text>
                      <Text bold marginTop="xxSmall">
                        {app.price}
                      </Text>
                    </FlexItem>
                  ) : null}
                  {app.rating ? (
                    <FlexItem>
                      <Text margin="none">{copy.rating}</Text>
                      <Box marginTop="xxSmall">
                        <AppRating rating={app.rating} />
                      </Box>
                    </FlexItem>
                  ) : null}

                  {app.developer.tier
                    ? partnerTier(app.developer.tier, copy.partnerTier)
                    : null}
                </Flex>
                <StyledMovingBlock
                  justify-content="start"
                  marginTop={{ mobile: "medium", desktop: "none" }}
                >
                  <Text marginBottom="medium">{copy.policiesAndTerms}</Text>
                  <Form fullWidth>
                    <FormGroup>
                      <Grid
                        gridColumns={{ mobile: "1fr 1fr", desktop: "1fr" }}
                        gridGap="1rem"
                      >
                        <GridItem display={{ mobile: "grid", desktop: "none" }}>
                          <Button
                            variant="secondary"
                            onClick={cancelButtonHandler}
                          >
                            {copy.cancel}
                          </Button>
                        </GridItem>
                        <Button
                          variant="primary"
                          marginBottom={{ mobile: "none", desktop: "medium" }}
                          onClick={onInstallButtonClick}
                        >
                          {copy.install}
                        </Button>
                      </Grid>
                    </FormGroup>
                  </Form>
                </StyledMovingBlock>
                <GridItem>
                  {app.scopesAllowed && app.scopesAllowed.length > 0 ? (
                    <Box marginBottom="medium">
                      <Text marginBottom="small">{copy.scopesAllowed}</Text>
                      <StyledScopes>
                        {app.scopesAllowed?.map(
                          (permission: string, index: number) => (
                            <li>
                              <Flex
                                alignItems={{ mobile: "start" }}
                                key={index}
                                flexDirection={{ mobile: "row" }}
                              >
                                <CheckIcon color="success" aria-hidden="true" />
                                <FlexItem marginLeft="small">
                                  {permission}
                                </FlexItem>
                              </Flex>
                            </li>
                          )
                        )}
                      </StyledScopes>
                    </Box>
                  ) : null}
                  {app.scopesDenied && app.scopesDenied.length > 0 ? (
                    <Box>
                      <Text marginBottom="small">{copy.scopesDenied}</Text>
                      <StyledScopes>
                        {app.scopesDenied?.map(
                          (denial: string, index: number) => (
                            <li>
                              <Flex
                                alignItems={{ mobile: "start" }}
                                key={index}
                                flexDirection={{ mobile: "row" }}
                              >
                                <CloseIcon color="danger" aria-hidden="true" />
                                <FlexItem marginLeft="small">{denial}</FlexItem>
                              </Flex>
                            </li>
                          )
                        )}
                      </StyledScopes>
                    </Box>
                  ) : null}
                </GridItem>
              </Grid>
            </Box>

            <Grid className="mobile-toggle" display={{ desktop: "none" }}>
              <Flex justifyContent="end" padding="large">
                <Button
                  variant="primary"
                  onClick={toggleForm}
                  iconRight={<ArrowDropDownIcon />}
                  mobileWidth="100%"
                >
                  {copy.install}
                </Button>
              </Flex>
            </Grid>
          </StyledPanelViewport>
        </StyledAsideForm>
      </Grid>
    </Page>
  );
};
