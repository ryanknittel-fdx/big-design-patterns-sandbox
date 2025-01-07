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
  Fieldset,
  MultiSelect,
} from "@bigcommerce/big-design";
import { InfoIllustration } from "bigcommerce-design-patterns";
import {
  ArrowDropDownIcon,
  CloseIcon,
  FilterListIcon,
  MoreHorizIcon,
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
} from "./FiltersAdvancedPage.styled";

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
const PageFiltersAdvanced: FunctionComponent = () => {
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
  const [filterCategory, setFilterCategory] = useState<number[]>([]);
  const [filterPriceMin, setFilterPriceMin] = useState<number | undefined>(
    undefined
  );
  const [filterPriceMax, setFilterPriceMax] = useState<number | undefined>(
    undefined
  );
  const [filterStockMin, setFilterStockMin] = useState<number | undefined>(
    undefined
  );
  const [filterStockMax, setFilterStockMax] = useState<number | undefined>(
    undefined
  );

  const applyFilters = () => {
    console.log("Applying filters");
    console.log("Name", searchValue);
    console.log("Category", filterCategory);
    console.log("Price range", filterPriceMin, filterPriceMax);
    console.log("Stock range", filterStockMin, filterStockMax);

    // let's find out if filters are applied
    setFiltersApplied(
      searchValue !== "" ||
        filterCategory.length > 0 ||
        filterPriceMin !== undefined ||
        filterPriceMax !== undefined ||
        filterStockMin !== undefined ||
        filterStockMax !== undefined
    );

    // filter the items
    handleFiltering();

    // close the modal
    closeFilterModal();
  };

  const clearAllFilters = (e) => {
    e && e.preventDefault();
    setSearchValue("");
    setFilterCategory([]);
    setFilterPriceMin(undefined);
    setFilterPriceMax(undefined);
    setFilterStockMin(undefined);
    setFilterStockMax(undefined);

    handleFiltering(true);
    setFiltersApplied(false);
  };

  const openFilterModal = () => {
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
                <Grid gridColumns="1fr 120px" gridGap="1rem">
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
                    iconRight={<ArrowDropDownIcon />}
                  >
                    Filter
                  </Button>
                </Grid>
              </Box>
              {filtersApplied && (
                <Flex
                flexDirection={{mobile:"row"}}
                  display={"inline-flex"}
                  flexWrap={"wrap"}
                  marginBottom="medium"
                  alignItems={"center"}
                >
                  {/* let's showcase teh filters applied with chips here*/}
                  {searchValue && (
                    <Chip
                      onDelete={() => setSearchValue("")}
                      label={`Name: ${searchValue}`}
                    />
                  )}
                  {filterCategory.map((catId) => {
                    const cat = findCategoryById(productCats, catId);
                    return (
                      <Chip
                        key={catId}
                        onDelete={() =>
                          setFilterCategory(
                            filterCategory.filter((c) => c !== catId)
                          )
                        }
                        label={`Category: ${cat?.label}`}
                      />
                    );
                  })}
                  {filterPriceMin !== undefined && (
                    <Chip
                      onDelete={() => setFilterPriceMin(undefined)}
                      label={`Min price: ${filterPriceMin}`}
                    />
                  )}
                  {filterPriceMax !== undefined && (
                    <Chip
                      onDelete={() => setFilterPriceMax(undefined)}
                      label={`Max price: ${filterPriceMax}`}
                    />
                  )}
                  {filterStockMin !== undefined && (
                    <Chip
                      onDelete={() => setFilterStockMin(undefined)}
                      label={`Min stock: ${filterStockMin}`}
                    />
                  )}
                  {filterStockMax !== undefined && (
                    <Chip
                      onDelete={() => setFilterStockMax(undefined)}
                      label={`Max stock: ${filterStockMax}`}
                    />
                  )}
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
          <Form fullWidth>
            <FormGroup>
              <Box marginTop={"xxSmall"}>
                <Input
                  label={"Name"}
                  placeholder="Search by name"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </Box>
            </FormGroup>
            <FormGroup>
              <Box marginTop={"xxSmall"} marginBottom={"medium"}>
                <MultiSelect
                  multiple={true}
                  label={"Category"}
                  placeholder="Select a category"
                  onOptionsChange={(selected) => {
                    setFilterCategory(selected.map((sel) => sel));
                  }}
                  options={productCats.map((cat) => ({
                    value: cat.id,
                    content: cat.label,
                  }))}
                  value={filterCategory}
                ></MultiSelect>
              </Box>
            </FormGroup>
            <FormGroup>
              <Fieldset legend={"Price range"}>
                <Grid
                  gridColumns={{
                    mobile: "50px 1fr",
                    tablet: "50px 1fr 50px 1fr",
                  }}
                  gridGap="1rem"
                >
                  <StyledGridItem>
                    <Text>
                      <label htmlFor="priceMin">Min.</label>
                    </Text>
                  </StyledGridItem>
                  <StyledGridItem>
                    <Input
                      id="priceMin"
                      type="number"
                      value={filterPriceMin}
                      onChange={(e) =>
                        setFilterPriceMin(parseInt(e.target.value))
                      }
                    />
                  </StyledGridItem>
                  <StyledGridItem>
                    <Text>
                      <label htmlFor="priceMax">Max.</label>
                    </Text>
                  </StyledGridItem>
                  <StyledGridItem>
                    <Input
                      id="priceMax"
                      type="number"
                      value={filterPriceMax}
                      onChange={(e) =>
                        setFilterPriceMax(parseInt(e.target.value))
                      }
                    />
                  </StyledGridItem>
                </Grid>
              </Fieldset>
            </FormGroup>

            <FormGroup>
              <Fieldset legend={"Inventory"}>
                <Grid
                  gridColumns={{
                    mobile: "50px 1fr",
                    tablet: "50px 1fr 50px 1fr",
                  }}
                  gridGap="1rem"
                >
                  <StyledGridItem>
                    <Text>
                      <label htmlFor="invMin">Min.</label>
                    </Text>
                  </StyledGridItem>
                  <StyledGridItem>
                    <Input
                      id="invMin"
                      type="number"
                      value={filterStockMin}
                      onChange={(e) =>
                        setFilterStockMin(parseInt(e.target.value))
                      }
                    />
                  </StyledGridItem>
                  <StyledGridItem>
                    <Text>
                      <label htmlFor="invMax">Max.</label>
                    </Text>
                  </StyledGridItem>
                  <StyledGridItem>
                    <Input
                      id="invMax"
                      type="number"
                      value={filterStockMax}
                      onChange={(e) =>
                        setFilterStockMax(parseInt(e.target.value))
                      }
                    />
                  </StyledGridItem>
                </Grid>
              </Fieldset>
            </FormGroup>
          </Form>
        </Modal>
      </Page>
    </>
  );
};

export default PageFiltersAdvanced;
