import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Link,
  Box,
  Fieldset,
  Form,
  FormGroup,
  Input,
  Radio,
  Select,
} from "@bigcommerce/big-design";
import { InstallScreen } from "bigcommerce-design-patterns";
import { AutoAwesomeIcon as MagicIcon } from "@bigcommerce/big-design-icons";
import { useNavigate } from "react-router";

/**
 * Interface representing the structure of form data used in the component.
 */
interface FormDataType {
  storefrontName: string;
  storefrontLanguage: string;
  createSampleProducts: string;
  isLoading: boolean;
}

/**
 * Interface for the properties of the ChannelCard component.
 */
interface ChannelCardProps {
  /**
   * Callback function to handle changes in the form data.
   * @param data - The updated form data object.
   */
  onFormDataChange: (data: FormDataType) => void;
}

/**
 * ChannelCard component.
 * Renders a form to configure the initial storefront settings such as name, language, and product data import.
 *
 * @param {ChannelCardProps} props - Properties passed to the component.
 * @returns {JSX.Element} The rendered ChannelCard component.
 */
const ChannelCard: FunctionComponent<ChannelCardProps> = ({
  onFormDataChange,
}) => {
  // State to store form data
  const [formData, setFormData] = useState<FormDataType>({
    storefrontName: "My Catalyst Storefront",
    storefrontLanguage: "en-US",
    createSampleProducts: "yes",
    isLoading: false,
  });

  /**
   * Handles changes in the form fields and updates the form data state.
   *
   * @param {keyof FormDataType} name - The name of the form field being updated.
   * @param {string} value - The new value of the form field.
   */
  const handleDataChange = (name: keyof FormDataType, value: string) => {
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    onFormDataChange(newFormData);
  };

  // State to track the validation error message for the storefront name
  const [storefrontNameError, setStorefrontNameError] = useState("");

  /**
   * Validates the storefront name field to ensure it meets the minimum length requirement.
   */
  const validateStorefrontName = () => {
    setStorefrontNameError(
      formData.storefrontName.length > 2
        ? ""
        : "A name of at least 3 characters is required"
    );
  };

  /**
   * Passes the initial form data to the parent component when the component is mounted or formData changes.
   */
  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  return (
    <Form
      fullWidth
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
      marginBottom="large"
    >
      <FormGroup>
        <Input
          name="storefrontName"
          label="Storefront name"
          onChange={(e) =>
            handleDataChange(
              e.target.name as keyof FormDataType,
              e.target.value
            )
          }
          onBlur={validateStorefrontName}
          placeholder="Enter a name for your storefront"
          type="text"
          required
          value={formData.storefrontName}
          error={storefrontNameError}
        />
      </FormGroup>

      <FormGroup>
        <Select
          name="storefrontLanguage"
          description="Set the base language for shopper facing content."
          filterable
          label="Language"
          maxHeight={300}
          onOptionChange={(value) =>
            handleDataChange("storefrontLanguage", value || "")
          }
          options={[
            { value: "en-US", content: "English (en-US)" },
            { value: "es-MX", content: "Spanish (es-MX)" },
          ]}
          placement="bottom-start"
          required
          value={formData.storefrontLanguage}
        />
      </FormGroup>

      <Fieldset legend="Import product data">
        <FormGroup>
          <Radio
            name="createSampleProducts"
            radioGroup="createSampleProducts"
            checked={formData.createSampleProducts === "sample-data"}
            label="Use sample data"
            onChange={(e) =>
              handleDataChange(
                e.target.name as keyof FormDataType,
                e.target.value
              )
            }
            value="sample-data"
          />
          <Radio
            name="createSampleProducts"
            radioGroup="createSampleProducts"
            checked={formData.createSampleProducts === "existing-channel"}
            label="Import from existing channel"
            onChange={(e) =>
              handleDataChange(
                e.target.name as keyof FormDataType,
                e.target.value
              )
            }
            value="existing-channel"
          />
        </FormGroup>
      </Fieldset>
    </Form>
  );
};

