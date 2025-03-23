import React, { FunctionComponent } from "react";
import {
  Flex,
  FlexItem,
  Text,
  HR,
  Table,
  H4,
  H3,
} from "@bigcommerce/big-design";
import { CardGrid, AdvancedPanel as Panel } from "bigcommerce-design-patterns";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";

import { CopyBlock, nord as codecolor } from "react-code-blocks";

const CardGridPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const copyBlockProps = {
    language: "jsx",
    showLineNumbers: true,
    startingLineNumber: 1,
    wrapLongLines: true,
    theme: codecolor,
    customStyle: {
      width: "100%",
      minHeight: "45px",
    },
  };

  return (
    <Page
      header={
        <Header
          title="Card Grids"
          description="Card grids are used to showcase relevant resources or actions in a condensed, organized manner."
          backLink={{
            text: "Back to patterns",
            onClick: () => navigate("/"),
            href: "#",
          }}
        />
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
                format="action"
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
  format="action"
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
    },
  ]}
/>`}
              />
            </FlexItem>
          </Flex>
        </Panel>
        <Panel headerTitle="Example: Skeleton">
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            <H3>Content skeleton</H3>
            <FlexItem>
              <CardGrid />
            </FlexItem>
            <H3>Action skeleton</H3>
            <FlexItem>
              <CardGrid format="action" />
            </FlexItem>
            <FlexItem>
              <HR />
            </FlexItem>
            <FlexItem>
              <CopyBlock
                {...copyBlockProps}
                text={`import { CardGrid } from "bigcommerce-design-patterns";

// Content skeletons
<CardGrid />

// Action skeletons
<CardGrid format="action"/>`}
              />
            </FlexItem>
          </Flex>
        </Panel>

        <Panel headerTitle="CardGridItem Props" contentsPadding={false}>
          <Table
            columns={[
              {
                header: "Prop Name",
                hash: "propName",
                render: ({ propName }) => propName,
              },
              { header: "Type", hash: "type", render: ({ type }) => type },
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
                propName: "button",
                type: "CardGridButtonProps",
                default: "-",
                description: "Button props for the card grid item.",
                required: false,
              },
              {
                propName: "heading",
                type: "React.ReactNode",
                default: "-",
                description: "Heading content for the card grid item.",
                required: false,
              },
              {
                propName: "description",
                type: "string",
                default: "-",
                description: "Description content for the card grid item.",
                required: false,
              },
              {
                propName: "format",
                type: "'action' | 'content'",
                default: "content",
                description:
                  "Defines the format of the card grid item, either 'action' or 'content'.",
                required: false,
              },
              {
                propName: "href",
                type: "string",
                default: "-",
                description: "URL to navigate to when the item is clicked.",
                required: false,
              },
              {
                propName: "hrefTarget",
                type: "string",
                default: "_self",
                description: "Target attribute for the link.",
                required: false,
              },
              {
                propName: "onClick",
                type: "() => void",
                default: "-",
                description: "Function to call when the item is clicked.",
                required: false,
              },
              {
                propName: "icon",
                type: "React.ReactNode",
                default: "-",
                description: "Icon displayed in the card grid item.",
                required: false,
              },
            ]}
            stickyHeader
          />
        </Panel>

        <Panel headerTitle="CardGridButtonProps" contentsPadding={false}>
          <Table
            columns={[
              {
                header: "Prop Name",
                hash: "propName",
                render: ({ propName }) => propName,
              },
              { header: "Type", hash: "type", render: ({ type }) => type },
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
                propName: "text",
                type: "string",
                default: "-",
                description: "Text to display on the button.",
                required: true,
              },
              // Include other ButtonProps if needed
            ]}
            stickyHeader
          />
        </Panel>

        <Panel headerTitle="CardGrid Props" contentsPadding={false}>
          <Table
            columns={[
              {
                header: "Prop Name",
                hash: "propName",
                render: ({ propName }) => propName,
              },
              { header: "Type", hash: "type", render: ({ type }) => type },
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
                type: "CardGridItem[]",
                default: "[{},{}]",
                description:
                  "Array of card grid items to display. Defaults to two empty objects for skeleton rendering",
                required: false,
              },
              {
                propName: "format",
                type: "'action' | 'content'",
                default: "content",
                description:
                  "Defines the format of all card grid items, either 'action' or 'content'.",
                required: false,
              },
              {
                propName: "shadow",
                type: "'raised'",
                default: "-",
                description:
                  "Shadow style to be applied to all card grid items.",
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
