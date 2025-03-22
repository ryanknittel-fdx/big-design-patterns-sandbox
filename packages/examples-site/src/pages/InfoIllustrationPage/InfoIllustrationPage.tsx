import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Text, Table } from "@bigcommerce/big-design";
import {
  InfoIllustration,
  AdvancedPanel as Panel,
} from "bigcommerce-design-patterns";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { CopyBlock, nord as codecolor } from "react-code-blocks";

const PageInfographics: FunctionComponent = () => {
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
          description="Illustrations to convey status on errors and empty spaces."
          title="Info Illustrations"
          backLink={{
            text: "Back to patterns",
            onClick: () => navigate("/"),
            href: "#",
          }}
        />
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <Panel headerTitle="Example">
          <Flex
            justifyContent="center"
            alignItems="center"
            flexGap={theme.spacing.xxxLarge}
            flexDirection="column"
          >
            <InfoIllustration
              heading="Information heading"
              actionPrimary={{
                text: "Main CTA",
              }}
              actionSecondary={{ text: "Secondary CTA" }}
            >
              <Text color="secondary60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Text>
            </InfoIllustration>

            <CopyBlock
              {...copyBlockProps}
              text={`<InfoIllustration
  heading="Information heading"
  actionPrimary={{
    text: "Main CTA",
  }}
  actionSecondary={{ text: "Secondary CTA" }}
>
  <Text color="secondary60">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Text>
</InfoIllustration>`}
            />
          </Flex>
        </Panel>
        <FlexItem>
          <Panel headerTitle="Illustration variant examples">
            <Flex flexDirection="column" flexGap={theme.spacing.xxxLarge}>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration variant="info1" icon="info" />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="info1" icon="info" />`}
                />
              </Flex>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration
                  variant="info2"
                  pattern="down"
                  icon="orders"
                />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="info2" pattern="down" icon="orders" />`}
                />
              </Flex>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration
                  variant="info3"
                  pattern="square"
                  icon="categories"
                />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="info3" pattern="square" icon="categories" />`}
                />
              </Flex>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration
                  variant="info4"
                  pattern="up"
                  icon="products"
                />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="info4" pattern="up" icon="products" />`}
                />
              </Flex>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration variant="success" icon="success" />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="success" icon="success" />`}
                />
              </Flex>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration variant="warning" icon="permission" />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="warning" icon="permission" />`}
                />
              </Flex>
              <Flex
                flexGap={theme.spacing.xLarge}
                flexDirection="column"
                alignItems="center"
              >
                <InfoIllustration variant="error" icon="server" />
                <CopyBlock
                  {...copyBlockProps}
                  text={`<InfoIllustration variant="error" icon="server" />`}
                />
              </Flex>
            </Flex>
          </Panel>
        </FlexItem>
        <FlexItem>
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
                  render: ({ default: defaultValue }) =>
                    defaultValue ? defaultValue.toString() : "-",
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
                  propName: "children",
                  type: "ReactNode",
                  default: "-",
                  description:
                    "Child components to be rendered within the illustration.",
                  required: false,
                },
                {
                  propName: "variant",
                  type: '"info1" | "info2" | "info3" | "info4" | "success" | "warning" | "error"',
                  default: '"info1"',
                  description: "Visual style variant of the illustration.",
                  required: false,
                },
                {
                  propName: "pattern",
                  type: '"up" | "down" | "square" | "cross"',
                  default: "-",
                  description:
                    "Background pattern type, which changes based on the variant.",
                  required: false,
                },
                {
                  propName: "icon",
                  type: '"info" | "warning" | "success" | "empty" | "template" | "brands" | "server" | "permission" | "page" | "pickup" | "list" | "options" | "categories" | "products" | "orders" | "analytics" | "promotions"',
                  default: '"info"',
                  description:
                    "Type of icon to display within the illustration.",
                  required: false,
                },
                {
                  propName: "heading",
                  type: "string",
                  default: "-",
                  description: "Optional heading text.",
                  required: false,
                },
                {
                  propName: "actionPrimary",
                  type: "InfoImageAction",
                  default: "-",
                  description: "Primary action properties.",
                  required: false,
                },
                {
                  propName: "actionSecondary",
                  type: "InfoImageAction",
                  default: "-",
                  description: "Secondary action properties.",
                  required: false,
                },
              ]}
              stickyHeader
            />
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PageInfographics;
