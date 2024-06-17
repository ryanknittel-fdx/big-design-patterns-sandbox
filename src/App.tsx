import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import PageHome from "./pages/Home/Home";
import PageList from "./pages/ListPage/ListPage";
import PageForm from "./pages/FormPage/FormPage";
import PageHeader from "./pages/HeaderPage/HeaderPage";
import PageInfoIllustration from "./pages/InfoIllustrationPage/InfoIllustrationPage";
import PageFeatureTags from "./pages/FeatureTagPage/FeatureTagPage";
import PageFeaturedContent from "./pages/FeaturedContentPage/FeaturedContentPage";
import SelectPage from "./pages/SelectPage/SelectPage";
import { AlertsManager, createAlertsManager } from "@bigcommerce/big-design";
import PageCRUDList from "./pages/CRUDListPage/CRUDListPage";
import PageCRUDAdd from "./pages/CRUDAddEditPage/CRUDAddEditPage";

export const alertsManager = createAlertsManager();

const RouteFC = () => {
  let routes = useRoutes([
    { path: "/", element: <PageHome /> },
    { path: "/page-list", element: <PageList /> },
    { path: "/page-form", element: <PageForm /> },
    { path: "/page-featured-content", element: <PageFeaturedContent /> },
    { path: "/header", element: <PageHeader /> },
    { path: "/info-illustration", element: <PageInfoIllustration /> },
    { path: "/feature-tag", element: <PageFeatureTags /> },
    { path: "/select-sample", element: <SelectPage />},
    { path: "/page-crud-list", element: <PageCRUDList />},
    { path: "/page-crud-add", element: <PageCRUDAdd />}
  ]);
  return routes;
};

const App: FunctionComponent = () => {
  return (
    <>
    <AlertsManager manager={alertsManager} />
    <Router>
      <RouteFC />
    </Router>
    </>
  );
};

export default App;
