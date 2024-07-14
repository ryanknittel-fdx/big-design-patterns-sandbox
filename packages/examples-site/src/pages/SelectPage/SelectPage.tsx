import React, { FunctionComponent } from "react";
import {
  Box,
  H2,
  Select,
  ProgressCircle,
} from "@bigcommerce/big-design";
import { Page } from "bigcommerce-design-patterns";

const SmallLoader: FunctionComponent = () => {
  return <ProgressCircle size="xxSmall" />;
};

const SelectPage: FunctionComponent = () => {
  return (
    <Page
      headerTitle="BigDesign pattern library"
      pageDescription={<>Code samples for our commonly used patterns.</>}
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
