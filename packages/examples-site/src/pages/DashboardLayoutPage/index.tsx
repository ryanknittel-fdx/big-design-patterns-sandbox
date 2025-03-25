import { DashboardLayout } from "bigcommerce-design-patterns";
import { Panel, Text } from "@bigcommerce/big-design";
import { Header } from "@bigcommerce/big-design-patterns";

export default function Dashboard() {
  const asideContent = (
    <>
      <Panel header="Aside Panel">
        <Text>
          This is the aside content that will appear on the right in desktop
          view and below the main content in mobile view.
        </Text>
      </Panel>
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
      <Panel header="Main contents">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>{" "}
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Panel>
      <Panel header="Secondary contents">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Panel>
    </DashboardLayout>
  );
}
