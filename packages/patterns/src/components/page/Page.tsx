import React, { FunctionComponent, ReactNode, lazy, Suspense } from "react";
import { Header, HeaderProps } from "../header/Header";
import { StyledPage } from "./Page.styled";
import { ActionBar } from "../actionBar/ActionBar";

const PageBackground = lazy(() =>
  import("../pageBackground/PageBackground").then((module) => ({ default: module.PageBackground }))
)

export interface PageProps extends HeaderProps {
  pageDescription?: ReactNode;
  children?: ReactNode;
  actionBar?: ReactNode;
  featureBg?: boolean;
  showHeader?: boolean;
}

const PageContents: FunctionComponent<PageProps> = ({
  pageDescription,
  children,
  actionBar,
  featureBg = false,
  showHeader = true,
  ...headerProps
}) => (
  <StyledPage className={featureBg ? "bg-feature" : ""}>
    <main className={"page__main"}>
      {showHeader && <Header {...headerProps}>{pageDescription}</Header>}
      {children}
      {actionBar && <ActionBar>{actionBar}</ActionBar>}
    </main>
  </StyledPage>
);

export const Page: FunctionComponent<PageProps> = (props) => {
  {
    return props.featureBg ? (
      <Suspense>
        <PageBackground>
          <PageContents {...props} />
        </PageBackground>
      </Suspense>
    ) : (
      <PageContents {...props} />
    );
  }
};
