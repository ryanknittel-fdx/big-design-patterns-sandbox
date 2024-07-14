import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Text, HR, Table } from "@bigcommerce/big-design";
import { FeatureTag, MagicIcon, Page, AdvancedPanel as Panel } from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

import { CopyBlock, nord as codecolor } from "react-code-blocks";

const PageFeatureTags: FunctionComponent = () => {
  const navigate = useNavigate();

  const copyBlockProps = {
    language: "jsx",
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLines: true,
    theme: codecolor,
    customStyle: {
      width: "100%",
      minHeight: "45px",
    },
  };

  return (
    <Page
      headerTitle="Feature Tags"
      headerBackButtonLabel="Back to patterns"
      onHeaderBackButtonClick={() => navigate("/")}
      pageDescription={
        <Text color="secondary60">
          Feature tags are used to showcase categories and features of a
          particular asset or application.
        </Text>
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <Panel headerTitle="Example">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <FlexItem>
              <Flex flexGap={theme.spacing.medium}>
                <FlexItem>
                  <FeatureTag label="Tag Text" icon={<MagicIcon />} />
                </FlexItem>
                <FlexItem>
                  <FeatureTag
                    label="Tag Text"
                    icon={<MagicIcon />}
                    isActive={true}
                  />
                </FlexItem>
              </Flex>
            </FlexItem>
            <FlexItem>
              <HR />
            </FlexItem>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import FeatureTag from "../../components/featureTag/FeatureTag";
import { MagicIcon } from "../../components/MagicIcon/MagicIcon";

<FeatureTag label="Tag Text" icon={<MagicIcon />} />
<FeatureTag label="Tag Text" icon={<MagicIcon />} isActive={true} />`}
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
                propName: "label",
                type: "string",
                default: "-",
                description:
                  "The text label displayed next to the icon in the tag.",
                required: true,
              },
              {
                propName: "icon",
                type: "ReactNode",
                default: "-",
                description: "The icon displayed within the tag.",
                required: true,
              },
              {
                propName: "tabIndex",
                type: "number",
                default: "0",
                description:
                  'The tabIndex attribute specifies the tab order of an element (when the "tab" button is used for navigating).',
                required: false,
              },
              {
                propName: "isActive",
                type: "boolean",
                default: "false",
                description:
                  "Indicates whether the feature tag is currently active.",
                required: false,
              },
            ]}
            stickyHeader
          />
        </Panel>
      </Flex>
    </Page>
  );
};

export default PageFeatureTags;
