import React, {
  FunctionComponent,
  ReactNode,
  useState,
  useEffect,
  MouseEvent,
  useCallback,
  FormEvent,
} from "react";
import {
  Box,
  Flex,
  FlexItem,
  Grid,
  GridItem,
  Link,
  HR,
  Form,
  FormGroup,
  Button,
  Text,
  H1,
  H2,
  Checkbox,
} from "@bigcommerce/big-design";
import { Page } from "@bigcommerce/big-design-patterns";
import { FeatureTag, FeatureTagProps } from "../featureTag/FeatureTag";
import { HTMLParser } from "../htmlParser/htmlParser";
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

/**
 * Slide data structure for the image carousel.
 */
export interface SlideData {
  alt: string;
  imageUrl: string;
  thumbnailUrl?: string;
}

/**
 * Developer information structure.
 */
export interface DeveloperType {
  name: string;
  url: string;
  tier?: string;
}

/**
 * Copy structure for the installation panel text content.
 */
export interface InstallationCopy {
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
}

/**
 * App information structure.
 */
export interface AppType {
  logoURL: string;
  name: string;
  developer: DeveloperType;
  description?: string;
  summary: string;
  features: Array<FeatureTagProps>;
  screenshots?: Array<SlideData>;
  scopesAllowed?: Array<string>;
  scopesDenied: Array<string>;
  rating?: number;
  price?: string;
  privacyPolicyURL?: string;
  termsOfServiceURL?: string;
  requireAcknowledgment?: boolean;
}

/**
 * Props structure for the InstallScreen component.
 */
interface InstallScreenProps {
  backgroundSrc?: string;
  isLoading?: boolean;
  showBackButton?: boolean;
  onBackButtonClick?: () => void;
  onInstallButtonClick?: () => void;
  customForm?: ReactNode;
  app: AppType;
  copy: InstallationCopy;
}

/**
 * AppRating component.
 * Renders the rating of the app using stars based on the rating value.
 *
 * @param {Object} props - Properties for the component.
 * @param {number} props.rating - Rating value for the app.
 * @returns {JSX.Element} The rendered AppRating component.
 */
const AppRating: FunctionComponent<{ rating: number; }> = ({ rating }) => {
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

/**
 * Converts a text string to an HTML structure.
 *
 * @param {string} text - The text to be converted to HTML.
 * @returns {Object} HTML object for rendering.
 */
const textToHTML = (text: string) => {
  return { __html: text };
};

/**
 * Renders the partner tier information based on the tier name and heading text.
 *
 * @param {string} tier - Partner tier name.
 * @param {string} headingText - Heading text for the tier section.
 * @returns {JSX.Element | null} The rendered tier information or null if no match is found.
 */
const partnerTier = (tier: string, headingText: string): ReactNode => {
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
            <img src={tierIcon} height="24" alt={`${tierName} icon`} />
          </FlexItem>
          <FlexItem>
            <Text color="brand" uppercase marginLeft="xxSmall" bold>
              {tierName}
            </Text>
          </FlexItem>
        </Flex>
      </FlexItem>
    );
  }

  return null;
};

/**
 * InstallScreen component.
 * Renders the installation screen for an app, including app details, installation options, and acknowledgment.
 *
 * @param {InstallScreenProps} props - Properties passed to the component.
 * @returns {JSX.Element} The rendered InstallScreen component.
 */
