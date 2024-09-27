import React, { FunctionComponent } from "react";
import {
  Box,
  H2,
  Select,
  ProgressCircle,
} from "@bigcommerce/big-design";
import { Page, Header } from "@bigcommerce/big-design-patterns";

const SmallLoader: FunctionComponent = () => {
  return <ProgressCircle size="xxSmall" />;
};

const SelectPage: FunctionComponent = () => {
  return (
    <Page
      header={
        <Header
          title="BigDesign pattern library"
          description="Code samples for our commonly used patterns."
        />
      }
    >
      <H2>Select Sample</H2>
      <Box marginBottom="large">
        <Select
          label="Select"
          placeholder=""
          options={[
            { value: null, content: "", icon: <SmallLoader /> }
          ]}
          value={null}
          disabled={true}
          onOptionChange={() => { }}
        />
      </Box>
    </Page>
  );
};

export default SelectPage;
