import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Flex,
  Box,
  Button,
  Chip,
  TableItem,
  Input,
  Form,
  FormGroup,
  Grid,
  Modal,
  Fieldset,
  MultiSelect,
} from "@bigcommerce/big-design";
import {
  CloseIcon,
  FilterListIcon,
  SearchIcon,
} from "@bigcommerce/big-design-icons";
import { useNavigate } from "react-router";
import {
  StyledGridItem,
  StyledFiltersLink,
} from "./FiltersAdvancedPage.styled";

import { getCategories, getProducts } from "../../../data/services";
import { Category } from "../../../data/dummyCategories";
import { findCategoryById } from "../../../helpers/categories";

import ProductsTable, { Item } from "../../../common/ProductsTable";
import ProductsPage from "../../../common/ProductsPage";

interface Filter {
  name?: string;
  category: number[];
  priceMin: number | undefined;
  priceMax: number | undefined;
  stockMin: number | undefined;
  stockMax: number | undefined;
}

/**
 * PageList component - Displays a page with a list of items in a table.
 */
const PageFiltersAdvanced: FunctionComponent = () => {
  // NAVIGATION

  const navigate = useNavigate();

  // knowing the items are loaded helps us to show the loader or an empty state when the items are empty
  const [itemsLoaded, setItemsLoaded] = useState(false);

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
        setItemsLoaded(true);
      }
    );
  }, []);

  // SEARCH
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // let's reset the items to the original data if the search value is empty
    if (!event.target.value) {
      handleFiltering();
    }
  };
  // search submission handler
  const onSearchSubmit = (e) => {
    e.preventDefault();
    handleFiltering();
  };

  const clearAllFilters = (e) => {
    e && e.preventDefault();
    setFilters({
      name: filters.name,
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
    name: undefined,
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
      name: filters.name,
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

  const themFilters = (
    <>
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
          {filters.priceMin !== undefined && !isNaN(filters.priceMin) && (
            <Chip
              onDelete={() => deleteChip("priceMin")}
              label={`Min price: ${filters.priceMin}`}
            />
          )}
          {filters.priceMax !== undefined && !isNaN(filters.priceMax) && (
            <Chip
              onDelete={() => deleteChip("priceMax")}
              label={`Max price: ${filters.priceMax}`}
            />
          )}
          {filters.stockMin !== undefined && !isNaN(filters.stockMin) && (
            <Chip
              onDelete={() => deleteChip("stockMin")}
              label={`Min stock: ${filters.stockMin}`}
            />
          )}
          {filters.stockMax !== undefined && !isNaN(filters.stockMax) && (
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
    </>
  );

  return (
    <>
      <ProductsPage
        headerTitle="Advanced filters"
        headerDescription="There are instances where numerous filterable dimensions are not necessarily exposed in the displayed dataset. In such cases, we need to offer users the capability to obtain a subset of the data and easily view and modify the filtering parameters."
        filters={themFilters}
        products={
          <ProductsTable
            items={items}
            itemsLoaded={itemsLoaded}
            productCats={productCats}
            emptyFilterCriteria={
              filters.category.length === 0 &&
              filters.priceMin === undefined &&
              filters.priceMax === undefined &&
              filters.stockMin === undefined &&
              filters.stockMax === undefined
            }
          />
        }
      />
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
    </>
  );
};

export default PageFiltersAdvanced;
