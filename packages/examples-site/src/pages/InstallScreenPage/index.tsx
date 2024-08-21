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
                text={`import React from "react";
import AppCard from "./AppCard";
import { InstallScreen, MagicIcon } from "bigcommerce-design-patterns";

export const InstallScreenAppExample = () => {
  return (
    <InstallScreen
      backButtonLabel="Apps"
      onBackButtonClick={() => {
        window.alert("Back button clicked");
      }}
      logoUrl="https://s3.amazonaws.com/integrated-apps/cxtrelby/ikulgjwh.png"
      headerTitle="Buy Buttons"
      headerLink={{
        text: "BigCommerce",
        url: "#",
      }}
      headerDescription="Sell on other websites with the power of your BigCommerce store"
      featureTags={[
        { label: "Multi-storefront support", icon: <MagicIcon /> },
        { label: "Built by BigCommerce", icon: <MagicIcon /> },
      ]}
      slideData={[
        {
          alt: "",
          imageUrl:
            "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Ftmolnird%2Fhdjwibxn.png&w=3840&q=75",
        },
        {
          alt: "",
          imageUrl:
            "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Fkgexoanp%2Fpuchfits.png&w=3840&q=75",
        },
        {
          alt: "",
          imageUrl:
            "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Fmkfubowl%2Fbgwtdqoz.png&w=3840&q=75",
        },
      ]}
      about="Your brand, everywhere. Buy Buttons allow you to sell on other websites with the power of your BigCommerce store. Buy Buttons can be used to add commerce to your blog (such as WordPress), market your products on Tumblr, easily embed straight-to-checkout links into marketing emails, and make it easy to add-to-cart directly from social media."
      benefits={[
        {
          title: "Flexible, Customizable",
          description:
            "A developer-first approach includes a fully customizable UI kit & comprehensive GraphQL Storefront API client, all optimized for Next.js and React Server Components. You can customize the display of your Buy Button by picking your own colors, fonts, and text.",
        },
        {
          title: "Conversion Tracking",
          description:
            "Advanced users can also integrate Google Analytics to easily track views and conversions originating from the Buy Button.",
        },
      ]}
      panelHeader="Easily install Buy Buttons now"
      panelContent={<AppCard />}
    />
  );
};

export default InstallScreenAppExample;`}
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
                text={`import React from "react";
import ChannelCard from "./ChannelCard";
import { InstallScreen, MagicIcon } from "bigcommerce-design-patterns";

export const InstallScreenChannelExample = () => {
  return (
    <InstallScreen
      backButtonLabel="Channels"
      onBackButtonClick={() => {
        window.alert("Back button clicked");
      }}
      logoUrl="/assets/images/icons/bigc-inverted-black.svg"
      headerTitle="Catalyst"
      headerLink={{
        text: "BigCommerce",
        url: "#",
      }}
      headerDescription="Fully composable storefront using React components"
      featureTags={[
        { label: "Fully composable", icon: <MagicIcon /> },
        { label: "High performance", icon: <MagicIcon /> },
        { label: "Supported by BigCommerce", icon: <MagicIcon /> },
      ]}
      slideData={[
        {
          alt: "skyline",
          imageUrl: "/assets/images/demo/catalyst-demo-screen.png",
        },
        {
          alt: "r35",
          imageUrl: "/assets/images/demo/makeswift-demo-screen.png",
        },
        {
          alt: "custom",
          imageUrl: "/assets/images/demo/catalyst-demo-screen.png",
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
      panelHeader="Create a new Catalyst Storefront"
      panelContent={<ChannelCard />}
    />
  );
};

export default InstallScreenChannelExample;`}
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
