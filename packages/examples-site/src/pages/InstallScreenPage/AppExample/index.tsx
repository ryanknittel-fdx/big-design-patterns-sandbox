import React from "react";
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

export default InstallScreenAppExample;
