import React, { FunctionComponent } from "react";
import {
  Button,
  Box,
  H4,
  H1
} from "@bigcommerce/big-design";
import { CardGrid, IntroPanel, PanelSectionHeader } from "bigcommerce-design-patterns";
import { Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router-dom";
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { BigDesignIcon } from "../../components/BigDesignIcon";

const PageHome: FunctionComponent = () => {
  const navigate = useNavigate();

  // Helper function to navigate and scroll to top
  const navigateAndScrollToTop = (path: string) => {
    navigate(path);
    document?.getElementById("contentArea")?.scrollTo(0, 0);
  };

  return (
    <Box style={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Page>
        <H1 marginBottom="xxLarge">Welcome to the BigDesign Pattern Library</H1>
        <IntroPanel
          backgroundImage="https://storage.googleapis.com/bigcommerce-developers/images/pattern%20graphic.png"
          title="Speed up development with BigDesign patterns"
          description="Explore code samples and patterns to build consistent and user-friendly interfaces using BigDesign and BigCommerce design patterns."
          marginBottom="xxLarge"
        >
          <Button variant="subtle" marginRight="medium" iconLeft={<BigDesignIcon size={18} />} onClick={() => window.open('https://developer.bigcommerce.com/big-design/', '_blank')}>Read full component guidelines</Button>
          <Button variant="subtle" iconLeft={<GitHubIcon sx={{ fontSize: 20 }} />} onClick={() => window.open('https://github.com/bigcommerce/big-design', '_blank')}>Go to GitHub repo</Button>
        </IntroPanel>

        <PanelSectionHeader
          title="Sample flows"
          description="Complete user journey patterns that guide users through multi-step processes and complex interactions."
          icon={<AutoAwesomeMotionIcon sx={{ color: "#4D6FFF", fontSize: 20 }} />}
        />

        <CardGrid
          marginBottom="xxLarge"
          shadow="raised"
          items={[
            {
              heading: <H4 margin="none">CRUD</H4>,
              description: "Create, read, update, and delete pattern",
              onClick: () => navigateAndScrollToTop("/page-crud-list"),
            },
          ]}
        />

        <PanelSectionHeader
          title="Single Pages"
          description="Standalone page layouts designed for specific purposes like displaying lists, forms, or featured content."
          icon={<WebAssetIcon sx={{ color: "#2AAB3F", fontSize: 20 }} />}
          iconBgColor="success20"
        />

        <CardGrid
          marginBottom="xxLarge"
          shadow="raised"
          items={[
            {
              heading: "Dashboards",
              description: "Structured layout for admin interfaces",
              onClick: () => navigateAndScrollToTop("/dashboard-layout"),
            },
            {
              heading: "Lists",
              description:
                "Display collections of items in a structured list",
              onClick: () => navigateAndScrollToTop("/page-list"),
            },
            {
              heading: "Featured Content",
              description: "Highlight important content with visual emphasis",
              onClick: () => navigateAndScrollToTop("/page-featured-content"),
            },
            {
              heading: "Forms",
              description: "Structured data collection with validation",
              onClick: () => navigateAndScrollToTop("/page-form"),
            },
            {
              heading: "Anchor Navigation",
              description: "Navigate between sections within a long page",
              onClick: () => navigateAndScrollToTop("/page-anchor-nav"),
            },
            {
              heading: "App Installation",
              description:
                "App install interface for third-party integrations",
              onClick: () => navigateAndScrollToTop("/install-screen-app"),
            },
            {
              heading: "Channel Installation",
              description:
                "Channel install interface for multi-platform selling",
              onClick: () =>
                navigateAndScrollToTop("/install-screen-channel"),
            }
          ]}
          gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
        />

        <PanelSectionHeader
          title="Data Filtering"
          description="Various search and filter implementations for use across different list views."
          icon={<FilterAltOutlinedIcon sx={{ color: "#FFAE00", fontSize: 20 }} />}
          iconBgColor="warning20"
        />

        <CardGrid
          marginBottom="xxLarge"
          shadow="raised"
          items={[
            {
              heading: "Simple Search",
              description: "Basic search functionality for filtering data",
              onClick: () => navigateAndScrollToTop("/filters-search"),
            },
            {
              heading: "Dropdown Filtering",
              description: "Filter data using dropdown selectors",
              onClick: () => navigateAndScrollToTop("/filters-dropdowns"),
            },
            {
              heading: "Advanced Filtering",
              description:
                "Complex filtering options for detailed data analysis",
              onClick: () => navigateAndScrollToTop("/filters-advanced"),
            },
            {
              heading: "Advanced Additive Filtering",
              description: "Multi-layered filtering with saved views",
              onClick: () =>
                navigateAndScrollToTop("/filters-advanced-additive"),
            },
          ]}
          gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
        />

        <PanelSectionHeader
          title="Pattern Components"
          description="Pre-made components and layouts that can be used via the `bigcommerce-design-patterns` package to fast track development."
          icon={<DashboardOutlinedIcon sx={{ color: "#DB3643", fontSize: 20 }} />}
          iconBgColor="danger20"
        />

        <CardGrid
          marginBottom="xxLarge"
          shadow="raised"
          items={[
            {
              heading: "Card Grid",
              description: "Display content in a responsive grid layout",
              onClick: () => navigateAndScrollToTop("/card-grid"),
            },
            {
              heading: "Info Illustrations",
              description: "Visual elements to convey status information",
              onClick: () => navigateAndScrollToTop("/info-illustration"),
            },
          ]}
          gridColumns="repeat(auto-fill, minmax(250px, 1fr))"
        />
      </Page>
    </Box>
  );
};

export default PageHome;
