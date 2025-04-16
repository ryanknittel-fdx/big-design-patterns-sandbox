import React, { ReactNode } from "react";
import styled from "styled-components";
import { Box, BoxProps, Flex, H3, Text } from "@bigcommerce/big-design";

interface IntroPanelProps extends BoxProps {
  backgroundImage?: string;
  title?: string;
  description?: string;
  buttons?: ReactNode;
  children?: ReactNode;
}

const StyledBannerBox = styled(Box) <{ backgroundImage?: string }>`
  background-image: ${({ backgroundImage }) => backgroundImage ? `url(${backgroundImage})` : 'none'};
  background-position: 150% center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 768px) {
    background-image: none;
  }

  @media (min-width: 900px) {
    background-position: 125% center;
  }

  @media (min-width: 1024px) {
    background-position: 110% center;
  }
  
  @media (min-width: 1200px) {
    background-position: right center;
  }
`;

export const IntroPanel: React.FC<IntroPanelProps> = ({
  backgroundImage,
  title,
  description,
  buttons,
  children,
  ...rest
}) => {
  return (
    <StyledBannerBox
      shadow="raised"
      backgroundColor="white"
      padding="xxLarge"
      backgroundImage={backgroundImage}
      {...rest}
    >
      {title && <H3 marginBottom="medium">{title}</H3>}
      {description && <Box marginBottom="medium" style={{ maxWidth: "65ch" }}><Text>{description}</Text></Box>}
      {children && <Flex>{children}</Flex>}
    </StyledBannerBox>
  );
};
