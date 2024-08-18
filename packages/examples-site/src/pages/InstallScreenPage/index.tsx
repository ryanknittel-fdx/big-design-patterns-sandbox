import React, { FunctionComponent, useState } from "react";
import {
  Box,
  Flex,
  FlexItem,
  Text,
  H2,
  HR,
  Table,
  Input,
  FormGroup,
  Select,
  Fieldset,
  Radio,
  Button,
} from "@bigcommerce/big-design";
import {
  CardGrid,
  Page,
  AdvancedPanel as Panel,
  MagicIcon,
  InstallScreen,
} from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

import { CopyBlock, nord as codecolor } from "react-code-blocks";
import InstallScreenAppExample from "./AppExample";
import FullWidthExampleBox from "./FullWidthExampleBox";
import ChannelCard from "./ChannelExample/ChannelCard";
import InstallScreenChannelExample from "./ChannelExample";

const InstallScreenPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const copyBlockProps = {
    language: "jsx",
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: true,
    theme: codecolor,
    customStyle: {
      width: "97%",
      minHeight: "45px",
      overflow: "scroll",
    },
  };

  return (
    <Page
      headerTitle="Install Screens"
      headerBackButtonLabel="Back to patterns"
      onHeaderBackButtonClick={() => navigate("/")}
      pageDescription={
        <Text color="secondary60">
          Install screens are used to inform the user about a feature and help
          them activate it.
        </Text>
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <H2>App Install</H2>
        <FullWidthExampleBox>
          <InstallScreenAppExample />
        </FullWidthExampleBox>

        <Panel headerTitle="Code: App Install">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import AppCard from "./AppCard";
import { InstallScreen, MagicIcon } from "bigcommerce-design-patterns";

export const InstallScreenAppExample = () => {
  return (
    <InstallScreen
      backButtonLabel="Channels"
      onBackButtonClick={() => {
        window.alert("Back button clicked");
      }}
      logoUrl="https://placeholderurl.com/logo.png" // Replace with actual logo URL
      headerTitle="Page Title"
      headerLink={{
        text: "BigCommerce",
        url: "#",
      }}
      headerDescription="Fully composable storefront using React components"
      featureTags={[
        { label: "Storefront", icon: <MagicIcon /> },
        { label: "Composable", icon: <MagicIcon /> },
      ]}
      slideData={[
        {
          text: "skyline",
          img: "https://storage.googleapis.com/bigcommerce-developers/images/demo_images/catalyst-demo-screen.png",
        },
        {
          text: "r35",
          img: "https://storage.googleapis.com/bigcommerce-developers/images/demo_images/makeswift-demo-screen.png",
        },
        {
          text: "custom",
          img: "https://storage.googleapis.com/bigcommerce-developers/images/demo_images/makeswift-demo-screen.png",
        },
      ]}
      about="Our newest storefront solution gives you more flexibility to build how you choose. Catalyst offers unparalleled scalability and performance, enabling swift global expansion with multi-lingual capabilities and research-backed shopper experiences optimized for high conversion rates. Its robust infrastructure ensures your e-commerce platform is always reliable, providing a seamless customer experience that drives growth and revenue."
      benefits={[
        {
          title: "Modern tech-stack",
          description:
            "A developer-first approach includes a fully customizable UI kit & comprehensive GraphQL Storefront API client, all optimized for Next.js and React Server Components.",
        },
        {
          title: "Page building with Makeswift",
          description:
            "Enhance your marketing efforts with Catalyst's integrated Makeswift visual editor, allowing you to create engaging content effortlessly & without touching code.",
        },
      ]}
      tags={[
        "Fully composable",
        "Composable",
        "Technical precision",
        "React components",
        "Next.js",
      ]}
      panelHeader="Your Panel Header" // Replace with actual panel header
      panelContent={<AppCard />} // Replace with actual panel content
    />
  );
};`}
              />
            </FlexItem>
          </Flex>
        </Panel>

        <Box>
        <HR />
        </Box>

        <H2>Channel Install</H2>
        <FullWidthExampleBox>
          <InstallScreenChannelExample />
        </FullWidthExampleBox>

        <Panel headerTitle="Code: Channel Install">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import { InstallScreen } from "bigcommerce-design-patterns";

<InstallScreen text=""Create a new Catalyst storefront" panel={<ChannelCard />} />`}
              />
            </FlexItem>
          </Flex>
        </Panel>

        <Panel headerTitle="Props" contentsPadding={false}>
          <Table
            columns={[
              {
                header: "Prop Name",
                hash: "propName",
                render: ({ propName }) => propName,
              },
              {
                header: "Type",
                hash: "type",
                render: ({ type }) => type,
              },
              {
                header: "Default",
                hash: "default",
                render: ({ default: defaultValue }) => defaultValue.toString(),
              },
              {
                header: "Description",
                hash: "description",
                render: ({ description }) => description,
              },
              {
                header: "Required",
                hash: "required",
                render: ({ required }) => (required ? "Yes" : "No"),
              },
            ]}
            items={[
              {
                propName: "items",
                type: "array",
                default: "-",
                description:
                  "Array of entries for content or actions. See above for examples for each. If you don't include the items prop, a loading skeleton will render.",
                required: false,
              },
            ]}
            stickyHeader
          />
        </Panel>
      </Flex>
    </Page>
  );
};

export default InstallScreenPage;
