import React, { FunctionComponent, useState } from "react";
import {
    Flex,
    Button,
    Text
} from "@bigcommerce/big-design";
import Page from "../../components/page/Page";
import { useNavigate } from "react-router";

import Hero from "../../components/hero/Hero";

const PageFeaturedContent: FunctionComponent = () => {
    const navigate = useNavigate();

    return (
        <Page featureBg={true} showHeader={false}>
            <Hero heading="Hero heading" mediaContent={<img src="./assets/images/page-hero-image.png" />}>
                <Flex flexDirection={'column'}>
                    <Text color="secondary70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a sapien elit. Nullam vel leo enim. Fusce molestie vel ex quis aliquam. Quisque bibendum lorem id neque tempus pretium in quis metus.
                        <ul>
                            <li>Proin in tempor nulla. </li>
                            <li>Nam commodo at lorem sed vestibulum.</li>
                            <li>Morbi purus ex, scelerisque nec malesuada in, faucibus et metus.</li>
                            <li>Pellentesque felis erat, scelerisque a dapibus sed.</li>
                        </ul>
                    </Text>
                    <Flex>
                        <Button>Main CTA</Button>
                        <Button variant="subtle" onClick={() => navigate("/")}>Back to patterns</Button>
                    </Flex>
                </Flex>
            </Hero>
        </Page>
    );
};

export default PageFeaturedContent;