export const InstallScreen: FunctionComponent<InstallScreenProps> = ({
  backgroundSrc,
  isLoading,
  showBackButton = true,
  onBackButtonClick,
  onInstallButtonClick,
  customForm,
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
  const [formOpen, setFormOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(true);

  const descriptionAsHTML = app.description ? textToHTML(app.description) : null;

  /**
   * Handles the click event for the cancel button.
   *
   * @param {MouseEvent} e - The click event object.
   */
  const cancelButtonHandler = (e: MouseEvent) => {
    e.preventDefault();
    setFormOpen(false);
  };

  /**
   * Handles the form toggle event to show/hide the form.
   *
   * @param {MouseEvent} e - The click event object.
   */
  const toggleForm = (e: MouseEvent) => {
    e.preventDefault();
    setFormOpen(true);
  };

  /**
   * Handles the acknowledgment checkbox change event.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - The change event object.
   */
  const handleAcknowledgmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcknowledged(!acknowledged);
  };

  /**
   * Prevents the form default submission behavior.
   * 
   * @param {FormEvent<HTMLFormElement>} e - The form event object.
   */
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => e.preventDefault(),
    []
  );

  useEffect(() => {
    if (app.requireAcknowledgment) {
      setAcknowledged(false);
    }
  }, [app.requireAcknowledgment]);

  return (
    <Page
      background={backgroundSrc ? {
        src: backgroundSrc,
        backgroundPosition: "top right",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      } : undefined}
    >
      <Grid
        gridColumns={{ mobile: "1fr", desktop: "minmax(0px, 4fr) 425px" }}
        gridGap="2rem"
      >
        <GridItem>
          <Grid gridColumns={"102px 1fr"} gridColumnGap={theme.spacing.large}>
            {/* Back Button */}
            {showBackButton &&
              <GridItem gridColumnStart={"1"} gridColumnEnd={"3"}>
                <StyledBackLink href="#" onClick={onBackButtonClick}>
                  <ArrowBackIcon size="large" /> {copy.backButton}
                </StyledBackLink>
              </GridItem>
            }
            {/* App Details */}
            <GridItem
              backgroundColor="white"
              borderRadius="normal"
              padding={`large`}
            >
              <img src={app.logoURL} width={"60"} height={"60"} alt="App Logo" />
            </GridItem>
            <GridItem>
              <H1 marginBottom={"small"}>{app.name}</H1>
              <Link href={app.developer.url} target="_blank">
                {app.developer.name}
              </Link>{" "}
              | {app.summary}
            </GridItem>
            {/* App features */}
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
                    <FeatureTag {...tag} key={index} />
                  ))}
                </Flex>
              ) : null}
            </GridItem>
          </Grid>
          {/* App screenshots */}
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
            {/* App description */}
            {app.description ? (
              // <Box dangerouslySetInnerHTML={descriptionAsHTML} />
              <HTMLParser html={app.description} />
            ) : null}
          </Flex>
        </GridItem>
        {/* Installation panel */}
        <StyledAsideForm backgroundColor="white" shadow="raised">
          <StyledPanelViewport className={formOpen ? "isOpen" : "isClosed"}>
            <Box className="contents">
              <Grid gridColumns="1fr" gridGap="medium" padding="large">
                <H2>{copy.panelHeader}</H2>
                {/* App characteristics */}
                {app.price || app.rating || app.developer.tier ? (
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
                ) : null}

                {/* Custom form (if needed) */}
                {customForm ? customForm : null}
                {/* Acknowledgment and installation */}
                <StyledMovingBlock
                  justify-content="start"
                  marginTop={{ mobile: "medium", desktop: "none" }}
                >
                  <Flex marginBottom="medium" flexDirection={{ mobile: "row" }}>
                    {app.requireAcknowledgment ? (
                      <Checkbox
                        label=""
                        checked={acknowledged}
                        onChange={handleAcknowledgmentChange}
                      ></Checkbox>
                    ) : null}
                    <Text>{copy.policiesAndTerms}</Text>
                  </Flex>
                  <Form 
                    fullWidth
                    onSubmit={onSubmit}
                  >
                    <FormGroup>
                      <Grid
                        gridColumns={{ mobile: "1fr 1fr", desktop: "1fr" }}
                        gridGap="1rem"
                      >
                        <GridItem display={{ mobile: "grid", desktop: "none" }}>
                          <Button
                            type='button'
                            variant="secondary"
                            onClick={cancelButtonHandler}
                          >
                            {copy.cancel}
                          </Button>
                        </GridItem>
                        <Button
                          type='button'
                          variant="primary"
                          marginBottom={{ mobile: "none", desktop: "medium" }}
                          onClick={onInstallButtonClick}
                          isLoading={isLoading}
                          disabled={app.requireAcknowledgment && !acknowledged}
                        >
                          {copy.install}
                        </Button>
                      </Grid>
                    </FormGroup>
                  </Form>
                </StyledMovingBlock>
                {/* Scopes */}
                <GridItem>
                  {app.scopesAllowed && app.scopesAllowed.length > 0 ? (
                    <Box marginBottom="medium">
                      <Text marginBottom="small">{copy.scopesAllowed}</Text>
                      <StyledScopes>
                        {app.scopesAllowed.map(
                          (permission: string, index: number) => (
                            <li key={index}>
                              <Flex
                                alignItems={{ mobile: "start" }}
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
                        {app.scopesDenied.map(
                          (denial: string, index: number) => (
                            <li key={index}>
                              <Flex
                                alignItems={{ mobile: "start" }}
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
            {/* Mobile toggle */}
            <Grid className="mobile-toggle" display={{ desktop: "none" }}>
              <Flex justifyContent="end" padding="large">
                <Button
                  type='button'
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
