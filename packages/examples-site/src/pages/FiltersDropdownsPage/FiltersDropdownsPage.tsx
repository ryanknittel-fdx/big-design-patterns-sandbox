import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Flex,
  FlexItem,
  Button,
  Panel,
  Table,
  TableItem,
  Text,
  Dropdown,
  ProgressCircle,
  Select,
  Grid,
} from "@bigcommerce/big-design";
import { InfoIllustration } from "bigcommerce-design-patterns";
import { MoreHorizIcon } from "@bigcommerce/big-design-icons";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { theme } from "@bigcommerce/big-design-theme";
import {
  StyledPanelContents,
  StyledProductImage,
} from "./FiltersDropdownsPage.styled";

import { DummyItem } from "../../data/dummyProducts";
import { getCategories, getProducts } from "../../data/services";
import { Category } from "../../data/dummyCategories";
import { findCategoryById } from "../../helpers/categories";
import { formatPrice } from "../../helpers/price";

/**
 * Mock data for the items to be displayed in the table.
 */
interface Item extends DummyItem, TableItem {}

/**
 * Column definitions for the table.
 */

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
 * PageList component - Displays a page with a list of items in a table.
 */
const PageFiltersDropdowns: FunctionComponent = () => {
  // NAVIGATION
  const location = useLocation();

  const navigate = useNavigate();

  // TABLE HEADERS
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
      isSortable: true,
    },
    {
      header: "Sku",
      hash: "sku",
      render: ({ sku }: { sku: string }) => sku,
      isSortable: true,
    },
    {
      header: "Categories",
      hash: "categories",
      render: ({ categories }: { categories: number[] }) => {
        // get category labels from a deep object and join them
        return categories
          .map((categoryId) => {
            const category = findCategoryById(productCats, categoryId);
            return category ? category.label : "";
          })
          .join(", ");
      },
    },
    {
      header: "Stock",
      hash: "stock",
      render: ({ stock }: { stock: number }) => stock,
      isSortable: true,
    },
    {
      header: "Price",
      hash: "price",
      render: ({ price }: { price: number }) => formatPrice(price),
      isSortable: true,
    },
    {
      header: null,
      hash: "actions",
      render: ({ productId, url }: { productId: number; url: string }) => {
        return (
          <Dropdown
            items={[
              {
                content: "Some action",
                onItemClick: () => {
                  return null;
                },
                hash: "edsome-action",
              },
              {
                content: "Some other action",
                onItemClick: () => {
                  return null;
                },
                hash: "some-other-action",
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
      isSortable: true,
    },
  ];

  // DATA HANDLING
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
  const [itemsLoaded, setItemsLoaded] = useState(false);

  const setTableItems = (
    themItems: any,
    thePage = currentPage,
    itemCount = itemsPerPage
  ) => {
    const maxItems = thePage * itemCount;
    const lastItem = Math.min(maxItems, themItems.length);
    const firstItem = Math.max(0, maxItems - itemsPerPage);

    setCurrentItems(themItems.slice(firstItem, lastItem));
  };

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPageOptions] = useState([10, 20, 30]);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const onItemsPerPageChange = (newRange: number) => {
    setCurrentPage(1);
    setItemsPerPage(newRange);
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
    setTableItems(items, newPage);
  };

  // SORTING
  const [columnHash, setColumnHash] = useState("");
  const [direction, setDirection] = useState<"ASC" | "DESC">("ASC");
  const onSort = (newColumnHash: string, newDirection: "ASC" | "DESC") => {
    setColumnHash(newColumnHash);
    setDirection(newDirection);
    const orderedItems = sort(items, newColumnHash, newDirection);
    setTableItems(orderedItems);
  };

  // SEARCH
  const [filterApplied, setFilterApplied] = useState(false);
  
  // categroy state could be a number or undefined
  const [chosenCategory, setChosenCategory] = useState<number | null>(null);
  
  const [chosenAvailability, setChosenAvailability] = useState<string | null>(null);

  const handleCategoryChange = (category:number | null) => {
    handleFiltering(category, chosenAvailability);
  };

  const handleAvailabilityChange = (availability:string | null) => {
    handleFiltering(chosenCategory, availability);
  };

  const handleFiltering = (
    category = chosenCategory,
    availability = chosenAvailability
  ) => {
    setChosenCategory(category);
    setChosenAvailability(availability);
    let filteredItems = [...allItems];

    if (category !== null) {
      filteredItems = filteredItems.filter((item) => {
        return item.categories.includes(category);
      });
    }

    if (availability !== null) {
      filteredItems = filteredItems.filter((item) => {
        return availability === "in-stock" ? item.stock > 0 : item.stock === 0;
      });
    }

    setItems(filteredItems as Item[]);
    setTableItems(filteredItems);
    setFilterApplied(true);
  };

  // EFFECTS

  // fetch categories and product all at once

  const [productCats, setProductCats] = useState<Category[]>([]);
  const [formattedCats, setFormattedCats] = useState<
    { value: number; content: string }[]
  >([]);
  const [items, setItems] = useState<Item[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);

  const formatCats = (cats: Category[]) => {
    const catsOutput: { value: number; content: string }[] = [];
    // a recursive function to format the categories as a flat array
    const format = (cat: Category, pre = "") => {
      catsOutput.push({
        value: cat.id,
        content: pre + cat.label,
      });
      if (cat.children) {
        pre += "- ";
        cat.children.forEach((child) => {
          format(child, pre);
        });
      }
    };

    cats.forEach((cat) => {
      format(cat);
    });

    setFormattedCats(catsOutput);
  };
  useEffect(() => {
    Promise.all([getCategories(), getProducts()]).then(
      ([categories, products]) => {
        setProductCats(categories as Category[]);
        formatCats(categories as Category[]);
        setAllItems(products as Item[]);
        setItems(products as Item[]);
        setTableItems(products as Item[]);
        setItemsLoaded(true);
      }
    );
  }, []);

  // PAGE ELEMENTS

  // Empty state
  const EmptyState = (
    <Flex
      justifyContent="center"
      paddingVertical="xxxLarge"
      marginBottom="xxxLarge"
    >
      {items.length < 1 && !itemsLoaded ? (
        // if products havent been loaded, let's show a loader
        <ProgressCircle size="large" />
      ) : (
        // if products have been loaded, let's show the empty
        <InfoIllustration icon="empty">
          <Text color="secondary60">
            {
              // differentiate from empty search or empty products and show a loader element if the data is being fetched
              filterApplied
                ? `No products were found for the criteria`
                : "You have no products yet."
            }
          </Text>
        </InfoIllustration>
      )}
    </Flex>
  );

  return (
    <>
      <Page
        header={
          <Header
            description="Filtering data using dropdowns"
            title="Dropdown Filtering"
            backLink={{
              text: "Back to patterns",
              onClick: () => navigate("/"),
              href: "#",
            }}
          />
        }
      >
        <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
          <FlexItem>
            {
              //The most common way of organizing information within the BigDesign patterns is with the use of panels.
              //In this case we only have one panel, but you can have multiple panels within a page.
            }
            <Panel header="Items list">
              {
                //dropdowns
              }
              <Grid marginBottom="medium" gridColumns={{mobile:"repeat(1fr)", tablet:"repeat(2, 1fr)"}}>
                <Select
                  maxHeight={300}
                  onOptionChange={handleCategoryChange}
                  options={[
                    {
                      value: null,
                      content: "All categories",
                    },
                    ...formattedCats,
                  ]}
                  placeholder="Filter by category"
                  value={chosenCategory}
                ></Select>
                <Select
                  maxHeight={300}
                  onOptionChange={handleAvailabilityChange}
                  options={[
                    {
                      value: null,
                      content: "All products",
                    },
                    {
                      value: "in-stock",
                      content: "In Stock",
                    },
                    {
                      value: "out-of-stock",
                      content: "Out of Stock",
                    },
                  ]}
                  placeholder="Filter by availability"
                  value={chosenAvailability}
                ></Select>
              </Grid>
              <StyledPanelContents>
                {
                  //The Table component is used to display tabular data.
                  //It allows you to display a list of items in a table format.
                  //The table can be customized with different columns and actions.
                  //The table also allows you to select items and perform actions on them.
                  //In this case, the table is displaying a list of products.
                }
                <Table
                  columns={columns as any}
                  itemName="Products"
                  items={currentItems}
                  keyField="sku"
                  pagination={{
                    currentPage,
                    totalItems: items.length,
                    onPageChange,
                    itemsPerPageOptions,
                    onItemsPerPageChange,
                    itemsPerPage,
                  }}
                  sortable={{
                    columnHash,
                    direction,
                    onSort,
                  }}
                  emptyComponent={EmptyState}
                />
              </StyledPanelContents>
            </Panel>
          </FlexItem>
        </Flex>
      </Page>
    </>
  );
};

export default PageFiltersDropdowns;
