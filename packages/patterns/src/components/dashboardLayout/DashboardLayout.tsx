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

// Define Background interface based on the original in big-design-patterns
interface Background {
  src: string;
  backgroundSize?: CSSProperties["backgroundSize"];
  backgroundPosition?: CSSProperties["backgroundPosition"];
  backgroundRepeat?: CSSProperties["backgroundRepeat"];
}

// Define PageProps interface based on documentation
export interface PageProps extends PropsWithChildren {
  header?: ReactNode;
  message?: MessageProps;
  background?: Background;
}

export interface DashboardProps extends PropsWithChildren {
  aside?: ReactNode;
  header?: ReactNode;
  message?: MessageProps;
  background?: Background;
}

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
