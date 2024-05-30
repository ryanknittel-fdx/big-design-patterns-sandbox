import React, { FunctionComponent, useState } from "react";
import {
  Flex,
  Button,
  Text,
  Panel,
  Box,
  H3,
  FlexItem,
  Grid,
} from "@bigcommerce/big-design";
import Page from "../../components/page/Page";
import { useNavigate } from "react-router";

import Hero from "../../components/hero/Hero";
import { theme } from "@bigcommerce/big-design-theme";
import { Link } from "react-router-dom";

const PageFeaturedContent: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page featureBg={true} showHeader={false}>
      <Hero
        heading="Hero heading"
        mediaContent={<img src="./assets/images/page-hero-image.png" />}
      >
        <Flex flexDirection={"column"}>
          <Text color="secondary70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque a sapien elit. Nullam vel leo enim. Fusce molestie vel
            ex quis aliquam. Quisque bibendum lorem id neque tempus pretium in
            quis metus.
            <ul>
              <li>Proin in tempor nulla. </li>
              <li>Nam commodo at lorem sed vestibulum.</li>
              <li>
                Morbi purus ex, scelerisque nec malesuada in, faucibus et metus.
              </li>
              <li>Pellentesque felis erat, scelerisque a dapibus sed.</li>
            </ul>
          </Text>
          <Flex>
            <Button>Main CTA</Button>
            <Button variant="subtle" onClick={() => navigate("/")}>
              Back to patterns
            </Button>
          </Flex>
        </Flex>
      </Hero>
      <Grid
        marginTop="xxxLarge"
        gridColumns={{
            mobile: '1fr',
            tablet: '75% 25%',
        }}
      >
          <Panel header="Panel for your contents">
            <Flex
              flexGap={theme.spacing.large}
              flexDirection={{ mobile: "column", tablet: "row" }}
            >
              <Box border="box" padding="medium" borderRadius="normal">
                <H3>Item heading</H3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Link to="#">View More</Link>
              </Box>
              <Box border="box" padding="medium" borderRadius="normal">
                <H3>Item heading</H3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Link to="#">View More</Link>
              </Box>
              <Box border="box" padding="medium" borderRadius="normal">
                <H3>Item heading</H3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Link to="#">View More</Link>
              </Box>
              <Box border="box" padding="medium" borderRadius="normal">
                <H3>Item heading</H3>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
                <Link to="#">View More</Link>
              </Box>
            </Flex>
          </Panel>

          <Panel>
            <Box borderBottom="box" paddingBottom="large" role="section" marginBottom="large">
            <H3>Aside one</H3>
            <Text color="secondary70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            </Box>
            <Box role="section">
            <H3>Aside two</H3>
            <ul>
              <li>
                <Link to={"#"}>One</Link>
              </li>
              <li>
                <Link to={"#"}>Two</Link>
              </li>
              <li>
                <Link to={"#"}>Three</Link>
              </li>
            </ul>
            </Box>
          </Panel>

      </Grid>
    </Page>
  );
};

export default PageFeaturedContent;
