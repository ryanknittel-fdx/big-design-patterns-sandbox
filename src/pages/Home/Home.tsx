import React, { FunctionComponent } from "react";
import { H2, H3 } from "@bigcommerce/big-design";
import Page from "../../components/page/Page";
import { Link } from "react-router-dom";

const PageHome: FunctionComponent = () => {
  return (
    <Page
      headerTitle="BigDesign pattern library"
      pageDescription={<>Code samples for our commonly used patterns.</>}
    >
      <H2>Page Patterns</H2>
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
      </ul>
      <H2>Pattern Components</H2>
      <ul>
        <li>
          <Link to="/feature-tag">Feature Tags</Link>
        </li>
        <li>
          <Link to={"/header"}>Header</Link>
        </li>
        <li>
          <Link to={"/info-illustration"}>Info Illustrations</Link>
        </li>
      </ul>
    </Page>
  );
};

export default PageHome;
