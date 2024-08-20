import React, { FunctionComponent, ReactNode } from "react";
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

import EmblaCarousel from "./Carousel";

interface SlideData {
  alt: string;
  imageUrl: string;
}

interface InstallScreenProps {
  backButtonComponent?: ReactNode;
  backButtonLabel?: string;
  onBackButtonClick?: () => void;
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
  panelHeader: string;
  panelContent: ReactNode;
}

export const InstallScreen: FunctionComponent<InstallScreenProps> = ({
  backButtonComponent,
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
  panelHeader,
  panelContent,
}) => {
  return (
    <Page featureBg={true}>
      <Grid
        gridColumns={{ mobile: "1fr", desktop: "minmax(0px, 4fr) 425px" }}
        gridGap="30px"
      >
        <GridItem>
          {backButtonLabel && (
            <Box>
              <BackButton
                backButtonLabel={backButtonLabel}
                onBackButtonClick={onBackButtonClick}
              />
            </Box>
          )}
          {backButtonComponent && (
            <Box>
              {backButtonComponent}
            </Box>
          )}
          <Flex flexGap="20px" marginTop="small">
            <FlexItem>
              <Box
                style={{
                  backgroundColor: "#FFFFFF",
                  width: "100px",
                  height: "100px",
                  padding: "2rem",
                  backgroundImage: `url(${logoUrl})`,
                  backgroundSize: "60px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "6px",
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
            {slideData && (
              <>
                <Box>
                  <HR />
                </Box>
                <Box>
                  <EmblaCarousel slides={slideData} options={{ loop: false }} />
                </Box>
              </>
            )}
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
