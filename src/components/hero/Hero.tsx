import React, { FunctionComponent, ReactNode } from "react";
import { StyledHero } from "./Hero.styled";
import { H1, Flex, FlexItem } from "@bigcommerce/big-design";
import { theme } from "@bigcommerce/big-design-theme";

interface PageBackgroundProps {
    children?: ReactNode;
    heading: string;
    mediaContent?: ReactNode;
}

const Hero: FunctionComponent<PageBackgroundProps> = ({
    children,
    heading,
    mediaContent
}) => {
    return (<StyledHero>
        <Flex flexDirection={{ mobile: "column-reverse", tablet: "row" }} flexGap={theme.spacing.xLarge}>
            <Flex flexDirection={'column'}>
                <H1>{heading}</H1>
                <FlexItem>{children}</FlexItem>
            </Flex>
            <FlexItem>
                {mediaContent ? mediaContent : null}
            </FlexItem>
        </Flex>
    </StyledHero>)
};

export default Hero;
