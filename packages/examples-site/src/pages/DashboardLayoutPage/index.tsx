import React, { FunctionComponent } from "react";
import { DashboardLayout } from "bigcommerce-design-patterns";
import { Panel, Text, Flex, Table } from "@bigcommerce/big-design";
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

  const asideContent = (
    <Panel header="Aside Panel">
      <Text>
        This is the aside content that will appear on the right in desktop view
        and below the main content in mobile view.
      </Text>
    </Panel>
  );

  return (
    <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
      <DashboardLayout
        aside={asideContent}
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
        <Panel header="Main contents">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Panel>
      </DashboardLayout>
      <Panel header="Example: Dashboard Layout">
        <CopyBlock
          {...copyBlockProps}
          text={`import { DashboardLayout } from "bigcommerce-design-patterns";
import { Panel, Text } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";

const asideContent = (
  <Panel header="Aside Panel">
    <Text>
      This is the aside content that will appear on the right in desktop
      view and below the main content in mobile view.
    </Text>
  </Panel>
);

return (
  <DashboardLayout
    aside={asideContent}
    header={
      <Header description="Page description (optional)" title="Dashboard" />
    }
  >
    <Panel header="Main contents">
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
    </Panel>
  </DashboardLayout>
);`}
        />
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
    </Flex>
  );
};

export default DashboardLayoutPage;
