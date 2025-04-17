import React, { FunctionComponent } from "react";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";
import DOMPurify from "dompurify";
import { H1, H2, H3, H4, Text, Box, HR } from "@bigcommerce/big-design";

interface HTMLParserProps {
  html: string;
}

export const HTMLParser: FunctionComponent<HTMLParserProps> = ({ html }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.name === "h1") {
        return (
          <H1>{domToReact((domNode as Element).children as DOMNode[])}</H1>
        );
      }
      if (domNode instanceof Element && domNode.name === "h2") {
        return (
          <H2>{domToReact((domNode as Element).children as DOMNode[])}</H2>
        );
      }
      if (domNode instanceof Element && domNode.name === "h3") {
        return (
          <H3>{domToReact((domNode as Element).children as DOMNode[])}</H3>
        );
      }
      if (domNode instanceof Element && domNode.name === "h4") {
        return (
          <H4>{domToReact((domNode as Element).children as DOMNode[])}</H4>
        );
      }
      if (domNode instanceof Element && domNode.name === "p") {
        return (
          <Text>{domToReact((domNode as Element).children as DOMNode[])}</Text>
        );
      }
      if (domNode instanceof Element && domNode.name === "hr") {
        return <HR />;
      }
    },
  };

  const cleanHtmlString = DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ADD_ATTR: ['target'],
  });

  return <Box> {parse(cleanHtmlString, options)}</Box>;
};
