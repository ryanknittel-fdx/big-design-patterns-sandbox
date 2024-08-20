import React from "react";
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

export default InstallScreenChannelExample;
