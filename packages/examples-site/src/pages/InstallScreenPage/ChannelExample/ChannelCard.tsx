import React, { useState } from "react";
import {
  Box,
  Button,
  Fieldset,
  FormGroup,
  Input,
  Radio,
  Select,
} from "@bigcommerce/big-design";
import { CheckIcon, CloseIcon } from "@bigcommerce/big-design-icons";

const ChannelCard = () => {
  const [formData, setFormData] = useState({
    storefrontName: "My Catalyst Storefront",
    storefrontLanguage: "en-US",
    createSampleProducts: "yes",
    isLoading: false,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLanguageChange = (val: string) =>
    setFormData((prev) => ({ ...prev, ["storefrontLanguage"]: val }));

  const [storefrontNameError, setStorefrontNameError] = useState("");

  const validateStorefrontName = () => {
    setStorefrontNameError(
      formData.storefrontName.length > 2
        ? ""
        : "A name of at least 3 characters is required"
    );
  };

  return (
    <>
      <FormGroup>
        <Input
          name="storefrontName"
          label="Storefront name"
          onChange={handleInputChange}
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
          filterable={true}
          label="Language"
          maxHeight={300}
          onOptionChange={handleLanguageChange}
          options={[
            { value: "en-US", content: "English (en-US)" },
            { value: "es-MX", content: "Spanish (en-MX)" },
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
            onChange={handleInputChange}
            value="sample-data"
          />
          <Radio
            name="createSampleProducts"
            radioGroup="createSampleProducts"
            checked={formData.createSampleProducts === "existing-channel"}
            label="Import from existing channel"
            onChange={handleInputChange}
            value="existing-channel"
          />
        </FormGroup>
      </Fieldset>

      <Box marginTop="xxLarge">
        <>
          <Button
            type="submit"
            variant="primary"
            isLoading={formData.isLoading}
          >
            Create
          </Button>
        </>
      </Box>
    </>
  );
};

export default ChannelCard;
