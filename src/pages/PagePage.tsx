import React, { FunctionComponent, useState } from "react";
import {
  Flex,
  FlexItem,
  Button,
  Select,
  Message,
  Panel,
  Text,
} from "@bigcommerce/big-design";
import Page from "../components/page/Page";
import { AddIcon, SettingsIcon } from "@bigcommerce/big-design-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ContextSelector from "../components/contextSelector/ContextSelector";
import AdvancedPanel from "../components/advancedPanel/AdvancedPanel";
import { theme } from "@bigcommerce/big-design-theme";

/**
 * Represents the call to action buttons on the page header.
 * @returns {JSX.Element} A React fragment containing three Buttons for primary, secondary, and tertiary actions.
 */
const PageHeaderCTAs = (
  <>
    <Button
      variant="subtle"
      mobileWidth="100%"
      onClick={() => {
        window.alert("Tertiary action clicked");
      }}
    >
      Tertiary action
    </Button>
    <Button
      variant="secondary"
      mobileWidth="100%"
      onClick={() => {
        window.alert("Secondary action clicked");
      }}
    >
      Secondary action
    </Button>
    <Button
      iconLeft={<AddIcon />}
      variant="primary"
      mobileWidth="100%"
      onClick={() => {
        window.alert("Primary action clicked");
      }}
    >
      Primary action
    </Button>
  </>
);

/**
 * Represents the call to action buttons on the action bar.
 * @returns {JSX.Element} A React fragment containing two Buttons for primary and secondary CTAs.
 */
const ActionBar = (
  <>
    <Button
      variant="secondary"
      mobileWidth="auto"
      onClick={() => {
        window.alert("Secondary CTA clicked");
      }}
    >
      Secondary CTA
    </Button>
    <Button
      variant="primary"
      mobileWidth="auto"
      onClick={() => {
        window.alert("Primary CTA clicked");
      }}
    >
      Primary CTA
    </Button>
  </>
);

const PanelHeaderCTAs = (
  <>
    <Button
      variant="secondary"
      mobileWidth="100%"
      onClick={() => {
        window.alert("Secondary action clicked");
      }}
    >
      Secondary action
    </Button>
    <Button
      iconLeft={<AddIcon />}
      variant="primary"
      mobileWidth="100%"
      onClick={() => {
        window.alert("Primary action clicked");
      }}
    >
      Primary action
    </Button>
  </>
);

/**
 * Represents a sample page component with a context selector and status banner.
 * @returns {JSX.Element} The main page component, which includes header CTAs, a context selector, and a status message.
 */
const PagePage: FunctionComponent = () => {
  const navigate = useNavigate();

  /**
   * Navigates the user back to the root page.
   */
  const backButtonClickHandler = () => {
    navigate("/");
  };

  // Context state management
  const [contextValue, setContextValue] = useState("mx");

  /**
   * Handles context selection changes.
   * @param {string} val - The selected context value.
   */
  const handleContextChange = (val: string) => setContextValue(val);

  return (
    <Page
      headerCTAs={PageHeaderCTAs}
      headerTitle="Page"
      headerBackButtonLabel="Back to patterns"
      onHeaderBackButtonClick={backButtonClickHandler}
      pageDescription={
        <>
          The page component is the main wrapper of all of the contents
          associated to a BC page. It takes all the{" "}
          <Link to="/header">header</Link> properties, with the slight
          difference that it has a page description (for the header children)
          and the children prop is the actual page main content.
        </>
      }
      actionBar={ActionBar}
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <FlexItem>
          <ContextSelector>
            <Flex justifyContent="space-between">
              <Select
                maxHeight={300}
                onOptionChange={handleContextChange}
                options={[
                  { value: "one", content: "Context 1" },
                  { value: "two", content: "Context 2" },
                  { value: "three", content: "Context 3" },
                ]}
                placeholder="Choose context"
                placement="bottom-start"
                value={contextValue}
              />
              <Button
                variant="subtle"
                iconLeft={<SettingsIcon />}
                onClick={() => {
                  window.alert("Add modal with other tools");
                }}
              >
                Context tools
              </Button>
            </Flex>
          </ContextSelector>
        </FlexItem>
        <FlexItem>
          <Message
            type="info"
            header="Optional header"
            messages={[
              {
                text: "Required description copy.",
                link: {
                  text: "Optional Link",
                  href: "#",
                },
              },
            ]}
            onClose={() => null}
          />
        </FlexItem>
        <FlexItem>
          <AdvancedPanel
            headerTitle="Page tools"
            headerCTAs={PanelHeaderCTAs}
            panelDescription={
              <Text color="secondary60">
                Common actions you'll create within a page
              </Text>
            }
          >
            <Flex>
              <FlexItem>Panel contents</FlexItem>
            </Flex>
          </AdvancedPanel>
        </FlexItem>
        <FlexItem>
          <Panel
            header="Page tools"
            description="Common actions you'll create within a page"
            action={{
              text: "hello",
            }}
          >
            <Text>Panel contents</Text>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PagePage;
