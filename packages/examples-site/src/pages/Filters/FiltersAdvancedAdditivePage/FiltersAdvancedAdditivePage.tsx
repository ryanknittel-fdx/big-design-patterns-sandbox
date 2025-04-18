import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Flex,
  Box,
  Button,
  Chip,
  Input,
  Form,
  FormGroup,
  Grid,
  Text,
  Modal,
} from "@bigcommerce/big-design";
import {
  AddIcon,
  CloseIcon,
  FilterListIcon,
  OpenInNewIcon,
  RemoveCircleOutlineIcon,
  SearchIcon,
} from "@bigcommerce/big-design-icons";
import {
  StyledFiltersLink,
  StyledModalContents,
} from "./FiltersAdvancedAdditivePage.styled";

import { getCategories, getProducts } from "../../../data/services";
import { Category } from "../../../data/dummyCategories";
import { findCategoryById } from "../../../helpers/categories";
import { FilterRow } from "./FilterRow";

import ProductsTable, { Item } from "../../../common/ProductsTable";
import ProductsPage from "../../../common/ProductsPage";

interface Filter {
  logicalOperator: string;
  field: string;
  comparisonOperator: string;
  value: string | number | undefined;
}

/**
 * PageList component - Displays a page with a list of items in a table.
 */
const PageFiltersAdvancedAdditive: FunctionComponent = () => {
  // DATA HANDLING
  const [itemsLoaded, setItemsLoaded] = useState(false);

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
        setItemsLoaded(true);
      }
    );
  }, []);

  // SEARCH
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // let's reset the items to the original data if the search value is empty
    console.log(!event.target.value);
    if (!event.target.value) {
      const newFilterArray = [...filterArray];
      setFilterArray(newFilterArray);
    }
  };
  // search submission handler
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (searchValue) {
      // let's find the items
      const newFilterArray = [...filterArray];
      setFilterArray(newFilterArray);
    }
  };

  // FILTERING MODAL
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [filterArray, setFilterArray] = useState<Filter[]>([]);
  useEffect(() => {
    let filteredItems = [...allItems];

    // lets include search
    console.log(searchValue);
    if (searchValue) {
      filteredItems = filteredItems.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    const filterfunction = (baseArray, filter) => {
      return baseArray.filter((item) => {
        // let's switch through the comparison operators
        switch (filter.comparisonOperator) {
          case "=":
            return item[filter.field] == filter.value;
          case "!=":
            // here we could be either looking at an array or a single value
            return item[filter.field] != filter.value;
          case ">":
            return item[filter.field] > filter.value;
          case "<":
            return item[filter.field] < filter.value;
          case "contains":
            return item[filter.field].includes(filter.value);
          case "excludes":
            return !item[filter.field].includes(filter.value);
          default:
            return false;
        }
      });
    };
    filterArray.forEach((filter) => {
      // let's start by analyzing the logical operator
      if (filter.logicalOperator === "where") {
        // this is the first filter, so we start from here
        filteredItems = filterfunction(filteredItems, filter);
      } else if (filter.logicalOperator === "and") {
        // we add the filter to the current filtered items
        filteredItems = filterfunction(filteredItems, filter);
      } else {
        // this would be "or" logical operator, so we need to merge the current filtered items with the new filter
        const newFilteredItems = filterfunction(allItems, filter);
        filteredItems = [...filteredItems, ...newFilteredItems];
      }
    });

    setItems(filteredItems as Item[]);
  }, [filterArray]);

  const applyFilters = () => {
    // set the filter Array to the modal filter array
    setFilterArray(modalFilterArray);

    // close the modal
    closeFilterModal();
  };

  const clearAllFilters = (e) => {
    e && e.preventDefault();
    setFilterArray([]);
  };

  const openFilterModal = (e) => {
    e.preventDefault();
    // set the modal filter array to the current filter array
    const modalFilters =
      filterArray.length > 0
        ? filterArray
        : [
            {
              logicalOperator: "where",
              field: "categories",
              comparisonOperator: "contains",
              value: undefined,
            },
          ];
    setModalFilterArray(modalFilters);
    setIsFilterModalOpen(true);
  };
  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };

  // temporaty state for filters in modal
  const [modalFilterArray, setModalFilterArray] = useState<Filter[]>([]);
  const addFilterRow = (e) => {
    e.preventDefault();
    const newFilterArray = [...modalFilterArray];
    newFilterArray.push({
      logicalOperator: "or",
      field: "categories",
      comparisonOperator: "contains",
      value: undefined,
    });
    setModalFilterArray(newFilterArray);
  };

  const deleteFilterRow = (index) => {
    setModalFilterArray((prevFilterArray) => {
      const updatedFilterArray = prevFilterArray.filter((_, i) => i !== index);
      return updatedFilterArray;
    });
  };

  const updateModalFilters = (filter) => {
    setModalFilterArray((prevFilterArray) => {
      const updatedFilterArray = prevFilterArray.map((prevFilter, i) => {
        if (i === filter.index) {
          return filter;
        }
        return prevFilter;
      });
      return updatedFilterArray;
    });
  };

  const deleteChip = (index) => {
    setFilterArray((prevFilterArray) => {
      const updatedFilterArray = prevFilterArray.filter((_, i) => i !== index);
      return updatedFilterArray;
    });
  };

  const filterBuilder = (
    <StyledModalContents>
      {modalFilterArray.map((filter, index) => (
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
              updateModalFilters(value);
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

  const filters = (
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
      {filterArray.length > 0 && (
        <Flex
          flexDirection={{ mobile: "row" }}
          display={"inline-flex"}
          flexWrap={"wrap"}
          marginBottom="medium"
          alignItems={"center"}
        >
          {/* let's showcase the filters applied with chips here*/}
          {filterArray.map((filter: Filter, index) => {
            const filterFieldCapitalized =
              filter.field.charAt(0).toUpperCase() + filter.field.slice(1);
            const filterLogicalOperatorUppercase =
              filter.logicalOperator.toUpperCase();
            if (filter.field === "categories") {
              const cat =
                filter.value !== undefined
                  ? findCategoryById(productCats, Number(filter.value))
                  : undefined;
              return (
                <Chip
                  key={filter.value}
                  onDelete={() => {
                    deleteChip(index);
                  }}
                  label={`${
                    filter.logicalOperator !== "where"
                      ? filterLogicalOperatorUppercase
                      : ""
                  } ${filterFieldCapitalized} ${filter.comparisonOperator} ${
                    cat?.label
                  }`}
                />
              );
            }
            return (
              <Chip
                key={index}
                onDelete={() => {
                  deleteChip(index);
                }}
                label={`${
                  filter.logicalOperator !== "where"
                    ? filterLogicalOperatorUppercase
                    : ""
                } ${filterFieldCapitalized} ${filter.comparisonOperator} ${
                  filter.value
                }`}
              />
            );
          })}
          {filterArray.length > 0 && (
            <StyledFiltersLink href="#" onClick={clearAllFilters}>
              <CloseIcon />
              <span>Clear all filters</span>
            </StyledFiltersLink>
          )}
        </Flex>
      )}
    </>
  );

  return (
    <>
      <ProductsPage
        headerDescription={
          <Text>
            To be used wen you want to configure filters very precisely in
            additive mode and save teh views for later use.{" "}
            <a
              href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/Filters/FiltersAdvancedAdditivePage/FiltersAdvancedAdditivePage.tsx"
              target="_blank"
            >
              View source <OpenInNewIcon size="small" />
            </a>
          </Text>
        }
        headerTitle="Advanced additive filters with views"
        filters={filters}
        products={
          <ProductsTable
            items={items}
            itemsLoaded={itemsLoaded}
            productCats={productCats}
            emptyFilterCriteria={filterArray.length > 0}
          />
        }
      />

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
    </>
  );
};

export default PageFiltersAdvancedAdditive;
