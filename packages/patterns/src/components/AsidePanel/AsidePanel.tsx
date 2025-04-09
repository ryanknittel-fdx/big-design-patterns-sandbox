import React, { ReactNode } from "react";
import { Box, H2 } from "@bigcommerce/big-design";
import { AsideCardGrid, CardGridItemProps } from "../CardGrid/CardGrid";

export interface AsidePanelProps {
  /** Title to display in the panel header */
  title: string;
  /** ReactNode - Children elements or components to be rendered within the AsidePanel. */
  children: ReactNode;
  /** Format of the card grid items, either 'action' or 'content' */
  format?: "action" | "content";
  /** Optional padding for the panel */
  padding?: "none" | "small" | "medium" | "large";
  /** Optional padding for the header */
  headerPadding?: "none" | "small" | "medium" | "large";
}

/**
 * AsidePanel component that provides a consistent layout for aside content with a header and card grid.
 * It's designed to work well with the DashboardLayout's aside panel.
 */
export const AsidePanel: React.FC<AsidePanelProps> = ({
  title,
  children,
  padding = "medium",
  headerPadding = "medium",
}) => {
  return (
    <Box
      backgroundColor="white"
      shadow="raised"
      paddingBottom={padding}
      borderRadius="normal"
    >
      <Box padding={headerPadding}>
        <H2 marginBottom="none">{title}</H2>
      </Box>
      {children}
    </Box>
  );
};

export default AsidePanel;
