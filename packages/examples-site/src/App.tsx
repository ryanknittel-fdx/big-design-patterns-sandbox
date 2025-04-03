import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, useRoutes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import PageHome from "./pages/Home/Home";
import PageList from "./pages/ListPage/ListPage";
import PageForm from "./pages/FormPage/FormPage";
import PageInfoIllustration from "./pages/InfoIllustrationPage/InfoIllustrationPage";
import PageFeatureTags from "./pages/FeatureTagPage/FeatureTagPage";
import PageFeaturedContent from "./pages/FeaturedContentPage/FeaturedContentPage";
import SelectPage from "./pages/SelectPage/SelectPage";
import { AlertsManager, createAlertsManager, Button, Dropdown, Box, Flex, FlexItem, Link, Text, DropdownItemGroup } from "@bigcommerce/big-design";
import PageCRUDList from "./pages/CRUDListPage/CRUDListPage";
import PageCRUDAddEdit from "./pages/CRUDAddEditPage/CRUDAddEditPage";
import PageAnchorNav from "./pages/AnchorNavPage/AnchorNavPage";
import CardGridPage from "./pages/CardGridPage";
import InstallScreenApp from "./pages/InstallScreenPage/AppExample";
import InstallScreenChannel from "./pages/InstallScreenPage/ChannelExample";
import PageFiltersSearch from "./pages/Filters/FiltersSearchPage/FiltersSearchPage";
import PageFiltersDropdowns from "./pages/Filters/FiltersDropdownsPage/FiltersDropdownsPage";
import PageFiltersAdvanced from "./pages/Filters/FiltersAdvPage/FiltersAdvancedPage";
import PageFiltersAdvancedAdditive from "./pages/Filters/FiltersAdvancedAdditivePage/FiltersAdvancedAdditivePage";
import DashboardLayout from "./pages/DashboardLayoutPage";
import Sidebar from "../../patterns/src/components/sidebar/sidebar";
import { SidebarProvider } from "../../patterns/src/components/sidebar/sidebar-context";
import { ReactRouterProviderAdapter } from "./adapters/react-router-adapter";
import { menuItems } from "./config/menu-items";
import { BiLogoGithub } from "react-icons/bi";

export const alertsManager = createAlertsManager();

const LayoutContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
`;

const InnerContainer = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

const MainContent = styled.main`
  display: grid;
  height: 100%;
  grid-template-columns: max-content 1fr;
`;

const ContentArea = styled.div`
  height: calc(100vh - 3.5rem);
  overflow: auto;
`;

const HeaderContainer = styled(Box)`
  width: 100%;
  grid-column: 1 / -1;
  background-color: white;
`;

const NavTitleContainer = styled(FlexItem)`
  width: 198px;
  display: block;
  text-align: center;
`;

const NavTitleText = styled.span`
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const LogoContainer = styled(FlexItem)`
  padding: 0.6rem 1rem;
  margin-top: 0.4rem;
  color: #000;
  cursor: pointer;
`;

const GitHubLink = styled(Link)`
  color: #000;

  &:hover {
    color: #DBE3FE !important;
  }
`;

const DesktopMenu = () => (
  <Box marginLeft="auto">
    <Flex alignItems="center" flexGap="0.5rem">
      <FlexItem>
        <GitHubLink href="https://github.com/bigcommerce/big-design-patterns-sandbox" target="_blank">
          <BiLogoGithub size={"24px"}/>
        </GitHubLink>
      </FlexItem>
    </Flex>
  </Box>
);

function Header() {
  const navigate = useNavigate();
  
  return (
    <Box
      borderBottom="box"
      paddingRight={{ mobile: "medium", tablet: "xLarge" }}
    >
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex flexDirection="row" alignItems="center">
          <LogoContainer onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}>
            <img src="./assets/images/icons/bigc-inverted-black.svg" alt="BigDesign Pattern Sandbox"
              style={{
                width: "24px",
                height: "24px",
                fill: "currentColor",
              }}
            />
          </LogoContainer>
          <NavTitleContainer
            borderLeft="box"
            borderRight="box"
            paddingVertical="medium"
            paddingHorizontal="xSmall"
          >
            <NavTitleText>
              BigDesign Patterns
            </NavTitleText> 
          </NavTitleContainer>
        </Flex>
        <DesktopMenu />
      </Flex>
    </Box>
  );
}

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutContainer>
      <InnerContainer>
        <HeaderContainer>
          <Header/>
        </HeaderContainer>
        <MainContent>
          <Sidebar menuItems={menuItems} />
          <ContentArea id="contentArea">{children}</ContentArea>
        </MainContent>
      </InnerContainer>
    </LayoutContainer>
  );
};

const RouteFC = () => {
  let routes = useRoutes([
    { path: "/", element: <PageHome /> },
    { path: "/page-list", element: <PageList /> },
    { path: "/page-form", element: <PageForm /> },
    { path: "/page-featured-content", element: <PageFeaturedContent /> },
    { path: "/info-illustration", element: <PageInfoIllustration /> },
    { path: "/feature-tag", element: <PageFeatureTags /> },
    { path: "/select-sample", element: <SelectPage /> },
    { path: "/page-crud-list", element: <PageCRUDList /> },
    { path: "/page-crud-add", element: <PageCRUDAddEdit /> },
    { path: "/page-crud-edit/:sku", element: <PageCRUDAddEdit /> },
    { path: "/page-anchor-nav", element: <PageAnchorNav /> },
    { path: "/card-grid", element: <CardGridPage /> },
    { path: "/install-screen-app", element: <InstallScreenApp /> },
    { path: "/install-screen-channel", element: <InstallScreenChannel /> },
    { path: "/filters-search", element: <PageFiltersSearch /> },
    { path: "/filters-dropdowns", element: <PageFiltersDropdowns /> },
    { path: "/filters-advanced", element: <PageFiltersAdvanced /> },
    { path: "/dashboard-layout", element: <DashboardLayout /> },
    {
      path: "/filters-advanced-additive",
      element: <PageFiltersAdvancedAdditive />,
    },
  ]);
  
  return routes;
};

const App: FunctionComponent = () => {
  return (
    <>
      <AlertsManager manager={alertsManager} />
      <Router basename={import.meta.env.BASE_URL}>
        <ReactRouterProviderAdapter>
          <SidebarProvider>
            <AppLayout>
              <RouteFC />
            </AppLayout>
          </SidebarProvider>
        </ReactRouterProviderAdapter>
      </Router>
    </>
  );
};

export default App;
