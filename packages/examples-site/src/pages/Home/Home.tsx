import React, { FunctionComponent } from "react";
import { H2 } from "@bigcommerce/big-design";
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
      <H2>Pattern Components</H2>
      <ul>
        <li>
          <Link to="/feature-tag">Feature Tags</Link>
        </li>
        <li>
          <Link to={"/info-illustration"}>Info Illustrations</Link>
        </li>
        <li>
          <Link to={"/card-grid"}>Card Grid</Link>
        </li>
        <li>
          <Link to={"/install-screen"}>Install Screen</Link>
        </li>
      </ul>
    </Page>
  );
};

export default PageHome;
