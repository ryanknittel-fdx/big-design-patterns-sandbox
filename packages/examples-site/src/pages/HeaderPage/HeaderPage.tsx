import React, { FunctionComponent } from "react";
import {
  Box,
  Flex,
  FlexItem,
  H3,
  Text,
  Button,
  Table,
} from "@bigcommerce/big-design";
import { AdvancedPanel, Header, Page } from "bigcommerce-design-patterns";
import { AddIcon } from "@bigcommerce/big-design-icons";
import { useNavigate } from "react-router";
import { CopyBlock, nord as codecolor } from "react-code-blocks";

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

const PageHeader: FunctionComponent = () => {
  const navigate = useNavigate();

  const backButtonClickHandler = () => {
    navigate("/");
  };

  return (
    <Page
      headerTitle="Headers"
      headerBackButtonLabel="Back to patterns"
      onHeaderBackButtonClick={backButtonClickHandler}
    >
      <Flex flexDirection="column" flexGap={"24px"}>
        <FlexItem backgroundColor={"white"} shadow="raised" padding={"large"}>
          <H3 marginBottom={"none"}>Header with back button</H3>
          <Text>To be used on a listing/detail setup.</Text>
          <Box
            border={"box"}
            padding={"xxLarge"}
            backgroundColor="secondary10"
            marginBottom="xLarge"
          >
            {/* Sample start */}
            <Header
              headerTitle="Page Title"
              headerBackButtonLabel="Back to listing"
              onHeaderBackButtonClick={() => {
                window.alert("Back button clicked");
              }}
            />
            {/* Sample end */}
          </Box>
          <CopyBlock
            {...copyBlockProps}
            text={`<Header
    headerTitle="Page Title"
    headerBackButtonLabel="Back to listing"
    onHeaderBackButtonClick={() => {
        window.alert("Back button clicked");
    }}
/>`}
          />
        </FlexItem>

        <FlexItem backgroundColor={"white"} shadow="raised" padding={"large"}>
          <H3 marginBottom={"none"}>Header with badge</H3>
          <Text>
            To illustrate a specific characteristic or status of a page.
          </Text>
          <Box
            border={"box"}
            padding={"xxLarge"}
            backgroundColor="secondary10"
            marginBottom="xLarge"
          >
            {/* Sample start */}
            <Header
              headerTitle="Page Title"
              headerBackButtonLabel="Back to listing"
              onHeaderBackButtonClick={() => {
                window.alert("Back button clicked");
              }}
              headerBadge={{ variant: "success", label: "New" }}
            />
            {/* Sample end */}
          </Box>
          <CopyBlock
            {...copyBlockProps}
            text={`<Header
    headerTitle="Page Title"
    headerBackButtonLabel="Back to listing"
    onHeaderBackButtonClick={() => {
        window.alert("Back button clicked");
    }}
    headerBadge={{ variant: "success", label: "New" }}
/>`}
          />
        </FlexItem>

        <FlexItem backgroundColor={"white"} shadow="raised" padding={"large"}>
          <H3 marginBottom={"none"}>Header with icon</H3>
          <Text>To add branding on headers, mainly for app integrations.</Text>
          <Box
            border={"box"}
            padding={"xxLarge"}
            backgroundColor="secondary10"
            marginBottom="xLarge"
          >
            {/* Sample start */}
            <Header
              headerTitle="Page Title"
              headerBackButtonLabel="Back to listing"
              onHeaderBackButtonClick={() => {
                window.alert("Back button clicked");
              }}
              headerIcon={<img src="./assets/images/bc-logo-mark.svg" />}
            />
            {/* Sample end */}
          </Box>
          <CopyBlock
            {...copyBlockProps}
            text={`<Header
    headerTitle="Page Title"
    headerBackButtonLabel="Back to listing"
    onHeaderBackButtonClick={() => {
        window.alert("Back button clicked");
    }}
    headerIcon={<img src="./assets/images/bc-logo-mark.svg" />}
/>`}
          />
        </FlexItem>

        <FlexItem backgroundColor={"white"} shadow="raised" padding={"large"}>
          <H3 marginBottom={"none"}>Header with additional description</H3>
          <Text>
            To provide more context of what the current page represents.
          </Text>
          <Box
            border={"box"}
            padding={"xxLarge"}
            backgroundColor="secondary10"
            marginBottom="xLarge"
          >
            {/* Sample start */}
            <Header headerTitle="Page Title">
              Here you write the description if there's any{" "}
              <a href="#">Learn More</a>
            </Header>
            {/* Sample end */}
          </Box>
          <CopyBlock
            {...copyBlockProps}
            text={`<Header headerTitle="Page Title">
    Here you write the description if there's any{" "}
    <a href="#">Learn More</a>
</Header>`}
          />
        </FlexItem>
        <FlexItem backgroundColor={"white"} shadow="raised" padding={"large"}>
          <H3 marginBottom={"none"}>Header with single CTA</H3>
          <Text>When there's a unique global action.</Text>
          <Box
            border={"box"}
            padding={"xxLarge"}
            backgroundColor="secondary10"
            marginBottom="xLarge"
          >
            {/* Sample start */}
            <Header
              headerTitle="Page Title"
              headerCTAs={<Button iconLeft={<AddIcon />}>Create New</Button>}
            />
            {/* Sample end */}
          </Box>
          <CopyBlock
            {...copyBlockProps}
            text={`<Header
    headerTitle="Page Title"
    headerCTAs={<Button iconLeft={<AddIcon />}>Create New</Button>}
/>`}
          />
        </FlexItem>
        <FlexItem backgroundColor={"white"} shadow="raised" padding={"large"}>
          <H3 marginBottom={"none"}>Header with multiple CTAs</H3>
          <Text>When there's a unique global action.</Text>
          <Box
            border={"box"}
            padding={"xxLarge"}
            backgroundColor="secondary10"
            marginBottom="xLarge"
          >
            {/* Sample start */}
            <Header
              headerTitle="Page Title"
              headerCTAs={
                <>
                  <Button variant="secondary" marginRight="small">
                    Option
                  </Button>
                  <Button iconLeft={<AddIcon />}>Create New</Button>
                </>
              }
            >
              The header description
            </Header>
            {/* Sample end */}
          </Box>
          <CopyBlock
            {...copyBlockProps}
            text={`<Header
    headerTitle="Page Title"
    headerCTAs={
        <>
        <Button variant="secondary" marginRight="small">
            Option
        </Button>
        <Button iconLeft={<AddIcon />}>Create New</Button>
        </>
    }
>   
The header description
</Header>`}
          />
        </FlexItem>
        <FlexItem>
          <AdvancedPanel headerTitle="Back button props" contentsPadding={false}>
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
                  description: "Optional children elements.",
                  required: false,
                },
                {
                  propName: "backButtonLabel",
                  type: "string",
                  default: '"Back"',
                  description: "Label for the back button.",
                  required: false,
                },
                {
                  propName: "onBackButtonClick",
                  type: "Function",
                  default: "-",
                  description: "Callback triggered on back button click.",
                  required: false,
                },
              ]}
              stickyHeader
            />
          </AdvancedPanel>
        </FlexItem>

        <FlexItem>
          <AdvancedPanel headerTitle="Header props" contentsPadding={false}>
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
                  propName: "headerTitle",
                  type: "string",
                  default: "-",
                  description: "Title displayed in the header.",
                  required: false,
                },
                {
                  propName: "headerBackButtonLabel",
                  type: "string",
                  default: "-",
                  description:
                    "Label for the optional back button in the header.",
                  required: false,
                },
                {
                  propName: "onHeaderBackButtonClick",
                  type: "Function",
                  default: "-",
                  description:
                    "Callback function triggered when the header back button is clicked.",
                  required: false,
                },
                {
                  propName: "headerCTAs",
                  type: "ReactNode",
                  default: "-",
                  description:
                    "Optional call to action elements to display in the header.",
                  required: false,
                },
                {
                  propName: "children",
                  type: "ReactNode",
                  default: "-",
                  description:
                    "Optional children to display under the header title.",
                  required: false,
                },
                {
                  propName: "isMain",
                  type: "boolean",
                  default: "true",
                  description:
                    "Determines if the main header style should be applied.",
                  required: false,
                },
                {
                  propName: "headerBadge",
                  type: "BadgeProps",
                  default: "-",
                  description:
                    "Badge component props to be displayed next to the title.",
                  required: false,
                },
                {
                  propName: "headerIcon",
                  type: "ReactNode",
                  default: "-",
                  description: "Icon to be displayed next to the header title.",
                  required: false,
                },
              ]}
              stickyHeader
            />
          </AdvancedPanel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PageHeader;
