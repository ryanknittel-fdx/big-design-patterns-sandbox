import React, { FunctionComponent, ReactElement } from "react";
import { Colors } from "@bigcommerce/big-design-theme";
import { Box, Flex, H3, Text } from "@bigcommerce/big-design";

interface PanelSectionHeaderProps {
  title: string;
  description?: string;
  icon: ReactElement;
  iconBgColor?: keyof Colors;
}

export const PanelSectionHeader: FunctionComponent<PanelSectionHeaderProps> = ({
  title,
  description,
  icon,
  iconBgColor = "primary20",
}) => {
  return (
    <Box marginBottom="medium">
      <Flex flexDirection="row" flexGap="8px">
        {icon && (
          <Box
            backgroundColor={iconBgColor}
            borderRadius="normal"
            padding="xxSmall"
            style={{
              width: "28px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
        )}
        <H3>{title}</H3>
      </Flex>
      {description && <Text>{description}</Text>}
    </Box>
  );
};
