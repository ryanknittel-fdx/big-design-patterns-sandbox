import React, { FunctionComponent } from "react";
import { Link } from "@bigcommerce/big-design";
import {
  AdvancedPanel as Panel,
  InstallScreen,
  MagicIcon,
} from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";

const InstallScreenApp: FunctionComponent = () => {
  const navigate = useNavigate();

  const app = {
    name: "Buy Buttons",
    termsOfServiceURL: "https://www.bigcommerce.com/legal/terms/",
    privacyPolicyURL: "https://www.bigcommerce.com/legal/privacy/",
    logoURL: "https://s3.amazonaws.com/integrated-apps/cxtrelby/ikulgjwh.png",
    developer: {
      name: "BigCommerce",
      url: "#",
      tier: "ELITE",
    },
    summary: "Sell on other websites with the power of your BigCommerce store",
    features: [
      { label: "Multi-storefront support", icon: <MagicIcon /> },
      { label: "Built by BigCommerce", icon: <MagicIcon /> },
    ],
    screenshots: [
      {
        alt: "",
        imageUrl:
          "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Ftmolnird%2Fhdjwibxn.png&w=3840&q=75",
        thumbnailUrl:
          "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Ftmolnird%2Fhdjwibxn.png&w=3840&q=75",
      },
      {
        alt: "",
        imageUrl:
          "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Fkgexoanp%2Fpuchfits.png&w=3840&q=75",
        thumbnailUrl:
          "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Fkgexoanp%2Fpuchfits.png&w=3840&q=75",
      },
      {
        alt: "",
        imageUrl:
          "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Fmkfubowl%2Fbgwtdqoz.png&w=3840&q=75",
        thumbnailUrl:
          "https://www.bigcommerce.com/_next/image/?url=https%3A%2F%2Fs3.amazonaws.com%2Fintegrated-apps%2Fmkfubowl%2Fbgwtdqoz.png&w=3840&q=75",
      },
    ],
    scopesAllowed: [
      "View basic store configuration settings",
      "View general store information and settings",
      "View and modify orders",
      "View and modify products",
    ],
    scopesDenied: ["Access your password"],
    requireAcknowledgment: true,
    price: "Free",
    rating: 4.5,
    description: `<h4 id="h4_your_brand__everywhere">Your brand, everywhere</h4><p>Buy Buttons allow you to sell on other websites with the power of your BigCommerce store.</p><p>Buy Buttons can be used to:</p><ul><li><p>Add commerce to your blog (such as WordPress)</p></li><li><p>Market your products on Tumblr</p></li><li><p>Easily embed straight-to-checkout links into marketing emails</p></li><li><p>Make it easy to add-to-cart directly from social media</p></li><li><p>...and much more!</p></li></ul><h4 id="h4_flexible__customizable">Flexible, Customizable</h4><p>The Buy Button is fully responsive so it looks great on mobile and desktop, and can scale intelligently on responsive websites. It requires no JavaScript which makes it compatible with any website where you have the ability to add HTML.</p><p>You can customize the display of your Buy Button by picking your own colors, fonts, and text.</p><h4 id="h4_conversion_tracking">Conversion Tracking</h4><p>Advanced users can also integrate Google Analytics to easily track views and conversions originating from the Buy Button.</p>`,
  };

  const copy = {
    panelHeader: `Easily install ${app.name} now`,
    backButton: "Apps",
    price: "Price",
    rating: "Rating",
    partnerTier: "Partner Tier",
    policiesAndTerms: (
      <>
        By clicking install you agree to the <strong>BigCommerce</strong>{" "}
        <Link href="#" target="_blank">
          Terms of Service
        </Link>{" "}
        and <strong>{app.name}</strong>{" "}
        {app.privacyPolicyURL ? (
          <Link href={app.privacyPolicyURL} target="_blank">
            privacy policy
          </Link>
        ) : null}
        {app.privacyPolicyURL && app.termsOfServiceURL ? " and " : null}
        {app.termsOfServiceURL ? (
          <Link href={app.termsOfServiceURL} target="_blank">
            terms of service
          </Link>
        ) : null}
        .
      </>
    ),
    install: "Install",
    scopesAllowed: (
      <>By installing this app, {app.developer.name} will be able to:</>
    ),
    scopesDenied: (
      <>
        {app.developer.name} <strong>will not be able</strong> to:
      </>
    ),
    cancel: "Cancel",
  };

  return (
    <>
      <InstallScreen
        backButtonLabel="Apps"
        onBackButtonClick={() => {
          navigate("/");
        }}
        app={app}
        onInstallButtonClick={(e:MouseEvent) => {
          e.preventDefault();
          window.alert("Install button clicked");
        }}
        copy={copy}
      />
    </>
  );
};

export default InstallScreenApp;
