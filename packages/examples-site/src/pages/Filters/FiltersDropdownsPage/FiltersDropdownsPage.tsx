import React, { FunctionComponent, useState, useEffect } from "react";
import { Text, Select, Grid } from "@bigcommerce/big-design";
import { OpenInNewIcon } from "@bigcommerce/big-design-icons";

import { getCategories, getProducts } from "../../../data/services";
import { Category } from "../../../data/dummyCategories";

import ProductsTable, { Item } from "../../../common/ProductsTable";
import ProductsPage from "../../../common/ProductsPage";

/**
 * PageList component - Displays a page with a list of items in a table.
 */
const PageFiltersDropdowns: FunctionComponent = () => {
  // DATA HANDLING
  const [itemsLoaded, setItemsLoaded] = useState(false);

  // SEARCH
  const [filterApplied, setFilterApplied] = useState(false);

  // categroy state could be a number or undefined
  const [chosenCategory, setChosenCategory] = useState<number | null>(null);

  const [chosenAvailability, setChosenAvailability] = useState<string | null>(
    null
  );

  const handleCategoryChange = (category: number | null) => {
    handleFiltering(category, chosenAvailability);
  };

  const handleAvailabilityChange = (availability: string | null) => {
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
        setItemsLoaded(true);
      }
    );
  }, []);

  const filters = (
    <Grid
      marginBottom="medium"
      gridColumns={{ mobile: "repeat(1fr)", tablet: "repeat(2, 1fr)" }}
    >
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
  );

  return (
    <ProductsPage
      headerTitle="Dropdown Filtering"
      headerDescription={
        <Text>
          Filtering data using dropdowns.{" "}
          <a
            href="https://github.com/bigcommerce/big-design-patterns-sandbox/blob/main/packages/examples-site/src/pages/Filters/FiltersDropdownsPage/FiltersDropdownsPage.tsx"
            target="_blank"
          >
            View source <OpenInNewIcon size="small" />
          </a>
        </Text>
      }
      filters={filters}
      products={
        <ProductsTable
          items={items}
          itemsLoaded={itemsLoaded}
          productCats={productCats}
          emptyFilterCriteria={!filterApplied}
        />
      }
    />
  );
};

export default PageFiltersDropdowns;
