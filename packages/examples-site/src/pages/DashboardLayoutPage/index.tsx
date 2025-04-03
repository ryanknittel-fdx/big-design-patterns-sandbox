import { DashboardLayout, CardGrid } from "bigcommerce-design-patterns";
import { Panel, Text, H4 } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";

export default function Dashboard() {
  const asideContent = (
    <>
      <CardGrid
        format="action"
        items={[
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
            button: {
              text: "Button",
              onClick: () => {},
            },
          },
          {
            heading: <H4>Community Slack</H4>,
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Gadget</H4>,
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            href: "https://example.com",
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

      <CardGrid
        format="action"
        shadow="raised"
        items={[
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
            button: {
              text: "Button",
              onClick: () => {},
            },
          },
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Community Slack</H4>,
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Gadget</H4>,
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            href: "https://example.com",
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
      <Panel header="Aside Panel">
        <Text>
          This is the aside content that will appear on the right in desktop
          view and below the main content in mobile view.
        </Text>
      </Panel>
    </>
  );

  return (
    <DashboardLayout
      aside={asideContent}
      header={
        <Header description="Page description (optional)" title="Dashboard" />
      }
    >
      <CardGrid
        format="action"
        items={[
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Community Slack</H4>,
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Gadget</H4>,
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            href: "https://example.com",
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
      <CardGrid
        format="action"
        shadow="raised"
        marginTop="large"
        items={[
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Community Slack</H4>,
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Gadget</H4>,
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            href: "https://example.com",
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
      <CardGrid
        format="action"
        marginTop="large"
        items={[
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
            button: {
              text: "Button",
              onClick: () => {},
            },
          },
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Community Slack</H4>,
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Gadget</H4>,
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            href: "https://example.com",
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
      <CardGrid
        format="action"
        shadow="raised"
        marginTop="large"
        items={[
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            // href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
            button: {
              text: "Button",
              onClick: () => {},
            },
          },
          {
            heading: <H4>Dev Docs</H4>,
            description:
              "Visit our developer hub to browse guides, follow tutorials and find API endpoints.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Community Slack</H4>,
            description:
              "Find answers to your most common development issues with our community of 400+ developers.",
            href: "https://example.com",
            icon: (
              <img
                src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev/bigc-inverted-black.svg"
                height="45"
                width="45"
              />
            ),
          },
          {
            heading: <H4>Gadget</H4>,
            description:
              "Gadget provides everything you need to build and run web apps with ease, stitched together from the start.",
            href: "https://example.com",
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
      {/* <Panel header="Main contents">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Panel> */}
    </DashboardLayout>
  );
}
