import React, { FunctionComponent, ReactNode } from "react";
import { Flex } from "@bigcommerce/big-design";
import { StyledContextSelector } from "./ContextSelector.styled";

interface ContextSelectorProps {
  children: ReactNode;
}

const ContextSelector: FunctionComponent<ContextSelectorProps> = ({
  children,
}) => {
  return <StyledContextSelector>{children}</StyledContextSelector>;
};

export default ContextSelector;
