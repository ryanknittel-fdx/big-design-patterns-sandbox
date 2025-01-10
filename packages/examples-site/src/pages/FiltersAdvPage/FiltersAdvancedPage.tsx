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

interface Filter {
  category: number[];
  priceMin: number | undefined;
  priceMax: number | undefined;
  stockMin: number | undefined;
  stockMax: number | undefined;
}

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

  // knowing the items are loaded helps us to show the loader or an empty state when the items are empty
  const [itemsLoaded, setItemsLoaded] = useState(false);

  // we use this state to hold the items to be displayed in the multiple pages of the table
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
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

  // fetch categories and product all at once
  const [productCats, setProductCats] = useState<Category[]>([]);

  // we use this state to hold the total items in all pages of the dataset
  const [items, setItems] = useState<Item[]>([]);

  // we use the state to hold the original dataset
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

  /**
   * DATASET HANDLING
   */
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
    }
  };

  const clearAllFilters = (e) => {
    e && e.preventDefault();
    setFilters({
      category: [],
      priceMin: undefined,
      priceMax: undefined,
      stockMin: undefined,
      stockMax: undefined,
    });

    handleFiltering();
  };

  const handleFiltering = () => {
    let filteredItems = [...allItems];
    if (searchValue != "" && searchValue !== undefined) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (filters.category.length > 0) {
      filteredItems = filteredItems.filter((item) => {
        let found = false;
        item.categories.forEach((cat) => {
          if (filters.category.includes(cat)) {
            found = true;
          }
        });
        return found;
      });
    }

    if (filters.priceMin !== undefined && !isNaN(filters.priceMin)) {
      filteredItems = filteredItems.filter(
        (item) => item.price >= (filters.priceMin ?? 0)
      );
    }

    if (filters.priceMax !== undefined && !isNaN(filters.priceMax)) {
      filteredItems = filteredItems.filter(
        (item) => item.price <= (filters.priceMax ?? Infinity)
      );
    }

    if (filters.stockMin !== undefined && !isNaN(filters.stockMin)) {
      filteredItems = filteredItems.filter(
        (item) => item.stock >= (filters.stockMin ?? 0)
      );
    }

    if (filters.stockMax !== undefined && !isNaN(filters.stockMax)) {
      filteredItems = filteredItems.filter(
        (item) => item.stock <= (filters.stockMax ?? Infinity)
      );
    }

    setItems(filteredItems as Item[]);
    setTableItems(filteredItems);
  };

  const deleteChip = (type: string, value?: number) => {
    const currentFilters = { ...filters };
    if (type === "category") {
      currentFilters.category = currentFilters.category.filter(
        (cat) => cat !== value
      );
    } else {
      currentFilters[type] = value;
    }
    setFilters(currentFilters);
  };

  /**
   * FILTERING MODAL
   */
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState<Filter>({
    category: [],
    priceMin: undefined,
    priceMax: undefined,
    stockMin: undefined,
    stockMax: undefined,
  });
  useEffect(() => {
    handleFiltering();
  }, [filters]);

  const [modalFilters, setModalFilters] = useState<Filter>({
    category: [],
    priceMin: undefined,
    priceMax: undefined,
    stockMin: undefined,
    stockMax: undefined,
  });
  const assignModalFilter = (key, value) => {
    setModalFilters({ ...modalFilters, [key]: value });
  };

  const applyModalFilters = () => {
    setFilters({
      category: modalFilters.category,
      priceMin: modalFilters.priceMin,
      priceMax: modalFilters.priceMax,
      stockMin: modalFilters.stockMin,
      stockMax: modalFilters.stockMax,
    });

    // close the modal
    closeFilterModal();
  };

  const openFilterModal = () => {
    setModalFilters(filters);
    setIsFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  /**
   * EMPTY STATE
   */
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
              filters.category.length > 0 ||
              filters.priceMin !== undefined ||
              filters.priceMax !== undefined ||
              filters.stockMin !== undefined ||
              filters.stockMax !== undefined
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
                        type="search"
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
              {filters.category.length > 0 ||
              filters.priceMin !== undefined ||
              filters.priceMax !== undefined ||
              filters.stockMin !== undefined ||
              filters.stockMax !== undefined ? (
                <Flex
                  flexDirection={{ mobile: "row" }}
                  display={"inline-flex"}
                  flexWrap={"wrap"}
                  marginBottom="medium"
                  alignItems={"center"}
                >
                  {/* let's showcase the filters applied with chips here*/}
                  {filters.category.map((catId) => {
                    const cat = findCategoryById(productCats, catId);
                    return (
                      <Chip
                        key={catId}
                        onDelete={() => {
                          deleteChip("category", catId);
                        }}
                        label={`Category: ${cat?.label}`}
                      />
                    );
                  })}
                  {filters.priceMin !== undefined &&
                    !isNaN(filters.priceMin) && (
                      <Chip
                        onDelete={() => deleteChip("priceMin")}
                        label={`Min price: ${filters.priceMin}`}
                      />
                    )}
                  {filters.priceMax !== undefined &&
                    !isNaN(filters.priceMax) && (
                      <Chip
                        onDelete={() => deleteChip("priceMax")}
                        label={`Max price: ${filters.priceMax}`}
                      />
                    )}
                  {filters.stockMin !== undefined &&
                    !isNaN(filters.stockMin) && (
                      <Chip
                        onDelete={() => deleteChip("stockMin")}
                        label={`Min stock: ${filters.stockMin}`}
                      />
                    )}
                  {filters.stockMax !== undefined &&
                    !isNaN(filters.stockMax) && (
                      <Chip
                        onDelete={() => deleteChip("stockMax")}
                        label={`Max stock: ${filters.stockMax}`}
                      />
                    )}
                  <StyledFiltersLink href="#" onClick={clearAllFilters}>
                    <CloseIcon />
                    <span>Clear all filters</span>
                  </StyledFiltersLink>
                </Flex>
              ) : null}
              <StyledPanelContents>
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
            { text: "Apply", variant: "primary", onClick: applyModalFilters },
          ]}
          closeOnEscKey={true}
          header="Filter products"
          onClose={closeFilterModal}
          isOpen={isFilterModalOpen}
        >
          <Form fullWidth marginBottom={"small"}>
            <FormGroup>
              <Box marginTop={"xxSmall"} marginBottom={"medium"}>
                <MultiSelect
                  multiple={true}
                  label={"Category"}
                  placeholder="Select a category"
                  onOptionsChange={(selected) => {
                    assignModalFilter(
                      "category",
                      selected.map((sel) => sel)
                    );
                  }}
                  options={productCats.map((cat) => ({
                    value: cat.id,
                    content: cat.label,
                  }))}
                  value={modalFilters.category}
                ></MultiSelect>
              </Box>
            </FormGroup>
            <FormGroup>
              <Fieldset legend={"Price range"}>
                <Grid
                  gridColumns={{
                    mobile: "1fr",
                    tablet: "1fr 1fr",
                  }}
                  gridGap="1rem"
                >
                  <StyledGridItem>
                    <Input
                      id="priceMin"
                      type="number"
                      value={modalFilters.priceMin}
                      onChange={(e) =>
                        assignModalFilter("priceMin", parseInt(e.target.value))
                      }
                      placeholder="Min."
                    />
                  </StyledGridItem>
                  <StyledGridItem>
                    <Input
                      id="priceMax"
                      type="number"
                      value={modalFilters.priceMax}
                      onChange={(e) =>
                        assignModalFilter("priceMax", parseInt(e.target.value))
                      }
                      placeholder="Max."
                    />
                  </StyledGridItem>
                </Grid>
              </Fieldset>
            </FormGroup>

            <FormGroup>
              <Fieldset legend={"Inventory"}>
                <Grid
                  gridColumns={{
                    mobile: "1fr",
                    tablet: "1fr 1fr",
                  }}
                  gridGap="1rem"
                >
                  <StyledGridItem>
                    <Input
                      id="invMin"
                      type="number"
                      value={modalFilters.stockMin}
                      placeholder="Min."
                      onChange={(e) =>
                        assignModalFilter("invMin", parseInt(e.target.value))
                      }
                    />
                  </StyledGridItem>
                  <StyledGridItem>
                    <Input
                      id="invMax"
                      type="number"
                      placeholder="Max."
                      value={modalFilters.stockMax}
                      onChange={(e) =>
                        assignModalFilter("stockMax", parseInt(e.target.value))
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
