import React, { FunctionComponent } from "react";
import {
  DashboardLayout,
  AsideCardGrid,
  AsidePanel,
} from "bigcommerce-design-patterns";
import { Panel, Text, Flex, Table, FlexItem } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { CopyBlock, nord as codecolor } from "react-code-blocks";

const DashboardLayoutPage: FunctionComponent = () => {
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

  const quickLinksContent = (
    <AsideCardGrid
      format="action"
      items={[
        {
          heading: "Quick Links",
          description: "Access frequently used resources and documentation.",
          href: "https://developer.bigcommerce.com",
          icon: (
            <img
              src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
              height="45"
              width="45"
            />
          ),
        },
        {
          heading: "Support",
          description:
            "Get help with your integration or development questions.",
          href: "https://support.bigcommerce.com",
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
  );

  const resourcesContent = (
    <AsidePanel title="Resources" padding="medium" headerPadding="medium">
      <AsideCardGrid
        format="action"
        items={[
          {
            heading: "Documentation",
            description:
              "Access our comprehensive API documentation and guides.",
            button: {
              text: "View Docs",
              onClick: () =>
                window.open("https://developer.bigcommerce.com", "_blank"),
            },
          },
          {
            heading: "Support",
            description:
              "Get help with your integration or development questions.",
            button: {
              text: "Contact Support",
              onClick: () =>
                window.open("https://support.bigcommerce.com", "_blank"),
            },
          },
        ]}
      />
    </AsidePanel>
  );

  return (
    <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
      <DashboardLayout
        aside={
          <Flex flexDirection="column" flexGap={theme.spacing.medium}>
            {resourcesContent}
            {quickLinksContent}
          </Flex>
        }
        header={
          <Header
            title="Dashboard Layout"
            description="Dashboard layout is used to create a responsive two-column layout for dashboard interfaces."
            backLink={{
              text: "Back to patterns",
              onClick: () => navigate("/"),
              href: "#",
            }}
          />
        }
      >
        <Panel header="Main Content">
          <Text>
            This dashboard demonstrates the use of both AsidePanel and
            AsideCardGrid components in the aside panel. The AsidePanel provides
            a consistent layout with a header and card grid, while the
            AsideCardGrid below it shows a simpler list of quick links. Both
            components maintain a single-column layout that works well in the
            narrow aside space.
          </Text>
        </Panel>
        <Panel header="Additional Content">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Panel>
      </DashboardLayout>

      <Panel header="Example: Dashboard Layout with AsidePanel and AsideCardGrid">
        <Flex flexDirection="column" flexGap={theme.spacing.medium}>
          <FlexItem>
            <CopyBlock
              {...copyBlockProps}
              text={`import { 
  DashboardLayout, 
  AsidePanel, 
  AsideCardGrid 
} from "bigcommerce-design-patterns";
import { Panel, Text, H4, Flex } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";

  const quickLinksContent = (
    <AsideCardGrid
      format="action"
      items={[
        {
          heading: "Quick Links",
          description: "Access frequently used resources and documentation.",
          href: "https://developer.bigcommerce.com",
          icon: (
            <img
              src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
              height="45"
              width="45"
            />
          ),
        },
        {
          heading: "Support",
          description:
            "Get help with your integration or development questions.",
          href: "https://support.bigcommerce.com",
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
  );

const resourcesContent = (
  <AsidePanel title="Resources" padding="medium" headerPadding="medium">
    <AsideCardGrid
      format="action"
      items={[
        {
          heading: "Documentation",
          description: "Access our comprehensive API documentation and guides.",
          button: {
            text: "View Docs",
            onClick: () => window.open("https://developer.bigcommerce.com", "_blank"),
          },
        },
        {
          heading: "Support",
          description: "Get help with your integration or development questions.",
          button: {
            text: "Contact Support",
            onClick: () => window.open("https://support.bigcommerce.com", "_blank"),
          },
        },
      ]}
    />
  </AsidePanel>
);

return (
  <DashboardLayout
    aside={
      <Flex flexDirection="column" flexGap={theme.spacing.medium}>
        {resourcesContent}
        {quickLinksContent}
      </Flex>
    }
    header={
      <Header
        title="Dashboard Layout"
        description="Dashboard layout is used to create a responsive two-column layout for dashboard interfaces."
      />
    }
  >
    <Panel header="Main Content">
      <Text>
        This dashboard demonstrates the use of both AsidePanel and AsideCardGrid components in the aside panel.
        The AsidePanel provides a consistent layout with a header and card grid, while the AsideCardGrid below
        it shows a simpler list of quick links. Both components maintain a single-column layout that works
        well in the narrow aside space.
      </Text>
    </Panel>
  </DashboardLayout>
);`}
            />
          </FlexItem>
        </Flex>
      </Panel>

      <Panel header="DashboardLayout Props">
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
              propName: "aside",
              type: "React.ReactNode",
              default: "-",
              description:
                "Content to display in the right sidebar (desktop) or bottom section (mobile).",
              required: false,
            },
            {
              propName: "header",
              type: "React.ReactNode",
              default: "-",
              description:
                "Header content to display at the top of the dashboard.",
              required: false,
            },
            {
              propName: "message",
              type: "MessageProps",
              default: "-",
              description: "Message to display below the header.",
              required: false,
            },
            {
              propName: "background",
              type: "Background",
              default: "-",
              description: "Background configuration for the page.",
              required: false,
            },
            {
              propName: "children",
              type: "React.ReactNode",
              default: "-",
              description:
                "Content to display in the main area of the dashboard.",
              required: true,
            },
          ]}
          stickyHeader
        />
      </Panel>

      <Panel header="AsidePanel Props">
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
              propName: "title",
              type: "string",
              default: "-",
              description: "Title to display in the panel header.",
              required: true,
            },
            {
              propName: "format",
              type: "'action' | 'content'",
              default: "content",
              description:
                "Format of the card grid items, either 'action' or 'content'.",
              required: false,
            },
            {
              propName: "padding",
              type: "'none' | 'small' | 'medium' | 'large'",
              default: "medium",
              description: "Padding for the panel.",
              required: false,
            },
            {
              propName: "headerPadding",
              type: "'none' | 'small' | 'medium' | 'large'",
              default: "medium",
              description: "Padding for the header section.",
              required: false,
            },
          ]}
          stickyHeader
        />
      </Panel>
    </Flex>
  );
};

export default DashboardLayoutPage;
