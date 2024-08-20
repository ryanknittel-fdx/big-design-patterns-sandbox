import React from "react";
import AppCard from "./AppCard";
import { InstallScreen, MagicIcon } from "bigcommerce-design-patterns";

export const InstallScreenAppExample = () => {
  return (
    <InstallScreen
      backButtonLabel="Channels"
      onBackButtonClick={() => {
        window.alert("Back button clicked");
      }}
      logoUrl="https://placeholderurl.com/logo.png" // Replace with actual logo URL
      headerTitle="Buy Buttons"
      headerLink={{
        text: "BigCommerce",
        url: "#",
      }}
      headerDescription="Fully composable storefront using React components"
      featureTags={[
        { label: "Storefront", icon: <MagicIcon /> },
        { label: "Composable", icon: <MagicIcon /> },
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
};

export default InstallScreenAppExample;
