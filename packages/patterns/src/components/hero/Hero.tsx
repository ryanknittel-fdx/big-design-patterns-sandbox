import React, { FunctionComponent, ReactNode } from "react";
import { StyledHero } from "./Hero.styled";
import { H1, Flex, FlexItem } from "@bigcommerce/big-design";
import { theme } from "@bigcommerce/big-design-theme";

export interface HeroProps {
    children?: ReactNode;
    heading: string;
    mediaContent?: ReactNode;
}

export const Hero: FunctionComponent<HeroProps> = ({
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
