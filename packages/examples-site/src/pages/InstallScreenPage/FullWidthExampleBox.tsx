import React, { ReactNode } from "react";
import { Box } from "@bigcommerce/big-design";

interface FullWidthExampleBoxProps {
  children: ReactNode;
}

const FullWidthExampleBox: React.FC<FullWidthExampleBoxProps> = ({
  children,
}) => {
  return (
    <Box
      marginBottom="xLarge"
      border="box"
      borderRadius="normal"
      style={{
        borderLeft: "none",
        borderRight: "none",
        left: "0px",
        position: "relative",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      {children}
    </Box>
  );
};

export default FullWidthExampleBox;
