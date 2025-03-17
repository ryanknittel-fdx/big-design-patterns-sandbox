import { FunctionComponent, ReactNode, memo  } from "react";
import { Box } from "@bigcommerce/big-design";

import { StyledPanelContents } from "./PanelContents.styled";

export interface PanelContentProps {
  children?: ReactNode;
  padded?: boolean;
}

export const PanelContents: React.FC<PanelContentProps> = memo(
  ({ padded, children, ...props }) => {
    return <StyledPanelContents {...props}>{children}</StyledPanelContents>;
  }
);
