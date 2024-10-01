import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Table } from "@bigcommerce/big-design";
import { Page } from "@bigcommerce/big-design-patterns";
import {
  AdvancedPanel as Panel,
  InstallScreen,
  MagicIcon,
} from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

import { CopyBlock, nord as codecolor } from "react-code-blocks";

const InstallScreenApp: FunctionComponent = () => {
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
        backButtonLabel="Apps"
        onBackButtonClick={() => {
          navigate("/");
        }}
        app={{
          logoURL:
            "https://s3.amazonaws.com/integrated-apps/cxtrelby/ikulgjwh.png",
          name: "Buy Buttons",
          developer: {
            name: "BigCommerce",
            url: "#",
            tier: "ELITE"
          },
          summary:
            "Sell on other websites with the power of your BigCommerce store",
          features: [
            { label: "Multi-storefront support", icon: <MagicIcon /> },
            { label: "Built by BigCommerce", icon: <MagicIcon /> },
          ],
          screenshots: [
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
          ],
          permissions: [
            "View basic store configuration settings",
            "View general store information and settings",
            "View and modify orders",
            "View and modify products",
          ],
          price: 'Free',
          rating: 4.5,
          description:`<h4 id="h4_your_brand__everywhere">Your brand, everywhere</h4><p>Buy Buttons allow you to sell on other websites with the power of your BigCommerce store.</p><p>Buy Buttons can be used to:</p><ul><li><p>Add commerce to your blog (such as WordPress)</p></li><li><p>Market your products on Tumblr</p></li><li><p>Easily embed straight-to-checkout links into marketing emails</p></li><li><p>Make it easy to add-to-cart directly from social media</p></li><li><p>...and much more!</p></li></ul><h4 id="h4_flexible__customizable">Flexible, Customizable</h4><p>The Buy Button is fully responsive so it looks great on mobile and desktop, and can scale intelligently on responsive websites. It requires no JavaScript which makes it compatible with any website where you have the ability to add HTML.</p><p>You can customize the display of your Buy Button by picking your own colors, fonts, and text.</p><h4 id="h4_conversion_tracking">Conversion Tracking</h4><p>Advanced users can also integrate Google Analytics to easily track views and conversions originating from the Buy Button.</p>`,
          privacyPolicyURL: 'https://www.bigcommerce.com/legal/privacy/',
          termsOfServiceURL: 'https://www.bigcommerce.com/legal/terms/',
        }}
        onInstallButtonClick={() => {
          window.alert("Install button clicked");
        }}
      />

      <Page>
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

export default InstallScreenApp;
