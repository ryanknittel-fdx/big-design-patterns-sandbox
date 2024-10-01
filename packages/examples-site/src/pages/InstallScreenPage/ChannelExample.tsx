import React, { FunctionComponent, useState } from "react";
import { Flex, FlexItem, Table } from "@bigcommerce/big-design";
import { Page } from "@bigcommerce/big-design-patterns";
import {
  AdvancedPanel as Panel,
  InstallScreen,
  MagicIcon,
} from "bigcommerce-design-patterns";
import ChannelCard from "./ChannelExample/ChannelCard";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

import { CopyBlock, nord as codecolor } from "react-code-blocks";
import InstallScreenAppExample from "./AppExample";

const InstallScreenChannel: FunctionComponent = () => {
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
    <>
      <InstallScreen
        backButtonLabel="Channels"
        onBackButtonClick={() => {
          navigate("/");
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

      <Page>
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
      </Page>
    </>
  );
};

export default InstallScreenChannel;
