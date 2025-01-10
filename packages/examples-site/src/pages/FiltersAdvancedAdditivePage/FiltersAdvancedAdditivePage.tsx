import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Flex,
  FlexItem,
  Box,
  Button,
  Panel,
  Chip,
  Table,
  TableItem,
  Text,
  Dropdown,
  ProgressCircle,
  Input,
  Form,
  FormGroup,
  Grid,
  Modal,
} from "@bigcommerce/big-design";
import { InfoIllustration } from "bigcommerce-design-patterns";
import {
  AddCircleOutlineIcon,
  AddIcon,
  CloseIcon,
  FilterListIcon,
  MoreHorizIcon,
  RemoveCircleOutlineIcon,
  SearchIcon,
} from "@bigcommerce/big-design-icons";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { theme } from "@bigcommerce/big-design-theme";
import {
  StyledGridItem,
  StyledFiltersLink,
  StyledPanelContents,
  StyledProductImage,
  StyledModalContents,
} from "./FiltersAdvancedAdditivePage.styled";

import { DummyItem } from "../../data/dummyProducts";
import { getCategories, getProducts } from "../../data/services";
import { Category } from "../../data/dummyCategories";
import { findCategoryById } from "../../helpers/categories";
import { formatPrice } from "../../helpers/price";
import { FilterRow } from "./FilterRow";

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
const PageFiltersAdvancedAdditive: FunctionComponent = () => {
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
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // let's reset the items to the original data if the search value is empty
    if (!event.target.value) {
      setItems(allItems);
      setTableItems(allItems);
    }
  };
  // search submission handler
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      // let's find the items
      const foundItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      // set the items
      setItems(foundItems);
      setTableItems(foundItems);
      setFiltersApplied(true);
    }
  };

  // EFFECTS

  // fetch categories and product all at once

  const [productCats, setProductCats] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);
  useEffect(() => {
    Promise.all([getCategories(), getProducts()]).then(
      ([categories, products]) => {
        setProductCats(categories as Category[]);
        setAllItems(products as Item[]);
        setItems(products as Item[]);
        setTableItems(products as Item[]);
        setItemsLoaded(true);
      }
    );
  }, []);

  // PAGE ELEMENTS

  // FILTERING MODAL
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [filterArray, setFilterArray] = useState([
    {
      logicalOperator: "where",
      field: "category",
      comparisonOperator: "=",
      value: undefined,
    },
  ]);

  const applyFilters = () => {
    // filter the items
    handleFiltering();

    // close the modal
    closeFilterModal();
  };

  const clearAllFilters = (e) => {
    e && e.preventDefault();

    handleFiltering(true);
    setFiltersApplied(false);
  };

  const openFilterModal = (e) => {
    e.preventDefault();
    setIsFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  const handleFiltering = (clear = false) => {
    let filteredItems = [...allItems];

    if (!clear) {
      if (searchValue != "" && searchValue !== undefined) {
        filteredItems = filteredItems.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }

      if (filterCategory.length > 0) {
        filteredItems = filteredItems.filter((item) => {
          let found = false;
          item.categories.forEach((cat) => {
            if (filterCategory.includes(cat)) {
              found = true;
            }
          });
          return found;
        });
      }

      if (filterPriceMin !== undefined) {
        filteredItems = filteredItems.filter(
          (item) => item.price >= filterPriceMin
        );
      }

      if (filterPriceMax !== undefined) {
        filteredItems = filteredItems.filter(
          (item) => item.price <= filterPriceMax
        );
      }

      if (filterStockMin !== undefined) {
        filteredItems = filteredItems.filter(
          (item) => item.stock >= filterStockMin
        );
      }

      if (filterStockMax !== undefined) {
        filteredItems = filteredItems.filter(
          (item) => item.stock <= filterStockMax
        );
      }
    }

    setItems(filteredItems as Item[]);
    setTableItems(filteredItems);
  };

  const addFilterRow = (e) => {
    e.preventDefault();
    const newFilterArray = [...filterArray];
    newFilterArray.push({
      logicalOperator: "or",
      field: "category",
      comparisonOperator: "=",
      value: undefined,
    });
    setFilterArray(newFilterArray);
  };

  const deleteFilterRow = (index) => {
    console.log("Delete filter row", index);
  };

  // onchange prop for filter row
  const updateFilters = (filter) => {
    console.log("Filter updated", filter);
  };

  const filterBuilder = (
    <StyledModalContents>
      {filterArray.map((filter, index) => (
        <Grid
          gridColumns="1fr 32px"
          gridGap="0.25rem"
          key={index}
          borderBottom="box"
          paddingVertical={"xSmall"}
          paddingHorizontal={"xLarge"}
        >
          <FilterRow
            index={index}
            filter={filter}
            onChange={(value) => {
              updateFilters(value);
            }}
            productCats={productCats}
          />
          {/* add or delete button */}
          <Button
              variant="utility"
              onClick={() => {
                deleteFilterRow(index);
              }}
              iconOnly={<RemoveCircleOutlineIcon />}
              disabled={filterArray.length === 1}
            />
        </Grid>
      ))}
      <Box paddingVertical="medium" paddingHorizontal="xLarge">
      <Button
        variant="secondary"
        onClick={addFilterRow}
        iconLeft={<AddIcon />}
      >
      Add
      </Button>
      </Box>
    </StyledModalContents>
  );

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
              filtersApplied
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
            description="There are instances where numerous filterable dimensions are not necessarily exposed in the displayed dataset. In such cases, we need to offer users the capability to obtain a subset of the data and easily view and modify the filtering parameters."
            title="Advanced filters"
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
                //search and filtering
              }
              <Box marginBottom="medium">
                <Grid gridColumns="1fr 100px" gridGap="1rem">
                  <Form fullWidth onSubmit={onSearchSubmit}>
                    <FormGroup>
                      <Input
                        placeholder="Search"
                        value={searchValue}
                        onChange={onSearchChange}
                        iconLeft={<SearchIcon color="secondary50" />}
                      />
                    </FormGroup>
                  </Form>
                  <Button
                    variant="secondary"
                    onClick={openFilterModal}
                    iconLeft={<FilterListIcon />}
                  >
                    Filter
                  </Button>
                </Grid>
              </Box>
              {filtersApplied && (
                <Flex
                  flexDirection={{ mobile: "row" }}
                  display={"inline-flex"}
                  flexWrap={"wrap"}
                  marginBottom="medium"
                  alignItems={"center"}
                >
                  {/* let's showcase the filters applied with chips here*/}
                  {/* <Chip
                      onDelete={() => setFilterStockMax(undefined)}
                      label={`Max stock: ${filterStockMax}`}
                    /> */}

                  <StyledFiltersLink href="#" onClick={clearAllFilters}>
                    <CloseIcon />
                    <span>Clear all filters</span>
                  </StyledFiltersLink>
                </Flex>
              )}
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
        <Modal
          actions={[
            { text: "Cancel", variant: "subtle", onClick: closeFilterModal },
            { text: "Apply", variant: "primary", onClick: applyFilters },
          ]}
          closeOnEscKey={true}
          header="Filter products"
          onClose={closeFilterModal}
          isOpen={isFilterModalOpen}
        >
          {filterBuilder}
        </Modal>
      </Page>
    </>
  );
};

export default PageFiltersAdvancedAdditive;
