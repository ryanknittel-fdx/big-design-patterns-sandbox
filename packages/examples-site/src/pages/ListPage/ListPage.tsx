import React, { FunctionComponent, useState } from "react";
import {
  Flex,
  FlexItem,
  Button,
  Select,
  Message,
  Panel,
  Table,
  TableItem,
  Text,
  Dropdown,
} from "@bigcommerce/big-design";
import { ContextSelector } from "bigcommerce-design-patterns";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import {
  AddIcon,
  SettingsIcon,
  MoreHorizIcon,
  OpenInNewIcon
} from "@bigcommerce/big-design-icons";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { StyledPanelContents, StyledProductImage } from "./ListPage.styled";

/**
 * Interface for defining the structure of an item in the table.
 */
interface Item extends TableItem {
  sku: string;
  name: string;
  stock: number;
  image: string;
  categories: string;
  price: string;
}

/**
 * Mock data for the items to be displayed in the table.
 */
const data: Item[] = [
  // Sample data for items
  {
    sku: "649C853EC78E9",
    image:
      "unisex-tri-blend-t-shirt-athletic-grey-triblend-front-649c8533a9535__28840.jpg",
    name: "US H1 2023 Hackathon T-Shirt",
    categories: "Shirts, Shop all",
    stock: 10,
    price: "$27.00",
  },
  {
    sku: "63F7E833D2F85",
    image:
      "unisex-tri-blend-t-shirt-charcoal-black-triblend-back-63f7e82d1ec00__11413.jpg",
    name: "Built For Growth T-Shirt",
    categories: "Shirts, Shop all",
    stock: 77,
    price: "$36.00",
  },
  {
    sku: "63F6D66B58B96",
    image: "stainless-steel-tumbler-white-front-63f6d6648c6bb__16236.jpg",
    name: "City Pattern Tumbler",
    categories: "New, Shop all",
    stock: 6,
    price: "$23.00",
  },
  {
    sku: "63F6D301C5F1C",
    image: "stainless-steel-tumbler-black-front-63f6d2fb75b9e__30788.jpg",
    name: "Logo Tumbler",
    categories: "New, Shop all",
    stock: 3,
    price: "$21.00",
  },
  {
    sku: "63F6D0B2ADA7B",
    image: "stainless-steel-tumbler-white-front-63f6d0ac552b9__33511.jpg",
    name: "Patterned Tumbler",
    categories: "New, Shop all",
    stock: 0,
    price: "$23.00",
  },
  {
    sku: "63F6D0B2ADA7C",
    image: "tie-dye-hat-cotton-candy-front-6283b883884fa__86520.jpg",
    name: `Community Tie Dye Hat "Celebrity"`,
    categories: "Baseball caps, S...",
    stock: 0,
    price: "$18.00",
  },
  {
    sku: "626C6BABE588D",
    image:
      "unisex-tri-blend-t-shirt-white-fleck-triblend-front-626c6ba2622f1__53288.jpg",
    name: "I Love Small Businesses Unisex T-Shirt",
    categories: "Shirts, Shop All",
    stock: 21,
    price: "$29.00",
  },
  {
    sku: "626C6AB917066",
    image: "kiss-cut-stickers-3x3-default-626c6ab65721c__69931.jpg",
    name: "I Love Small Businesses 3x3 Sticker",
    categories: "Stickers, Acces...",
    stock: 31,
    price: "$5.00",
  },
  {
    sku: "626C6A762DEF3",
    image: "white-glossy-mug-15oz-handle-on-left-626c6a735697e__28707.webp",
    name: "I Love Small Businesses 15 oz Mug",
    categories: "Mugs, Accesso...",
    stock: 23,
    price: "$18.00",
  },
  {
    sku: "621E68891BB26",
    image: "unisex-heavy-blend-hoodie-black-front-621e6e5255811__14735.jpg",
    name: "Team on a Mission Unisex Hoodie",
    categories: "Hoodies, Shop...",
    stock: 8,
    price: "$45.00",
  },
];

/**
 * Column definitions for the table.
 */
const columns = [
  {
    header: "Name",
    hash: "name",
    render: ({ name, image }: { name: string; image: string }) => {
      const imgSrc = `./assets/images/product-images/${image}`;
      return (
        <Flex flexGap={theme.spacing.small} alignItems="center">
          <StyledProductImage>
            <img src={imgSrc} alt={name} />
          </StyledProductImage>
          <Text>{name}</Text>
        </Flex>
      );
    },
  },
  { header: "Sku", hash: "sku", render: ({ sku }: { sku: string }) => sku },
  {
    header: "Categories",
    hash: "categories",
    render: ({ categories }: { categories: string }) => categories,
  },
  {
    header: "Stock",
    hash: "stock",
    render: ({ stock }: { stock: number }) => stock,
  },
  {
    header: "Price",
    hash: "price",
    render: ({ price }: { price: string }) => price,
  },
  {
    header: "",
    hash: "actions",
    render: () => {
      return (
        <Dropdown
          items={[
            {
              content: "Edit",
              onItemClick: (item) => item,
              hash: "edit",
            },
            {
              content: "Duplicate",
              onItemClick: (item) => item,
              hash: "duplicate",
            },
            {
              content: "Delete",
              onItemClick: (item) => item,
              hash: "delete",
              actionType: "destructive",
            },
          ]}
          maxHeight={250}
          placement="bottom-end"
          toggle={
            <Button variant="utility" iconOnly={<MoreHorizIcon />}></Button>
          }
        />
      );
    },
  },
];

