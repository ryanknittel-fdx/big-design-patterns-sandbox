import React, { FunctionComponent } from "react";
import { H2, H4, Box, Panel } from "@bigcommerce/big-design";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { CardGrid } from "bigcommerce-design-patterns";
import { useNavigate } from "react-router-dom";

const PageHome: FunctionComponent = () => {
  const navigate = useNavigate();
  
  // Helper function to navigate and scroll to top
  const navigateAndScrollToTop = (path: string) => {
    navigate(path);
    document?.getElementById('contentArea')?.scrollTo(0, 0);
  };

  return (
    <Page
      header={
        <Header
          description="Code samples for our commonly used patterns."
          title="BigDesign pattern library"
        ></Header>
      }
    >
      <Box marginBottom="xxLarge">
        <Panel header="Sample Flows">
          <CardGrid
            items={[
              {
                heading: <H4 margin="none">CRUD flow (Page)</H4>,
                description: "Create, read, update, and delete pattern",
                onClick: () => navigateAndScrollToTop("/page-crud-list"),
              },
            ]}
          />
        </Panel>
      </Box>

      <Box marginBottom="xxLarge">
        <Panel header="Single Page Patterns">
          <CardGrid
            items={[
              {
                heading: <H4 margin="none">List Page</H4>,
                description: "Display collections of items in a structured list",
                onClick: () => navigateAndScrollToTop("/page-list"),
              },
              {
                heading: <H4 margin="none">Featured Content Page</H4>,
                description: "Highlight important content with visual emphasis",
                onClick: () => navigateAndScrollToTop("/page-featured-content"),
              },
              {
                heading: <H4 margin="none">Form Page</H4>,
                description: "Structured data collection with validation",
                onClick: () => navigateAndScrollToTop("/page-form"),
              },
              {
                heading: <H4 margin="none">Anchor Navigation Page</H4>,
                description: "Navigate between sections within a long page",
                onClick: () => navigateAndScrollToTop("/page-anchor-nav"),
              },
            ]}
            gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
          />
        </Panel>
      </Box>

      <Box marginBottom="xxLarge">
        <Panel header="Data Filtering">
          <CardGrid
            items={[
              {
                heading: <H4 margin="none">Simple Search</H4>,
                description: "Basic search functionality for filtering data",
                onClick: () => navigateAndScrollToTop("/filters-search"),
              },
              {
                heading: <H4 margin="none">Dropdown Filtering</H4>,
                description: "Filter data using dropdown selectors",
                onClick: () => navigateAndScrollToTop("/filters-dropdowns"),
              },
              {
                heading: <H4 margin="none">Advanced Filtering</H4>,
                description: "Complex filtering options for detailed data analysis",
                onClick: () => navigateAndScrollToTop("/filters-advanced"),
              },
              {
                heading: <H4 margin="none">Advanced Additive Filtering</H4>,
                description: "Multi-layered filtering with saved views",
                onClick: () => navigateAndScrollToTop("/filters-advanced-additive"),
              },
            ]}
            gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
          />
        </Panel>
      </Box>

      <Box marginBottom="xxLarge">
        <Panel header="Pattern Components">
          <CardGrid
            items={[
              {
                heading: <H4 margin="none">Feature Tags</H4>,
                description: "Highlight features and their status",
                onClick: () => navigateAndScrollToTop("/feature-tag"),
              },
              {
                heading: <H4 margin="none">Card Grid</H4>,
                description: "Display content in a responsive grid layout",
                onClick: () => navigateAndScrollToTop("/card-grid"),
              },
              {
                heading: <H4 margin="none">Info Illustrations</H4>,
                description: "Visual elements to convey status information",
                onClick: () => navigateAndScrollToTop("/info-illustration"),
              },
              {
                heading: <H4 margin="none">Dashboard Layout</H4>,
                description: "Structured layout for admin interfaces",
                onClick: () => navigateAndScrollToTop("/dashboard-layout"),
              },
            ]}
            gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
          />
        </Panel>
      </Box>
      
      <Box marginBottom="xxLarge">
        <Panel header="Install Screen">
          <CardGrid
            items={[
              {
                heading: <H4 margin="none">Install Apps</H4>,
                description: "App installation interface for third-party integrations",
                onClick: () => navigateAndScrollToTop("/install-screen-app"),
              },
              {
                heading: <H4 margin="none">Install Channels</H4>,
                description: "Channel installation interface for multi-platform selling",
                onClick: () => navigateAndScrollToTop("/install-screen-channel"),
              },
            ]}
            gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
          />
        </Panel>
      </Box>
    </Page>
  );
};

export default PageHome;
