import { ReactNode, memo } from "react";

import { StyledSidePanel } from "./SidePanel.styled";

import { BoxProps } from "@bigcommerce/big-design";

export interface SidePanelProps extends BoxProps {
  children?: ReactNode;
}

export const SidePanel: React.FC<SidePanelProps> = memo(
  ({ children, ...props }) => {
    return (
      <StyledSidePanel>Woot</StyledSidePanel>
    );
  }
);
