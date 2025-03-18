import React, { FunctionComponent } from "react";
import { H2, H3, Box } from "@bigcommerce/big-design";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { Link } from "react-router-dom";

const PageHome: FunctionComponent = () => {
  return (
    <Page
      header={
        <Header
          description="Code samples for our commonly used patterns."
          title="BigDesign pattern library"
        ></Header>
      }
    >
      <H2>Sample Flows</H2>
      <ul>
        <li>
          <Link to={"/page-crud-list"}>CRUD flow (Page)</Link>
        </li>
      </ul>
      <H2>Single Page Patterns</H2>
      <ul>
        <li>
          <Link to={"/page-list"}>List Page</Link>
        </li>
        <li>
          <Link to={"/page-featured-content"}>Featured Content Page</Link>
        </li>
        <li>
          <Link to={"/page-form"}>Form Page</Link>
        </li>
        <li>
          <Link to={"/page-anchor-nav"}>Anchor Navigation Page</Link>
        </li>
      </ul>
      <H3>Data filtering</H3>
      <ul>
        <li>
          <Link to={"/filters-search"}>Simple search</Link>
        </li>
        <li>
          <Link to={"/filters-dropdowns"}>Dropdown filtering</Link>
        </li>
        <li>
          <Link to={"/filters-advanced"}>Advanced filtering</Link>
        </li>
        <li>
          <Link to={"/filters-advanced-additive"}>Advanced additive filtering with views</Link>
        </li>
      </ul>
      <H2>Pattern Components</H2>
      <ul>
        <li>
          <Link to="/feature-tag">Feature Tags</Link>
        </li>
        <li>
          <Link to={"/card-grid"}>Card Grid</Link>
        </li>
        <li>
          <Link to={"/info-illustration"}>Info Illustrations</Link>
        </li>
        <li>
          <Link to={"/page-with-aside"}>Page with Aside</Link>
        </li>
        <li>
          <Box marginTop={'large'}>
            <H3>Install Screen</H3>
            <ul>
              <li>
                <Link to={"/install-screen-app"}>Install Apps</Link>
              </li>
              <li>
                <Link to={"/install-screen-channel"}>Install Channels</Link>
              </li>
            </ul>
          </Box>
        </li>
      </ul>
    </Page>
  );
};

export default PageHome;
