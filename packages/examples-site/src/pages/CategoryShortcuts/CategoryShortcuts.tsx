import React, { FunctionComponent, ReactNode } from "react";
import { Panel, Text, Flex, FlexItem } from "@bigcommerce/big-design";
import { AnchorNav } from "bigcommerce-design-patterns";
import { useNavigate } from "react-router";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import {
  StoreIcon,
  ChevronRightIcon,
  FolderIcon,
} from "@bigcommerce/big-design-icons";

import { theme as defaultTheme } from "@bigcommerce/big-design-theme";
import styled from "styled-components";
import { BoxProps } from "@bigcommerce/big-design";

// add props while extending a div element

export interface PathElementProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
  label: string;
}

const StyledText = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
    user-select: none;
    flex: 1 1 auto;
}`;
const StyledIcon = styled.div`
  width: 24px;
  flex: 0 0 auto;
`;
const StyledFlex = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  max-width: 100%;
  font-size: 0.875rem;
  align-content: center;
  justify-content: center;
`;

const PathElement: FunctionComponent<PathElementProps> = ({
  icon,
  label,
    ...props
}) => {
  return (
    // add props to styledflex
    <StyledFlex {...props}>
      <StyledIcon>{icon}</StyledIcon>
      <StyledText>{label}</StyledText>
    </StyledFlex>
  );
};

export interface PathProps {
  path: string[];
}

const StyledPathWrapper = styled.div`
  display: grid;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;
`;

const StyledPath = styled.div`
  width: 100%;
  overflow: hidden;
`;
const Path: FunctionComponent<PathProps> = ({ path }) => {
  // create a flexbox with 3 flex items
  // store the first item of the array in the first flex item
  // store the last item of the array in the last flex item
  // store the rest of the array in the middle flex item within another flexbox
  const first = path[0];
  const last = path[path.length - 1];
  const middle = path.slice(1, -1);

  const expandPath = (e) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    const children = parent.children;
    const index = Array.from(children).indexOf(target);

    // an array of the items before the hovered element
    const before = Array.from(children).slice(0, index);
    // an array of the items after the hovered element
    const after = Array.from(children).slice(index + 1);
    
    let gridColumnsGrid = ``;
    // add the number of items before the hovered element to the grid columns
    if (before.length > 0) {
        gridColumnsGrid += `repeat(${before.length}, minmax(0, min-content)) `;
    }
    // add the element being hovered to the grid columns
    gridColumnsGrid += `min-content `;
    // add the number of items after the hovered element to the grid columns
    if (after.length > 0) {
        gridColumnsGrid += `repeat(${after.length}, minmax(0, min-content)) `;
    }

    parent.style.gridTemplateColumns = gridColumnsGrid;
  }
  const collapsePath = (e) => {
    const target = e.currentTarget;
    const parent = target.parentElement;
    parent.style.gridTemplateColumns = `min-content repeat(${middle.length}, minmax(0, min-content)) min-content`;
  }
  return (
    <StyledPath>
      <StyledPathWrapper
        style={{
          gridTemplateColumns: `min-content repeat(${middle.length}, minmax(0, min-content)) min-content`,
        }}
        // onMouseOver={(e) => {
        //   e.currentTarget.style.gridTemplateColumns = `repeat(${path.length}, min-content)`;
        // }}
        // onMouseOut={(e) => {
        //   e.currentTarget.style.gridTemplateColumns = `min-content repeat(${middle.length}, minmax(0, min-content)) min-content`;
        // }}
      >
        <PathElement
          icon={<StoreIcon color="primary" size="large" />}
          label={first}
        />

        {middle.map((item, index) => (
          <PathElement
            key={index}
            icon={<ChevronRightIcon color="primary30" size="large" />}
            label={item}
            onMouseOver={expandPath}
            onMouseOut={collapsePath}
          />
        ))}

        <PathElement
          icon={<ChevronRightIcon color="primary30" />}
          label={last}
        />
      </StyledPathWrapper>
    </StyledPath>
  );
};

const PageCategoryShortcuts: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Flex
        flexDirection={"column"}
        backgroundColor="white"
        borderRadius="normal"
        shadow="raised"
      >
        <Path path={["Store", "Products", "Categories"]} />
        <Path path={["Store", "Products", "Categories", "Electronics"]} />
        <Path
          path={["Store", "Products", "Categories", "Electronics", "Computers"]}
        />
        <Path
          path={[
            "Store",
            "Products",
            "Categories",
            "Electronics",
            "Computers",
            "Laptops",
          ]}
        />
        <Path
          path={[
            "Store",
            "Products",
            "Categories",
            "Electronics",
            "Computers",
            "Laptops",
            "Apple",
          ]}
        />
        {/* a path with really long category names in all subcategories */}
        <Path
          path={[
            "A really long store name",
            "High-Performance, Water-Resistant Outdoor Sportswear",
            "Professional-Grade Kitchen Appliance Accessories",
            "Luxury, Hand-Crafted Solid Wood Furniture",
            "Eco-Friendly, Biodegradable Cleaning Supplies",
            "Advanced, Multi-Function Smart Home Automation Devices",
            "MacBook Pro 16-inch with Touch Bar",
          ]}
        />
      </Flex>
    </Page>
  );
};

export default PageCategoryShortcuts;
