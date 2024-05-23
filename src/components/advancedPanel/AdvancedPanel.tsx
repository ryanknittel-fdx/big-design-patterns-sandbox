import React, { FunctionComponent, ReactNode } from "react";
import Header, { HeaderProps } from "../header/Header";
import { Flex, FlexItem, Box } from "@bigcommerce/big-design";

interface AdvancedPanelProps extends HeaderProps {
  /** ReactNode - Children elements or components to be rendered within the ActionBar. */
  panelDescription?: ReactNode;
  contentsPadding?: boolean;
  children: ReactNode;
}

const AdvancedPanel: FunctionComponent<AdvancedPanelProps> = ({
  children,
  panelDescription,
  contentsPadding = true,
  ...headerProps
}) => {
  return (
    <Box shadow="raised" backgroundColor="white">
      <Flex
        flexDirection="column"
        flexGap={{ mobile: "medium", tablet: "xLarge" }}
      >
        <FlexItem
          paddingHorizontal={{ mobile: "medium", tablet: "xLarge" }}
          paddingTop={{ mobile: "medium", tablet: "xLarge" }}
        >
          <Header {...headerProps} isMain={false}>
            {panelDescription}
          </Header>
        </FlexItem>
        <FlexItem
          paddingHorizontal={{
            mobile: contentsPadding ? "medium" : "none",
            tablet: contentsPadding ? "xLarge" : "none",
          }}
          paddingBottom={{
            mobile: contentsPadding ? "medium" : "none",
            tablet: contentsPadding ? "xLarge" : "none",
          }}
        >
          {children}
        </FlexItem>
      </Flex>
    </Box>
  );
};

export default AdvancedPanel;
