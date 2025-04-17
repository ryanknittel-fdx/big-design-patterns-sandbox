import React, { FunctionComponent, useState, useEffect } from "react";
import { Box, Search, Text } from "@bigcommerce/big-design";
import { OpenInNewIcon } from "@bigcommerce/big-design-icons";

import { getCategories, getProducts } from "../../../data/services";
import { Category } from "../../../data/dummyCategories";

import ProductsTable, { Item } from "../../../common/ProductsTable";
import ProductsPage from "../../../common/ProductsPage";

/**
 * PageList component - Displays a page with a list of items in a table.
 */
const PageFiltersSearch: FunctionComponent = () => {
  // DATA HANDLING
  const [itemsLoaded, setItemsLoaded] = useState(false);

  // SEARCH
  const [searchValue, setSearchValue] = useState("");
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    // let's reset the items to the original data if the search value is empty
    if (!event.target.value) {
      setItems(allItems);
    }
  };
  // search submission handler
  const onSearchSubmit = () => {
    if (searchValue) {
      // let's find the items
      const foundItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      // set the items
      setItems(foundItems);
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
        setItemsLoaded(true);
      }
    );
  }, []);

  // PAGE ELEMENTS

  const filters = (
    <Box marginBottom="medium">
      <Search
        onChange={onSearchChange}
        onSubmit={onSearchSubmit}
        value={searchValue}
      />
    </Box>
  );

  return (
    <ProductsPage
      filters={filters}
      headerDescription={
        <Text>
          Filtering data using simple search.{" "}
          <a
            href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/Filters/FiltersSearchPage/FiltersSearchPage.tsx"
            target="_blank"
          >
            View source <OpenInNewIcon size="small" />
          </a>
        </Text>
      }
      headerTitle="Simple search"
      products={
        <ProductsTable
          items={items}
          itemsLoaded={itemsLoaded}
          productCats={productCats}
          emptyFilterCriteria={searchValue !== ""}
        />
      }
    />
  );
};

export default PageFiltersSearch;
