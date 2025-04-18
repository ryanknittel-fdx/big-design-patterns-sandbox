import React, { FunctionComponent } from "react";
import {
  DashboardLayout,
  AsideCardGrid,
  AsidePanel,
} from "bigcommerce-design-patterns";
import { Panel, Text, Flex } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { CopyBlock, nord as codecolor } from "react-code-blocks";
import { OpenInNewIcon } from "@bigcommerce/big-design-icons";

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
          hrefTarget: "_blank",
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
          hrefTarget: "_blank",
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
            description={
              <Text>
                Dashboard layout is used to create a responsive two-column
                layout for dashboard interfaces.{" "}
                <a
                  href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/DashboardLayoutPage/index.tsx"
                  target="_blank"
                >
                  View source <OpenInNewIcon size="small" />
                </a>
              </Text>
            }
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
          <Text>
            <a
              href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/DashboardLayoutPage/index.tsx"
              target="_blank"
            >
              View source <OpenInNewIcon size="small" />
            </a>
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
    </Flex>
  );
};

export default DashboardLayoutPage;
