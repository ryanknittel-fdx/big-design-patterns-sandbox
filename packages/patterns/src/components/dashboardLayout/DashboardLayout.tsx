import React, { PropsWithChildren, ReactNode } from "react";
import { Page } from "@bigcommerce/big-design-patterns";
import { MessageProps } from "@bigcommerce/big-design";
import { CSSProperties } from "styled-components";

import {
  StyledPageWrapper,
  StyledContentContainer,
  StyledPageContent,
  StyledAside,
} from "./styled";

/**
 * Background configuration for Page and Dashboard components
 */
export interface Background {
  /** Image source URL */
  src: string;
  /** CSS background-size property */
  backgroundSize?: CSSProperties["backgroundSize"];
  /** CSS background-position property */
  backgroundPosition?: CSSProperties["backgroundPosition"];
  /** CSS background-repeat property */
  backgroundRepeat?: CSSProperties["backgroundRepeat"];
}

/**
 * Props for the Page component
 */
export interface PageProps extends PropsWithChildren {
  /** Header component to display at the top of the page */
  header?: ReactNode;
  /** Message to display on the page */
  message?: MessageProps;
  /** Background configuration */
  background?: Background;
}

/**
 * Props for the DashboardLayout component
 */
export interface DashboardProps extends PageProps {
  /** Content to display in the aside panel */
  aside?: ReactNode;
}

/**
 * A layout component that displays content in a dashboard format with an optional aside panel
 */
export const DashboardLayout = ({
  aside,
  children,
  ...pageProps
}: DashboardProps): JSX.Element => {
  return (
    <StyledPageWrapper>
      <StyledContentContainer>
        <StyledPageContent>
          <Page {...pageProps}>{children}</Page>
        </StyledPageContent>

        {aside && (
          <StyledAside className="dashboard-aside">{aside}</StyledAside>
        )}
      </StyledContentContainer>
    </StyledPageWrapper>
  );
};
