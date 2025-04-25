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

  const resourcesContent = (
    <AsidePanel title="Resources" padding="medium" headerPadding="medium">
      <AsideCardGrid
        format="action"
        items={[
          {
            heading: "Developer Docs",
            headingTag: "h4",
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            icon: (
              <img
                src="/assets/images/icons/bigc-inverted-black.svg"
                height="20"
                width="20"
              />
            ),
            href: "https://developer.bigcommerce.com/docs/build",
            hrefTarget: "_blank",
          },
          {
            heading: "Community Slack",
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            icon: (
              <img src="https://storage.googleapis.com/bigcommerce-production-dev-center/images/slack-icon.svg" />
            ),
            href: "https://developer.bigcommerce.com/slack",
            hrefTarget: "_blank",
          },
          {
            heading: "Gadget",
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            icon: (
              <img src="https://storage.googleapis.com/bigcommerce-production-dev-center/images/gadget.svg" />
            ),
            href: "https://gadget.dev/use-cases/big-commerce",
            hrefTarget: "_blank",
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
