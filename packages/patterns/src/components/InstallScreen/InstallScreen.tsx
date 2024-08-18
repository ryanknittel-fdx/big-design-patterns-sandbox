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
  H3,
  Text,
} from "@bigcommerce/big-design";
import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import { Page } from "../page/Page";
import { FeatureTag } from "../featureTag/FeatureTag";
import { BackButton, Header } from "../header/Header";

import EmblaCarousel from './Carousel'

const slides = [
  { imageUrl: "https://storage.googleapis.com/bigcommerce-developers/images/demo_images/makeswift-demo-screen.png", alt: "Description of image 1" },
  { imageUrl: "https://storage.googleapis.com/bigcommerce-developers/images/demo_images/catalyst-demo-screen.png", alt: "Description of image 2" },
  { imageUrl: "https://storage.googleapis.com/bigcommerce-developers/images/demo_images/makeswift-demo-screen.png", alt: "Description of image 3" },
  // Add more slides as needed
];

interface SlideData {
  text: string;
  img: string;
}

interface InstallScreenProps {
  backButtonLabel: string;
  onBackButtonClick: () => void;
  logoUrl: string;
  headerTitle: string;
  headerLink: {
    text: string;
    url: string;
  };
  headerDescription: string;
  featureTags: Array<{
    label: string;
    icon?: ReactNode;
  }>;
  slideData: SlideData[];
  about: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
  tags: string[];
  panelHeader: string;
  panelContent: ReactNode;
}

export const InstallScreen: FunctionComponent<InstallScreenProps> = ({
  backButtonLabel,
  onBackButtonClick,
  logoUrl,
  headerTitle,
  headerLink,
  headerDescription,
  featureTags,
  slideData,
  about,
  benefits,
  tags,
  panelHeader,
  panelContent,
}) => {
  return (
    <Page featureBg={true}>
      <Grid
        gridColumns={{ mobile: "1fr", tablet: "minmax(0, 4fr) 3fr" }}
        gridGap="30px"
      >
        <GridItem>
          <Box>
            <BackButton
              backButtonLabel={backButtonLabel}
              onBackButtonClick={onBackButtonClick}
            />
          </Box>
          <Flex flexGap="20px" marginTop="small">
            <FlexItem>
              <Box
                style={{
                  background: "#FFF0BF",
                  border: "1px dashed #E58F17",
                  width: "100px",
                  height: "100px",
                  backgroundImage: `url(${logoUrl})`,
                  backgroundSize: "cover",
                }}
              ></Box>
            </FlexItem>
            <FlexItem flexGrow={1}>
              <Header headerTitle={headerTitle}>
                <Box marginBottom="small">
                  <Link href={headerLink.url} target="_blank">
                    {headerLink.text}
                  </Link>{" "}
                  | {headerDescription}
                </Box>
                <Flex flexGap="4px">
                  {featureTags.map((tag, index) => (
                    <FeatureTag key={index} label={tag.label} icon={tag.icon} />
                  ))}
                </Flex>
              </Header>
            </FlexItem>
          </Flex>

          <Flex flexDirection="column" flexGap="24px">
            <Box>
              <HR />
            </Box>
            <Box>
            <EmblaCarousel slides={slides} options={{ loop: false }} />
            </Box>
            <Box>
              <HR />
            </Box>
            <Box>
              <H3>About</H3>
              <Text>{about}</Text>
            </Box>

            <Box>
              <H3>Benefits</H3>
              {benefits.map((benefit, index) => (
                <Text key={index}>
                  <strong>{benefit.title}:</strong> {benefit.description}
                </Text>
              ))}
            </Box>
            <Flex flexGap="4px">
              {tags.map((tag, index) => (
                <FeatureTag key={index} label={tag} />
              ))}
            </Flex>
          </Flex>
        </GridItem>
        <Box>
          <Flex flexDirection="column" flexGap={defaultTheme.spacing.xLarge}>
            <FlexItem>
              <Panel header={panelHeader}>{panelContent}</Panel>
            </FlexItem>
          </Flex>
        </Box>
      </Grid>
    </Page>
  );
};