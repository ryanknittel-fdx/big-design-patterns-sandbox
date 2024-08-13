import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Text, HR, Table, H4 } from "@bigcommerce/big-design";
import {
  CardGrid,
  Page,
  AdvancedPanel as Panel,
} from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

import { CopyBlock, nord as codecolor } from "react-code-blocks";

const CardGridPage: FunctionComponent = () => {
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
      headerTitle="Card Grids"
      headerBackButtonLabel="Back to patterns"
      onHeaderBackButtonClick={() => navigate("/")}
      pageDescription={
        <Text color="secondary60">
          Card grids are used to showcase relevant resources or actions in a
          condensed, organized manner.
        </Text>
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <Panel headerTitle="Example: Content">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <FlexItem>
              <CardGrid
                items={[
                  {
                    heading: <H4>Helpful resource one</H4>,
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
                    href: "https://developer.bigcommerce.com",
                  },
                  {
                    heading: <H4>Helpful resource two</H4>,
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
                    href: "https://developer.bigcommerce.com",
                  },
                ]}
              />
            </FlexItem>
            <FlexItem>
              <HR />
            </FlexItem>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import { CardGrid } from "bigcommerce-design-patterns";

<CardGrid items={[
  {
    heading: <H4>Helpful resource one</H4>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
    href: "https://developer.bigcommerce.com",
  },
  {
    heading: <H4>>Helpful resource two<H4>,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. ",
    href: "https://developer.bigcommerce.com",
  },
]} />`}
              />
            </FlexItem>
          </Flex>
        </Panel>

        <Panel headerTitle="Example: Actions">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <FlexItem>
              <CardGrid
                items={[
                  {
                    heading: <H4>Grid Item 1</H4>,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet.`,
                    button: {
                      text: "Connect",
                      onClick: () => alert("Connected!"),
                    },
                    icon: (
                      <img
                        src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                        height="45"
                        width="45"
                      />
                    ),
                    format: "action",
                  },
                  {
                    heading: <H4>Grid Item 2</H4>,
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet.`,
                    button: {
                      text: "Connect",
                      onClick: () => alert("Connected!"),
                    },
                    icon: (
                      <img
                        src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                        height="45"
                        width="45"
                      />
                    ),
                    format: "action",
                  },
                ]}
              />
            </FlexItem>
            <FlexItem>
              <HR />
            </FlexItem>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import { CardGrid } from "bigcommerce-design-patterns";

<CardGrid
  items={[
    {
      heading: <H4>Grid Item 1</H4>,
      description: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet.\`,
      button: {
        text: "Connect",
        onClick: () => alert("Connected!"),
      },
      icon: (
        <img
          src=
            "https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
          height="45"
          width="45"
        />
      ),
      format: "action",
    },
    {
      heading: <H4>Grid Item 2</H4>,
      description: \`Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aenean euismod bibendum laoreet. Proin gravida dolor sit amet.\`,
      button: {
        text: "Connect",
        onClick: () => alert("Connected!"),
      },
      icon: (
        <img
          src=
            "https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
          height="45"
          width="45"
        />
      ),
      format: "action",
    },
  ]}
/>`}
              />
            </FlexItem>
          </Flex>
        </Panel>
        <Panel headerTitle="Example: Skeleton">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <FlexItem>
              <CardGrid
                items={[
                  {
                    skeleton: {
                      heading: true,
                      description: true,
                      button: true,
                      icon: true,
                    },
                  },
                  {
                    skeleton: {
                      heading: true,
                      description: true,
                    },
                  },
                ]}
              />
            </FlexItem>
            <FlexItem>
              <HR />
            </FlexItem>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import { CardGrid } from "bigcommerce-design-patterns";

<CardGrid
  items={[
    {
      skeleton: {
        heading: true,
        description: true,
        button: true,
        icon: true,
      }
    },
    {
      skeleton: {
        heading: true,
        description: true,
      }
    }
  ]}
/>`}
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
      </Flex>
    </Page>
  );
};

export default CardGridPage;
