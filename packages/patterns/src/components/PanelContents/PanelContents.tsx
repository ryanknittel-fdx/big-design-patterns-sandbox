import { ReactNode, memo } from "react";

import { StyledPanelContentsWrapper, StyledPanelContents } from "./PanelContents.styled";

import { BoxProps } from "@bigcommerce/big-design";

export interface PanelContentProps extends BoxProps {
  children?: ReactNode;
  padded?: boolean;
  height?: string;
  scrollable?: boolean;
}

export const PanelContents: React.FC<PanelContentProps> = memo(
  ({ children, ...props }) => {
    return (
      <StyledPanelContentsWrapper {...props}>
        <StyledPanelContents {...props}>{children}</StyledPanelContents>
      </StyledPanelContentsWrapper>
    );
  }
);