/**
 * InstallScreenChannel component.
 * Renders the installation screen for setting up a new Catalyst storefront.
 *
 * @returns {JSX.Element} The rendered InstallScreenChannel component.
 */
const InstallScreenChannel: FunctionComponent = () => {
  const navigate = useNavigate();

  // Configuration object for the app details
  const app = {
    name: "Catalyst",
    termsOfServiceURL: "https://www.bigcommerce.com/legal/terms/",
    privacyPolicyURL: "https://www.bigcommerce.com/legal/privacy/",
    logoURL: "./assets/images/icons/bigc-inverted-black.svg",
    developer: {
      name: "BigCommerce",
      url: "#",
    },
    summary: "Fully composable storefront using React components",
    features: [
      { label: "Fully composable", icon: <MagicIcon /> },
      { label: "High Performance", icon: <MagicIcon /> },
      { label: "Built by BigCommerce", icon: <MagicIcon /> },
    ],
    screenshots: [
      {
        alt: "skyline",
        imageUrl: "./assets/images/demo/catalyst-demo-screen.png",
        thumbnailUrl: "./assets/images/demo/catalyst-demo-screen.png",
      },
      {
        alt: "r35",
        imageUrl: "./assets/images/demo/makeswift-demo-screen.png",
        thumbnailUrl: "./assets/images/demo/makeswift-demo-screen.png",
      },
      {
        alt: "custom",
        imageUrl: "./assets/images/demo/catalyst-demo-screen.png",
        thumbnailUrl: "./assets/images/demo/catalyst-demo-screen.png",
      },
    ],
    description: `
      <h3>About</h3>
      <p>Our newest storefront solution gives you more flexibility to build how you choose. Catalyst offers unparalleled scalability and performance, enabling swift global expansion with multi-lingual capabilities and research-backed shopper experiences optimized for high conversion rates. Its robust infrastructure ensures your e-commerce platform is always reliable, providing a seamless customer experience that drives growth and revenue.</p>
      <h3>Benefits</h3>
      <p><strong>Modern tech-stack</strong> A developer-first approach includes a fully customizable UI kit & comprehensive GraphQL Storefront API client, all optimized for Next.js and React Server Components.</p>
      <p><strong>Page building with Makeswift</strong> Enhance your marketing efforts with Catalyst's integrated Makeswift visual editor, allowing you to create engaging content effortlessly & without touching code.</p>
      <p><a href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/InstallScreenPage/ChannelExample.tsx" target="_blank">View source code of this pattern</a></p>
      `,
    scopesDenied: ["write_customers"],
  };

  // Copy texts used in the InstallScreen component
  const copy = {
    panelHeader: `Create a new Catalyst Storefront`,
    backButton: "Channels",
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
    install: "Create Storefront",
    cancel: "Cancel",
    price: "$0.00",
    rating: "4.5",
    partnerTier: "Elite",
    scopesAllowed: ["read_products", "write_orders"],
    scopesDenied: ["write_customers"],
  };

  // State to track form data changes
  const [formData, setFormData] = useState<FormDataType>();

  /**
   * Handles changes to the form data and updates the state.
   *
   * @param {FormDataType} data - The updated form data object.
   */
  const handleFormDataChange = (data: FormDataType) => {
    setFormData(data);
  };

  /**
   * Handles the install button click event.
   * Currently, it shows an alert with the form data.
   */
  const handleInstallButtonClick = () => {
    window.alert(
      "Installing catalyst storefront with data: " + JSON.stringify(formData)
    );
  };

  return (
    <InstallScreen
      onBackButtonClick={() => {
        navigate("/");
      }}
      app={app}
      onInstallButtonClick={handleInstallButtonClick}
      copy={copy}
      customForm={<ChannelCard onFormDataChange={handleFormDataChange} />}
      backgroundSrc="./assets/images/hero-bg.svg"
    />
  );
};

export default InstallScreenChannel;