/**
 * Function to sort the items based on a column and direction.
 * @param {Item[]} items - The items to sort.
 * @param {string} columnHash - The column to sort by.
 * @param {string} direction - The direction to sort (ASC or DESC).
 * @returns {Item[]} - The sorted items.
 */
const sort = (items: Item[], columnHash: string, direction: string) => {
  return items
    .concat()
    .sort((a, b) =>
      direction === "ASC"
        ? a[columnHash] >= b[columnHash]
          ? 1
          : -1
        : a[columnHash] <= b[columnHash]
        ? 1
        : -1
    );
};

/**
 * Page header call-to-actions (CTAs) component.
 */
const PageHeaderCTAs = [
  {
    text: "Add Item",
    iconLeft: <AddIcon />,
    onClick: () => {
      window.alert("Add item clicked");
    },
    mobileWidth: "100%",
  },
];

/**
 * PageList component - Displays a page with a list of items in a table.
 */
const PageList: FunctionComponent = () => {
  const navigate = useNavigate();

  const backButtonClickHandler = () => {
    navigate("/");
  };

  const [contextValue, setContextValue] = useState("mx");

  const handleContextChange = (val: string) => setContextValue(val);

  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  return (
    <Page
      header={
        <Header
          actions={PageHeaderCTAs}
          description={
                  <Text>
                    List pages are the bread and butter of an application, where you present a number of items to act upon.{" "}
                    <a
                      href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/ListPage/ListPage.tsx"
                      target="_blank"
                    >
                      View source <OpenInNewIcon size="small" />
                    </a>
                  </Text>
                }
          title="List Page"
          backLink={{
            text: "Back to patterns",
            onClick: backButtonClickHandler,
            href: "#",
          }}
        ></Header>
      }
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <FlexItem>
          {/**
           * ContextSelector component to allow users to switch between different contexts.
           * The ContextSelector component is a custom component that is not part of the BigDesign library.
           * It is used when you have to change the context of the data shown below.
           * Usually it is used within the BigCommerce control panel to define the storefront for which the data applies
           */}
          <ContextSelector>
            <Flex justifyContent="space-between">
              <Select
                maxHeight={300}
                onOptionChange={handleContextChange}
                options={[
                  { value: "one", content: "Context 1" },
                  { value: "two", content: "Context 2" },
                  { value: "three", content: "Context 3" },
                ]}
                placeholder="Choose context"
                placement="bottom-start"
                value={contextValue}
              />
              {/**
               * The end area of the context selector can contain additional actions or tools around the context.
               */}
              <Button
                variant="subtle"
                iconLeft={<SettingsIcon />}
                onClick={() => {
                  window.alert("Add modal with other tools");
                }}
              >
                Context tools
              </Button>
            </Flex>
          </ContextSelector>
        </FlexItem>
        {/**
         * This is where you can add a message component to display information to the user.
         * Messages can be varied in type (info, success, warning, error) and can contain a header and a list of messages.
         * It's usually used to provide initial information or changes that the user needs to be aware of.
         * It's mostly used to provide validation messages when the user has submitted data and gets an error response from the server. In that case the type changes to error.
         * */}
        <FlexItem>
          <Message
            type="info"
            header="Optional header"
            messages={[
              {
                text: "Required description copy.",
                link: {
                  text: "Optional Link",
                  href: "#",
                },
              },
            ]}
          />
        </FlexItem>
        <FlexItem>
          {/**
           * The most common way of organizing information within the BigDesign patterns is with the use of panels.
           * In this case we only have one panel, but you can have multiple panels within a page.
           **/}
          <Panel
            header="Items list"
            description="Common actions you'll create within a page"
          >
            <StyledPanelContents>
              {/**
               * The Table component is used to display tabular data.
               * It allows you to display a list of items in a table format.
               * The table can be customized with different columns and actions.
               * The table also allows you to select items and perform actions on them.
               * In this case, the table is displaying a list of products.
               **/}
              <Table
                columns={columns}
                itemName="Products"
                items={data}
                keyField="sku"
                selectable={{
                  selectedItems,
                  onSelectionChange: setSelectedItems,
                }}
              />
            </StyledPanelContents>
          </Panel>
        </FlexItem>
      </Flex>
    </Page>
  );
};

export default PageList;
