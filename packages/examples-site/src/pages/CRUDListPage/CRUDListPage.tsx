import React, { FunctionComponent, useState, useEffect } from "react";
import {
  Flex,
  FlexItem,
  Box,
  Button,
  ButtonGroup,
  Panel,
  Search,
  Table,
  TableItem,
  Text,
  Dropdown,
  Modal,
  AlertProps,
  ProgressCircle,
} from "@bigcommerce/big-design";
import { InfoIllustration, Page } from "@bigcommerce-labs/patterns-sandbox";
import { AddIcon, MoreHorizIcon } from "@bigcommerce/big-design-icons";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { theme } from "@bigcommerce/big-design-theme";
import { alertsManager } from "../../App";
import {
  StyledPanelContents,
  StyledProductImage,
  StyledBulkActions,
} from "./CRUDListPage.styled";

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
const PageCRUDList: FunctionComponent = () => {
  // NAVIGATION
  const location = useLocation();

  const navigate = useNavigate();
  const backButtonClickHandler = () => {
    navigate("/");
  };

  // BULK ACTIONS
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

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
      render: ({ id, url }: { id: number; url: string }) => {
        return (
          <Dropdown
            items={[
              {
                content: "Edit",
                onItemClick: (item) => {
                  navigate(`/page-crud-edit/${url}`);
                },
                hash: "edit",
              },
              {
                content: "Delete",
                onItemClick: () => deleteItems([id]),
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
      isSortable: true,
    },
  ];

  // DATA HANDLING
  const [currentItems, setCurrentItems] = useState<Item[]>([]);

  const setTableItems = (themItems: any) => {
    const maxItems = currentPage * itemsPerPage;
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
      setTableItems(items);
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
      setCurrentItems(foundItems);
    }
  };

  // TABLE ACTIONS (DELETE ITEM)
  const deleteItems = (ids: number[]) => {
    // lets fire up an alert to confirm the destructive action
    setItemsToDelete(ids);
    setModalOpen(true);
  };
  // delete cofirmation modal
  const [modalOpen, setModalOpen] = useState(false);
  // let's set the item to delete in a state variable
  const emptyIds: number[] = [];
  const [itemsToDelete, setItemsToDelete] = useState(emptyIds);

  const deleteConfimatonHandler = () => {
    // let's delete the item
    setTableItems(
      items.filter((item) => !itemsToDelete.includes(item.productId))
    );
    // empty selected items
    setSelectedItems([]);
    // close the modal
    setModalOpen(false);

    // let's fire up an alert of successful deletion
    const successAlert: AlertProps = {
      messages: [
        {
          text:
            itemsToDelete.length > 1
              ? `Items ${itemsToDelete
                  .map(
                    (id) =>
                      items.filter((item) => item.productId === id)[0].name
                  )
                  .join(", ")} deleted successfully`
              : `Item ${itemsToDelete
                  .map(
                    (id) =>
                      items.filter((item) => item.productId === id)[0].name
                  )
                  .join(", ")} deleted successfully`,
        },
      ],
      type: "success",
      onClose: () => null,
    };

    alertsManager.add(successAlert);
  };

  // ADD PRODUCT
  const addProductHandler = () => {
    navigate("/page-crud-add");
  };

  // EFFECTS

  // fetch categories and product all at once

  const [productCats, setProductCats] = useState<Category[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    Promise.all([getCategories(), getProducts()]).then(
      ([categories, products]) => {
        setProductCats(categories as Category[]);
        setItems(products as Item[]);
        setTableItems(products as Item[]);
      }
    );
  }, []);

  // alerts
  useEffect(() => {
    const alert = location.state?.alert;
    alert && alertsManager.add(alert);
  }, [location]);

  // PAGE ELEMENTS

  // Empty state
  const EmptyState = (
    <Flex
      justifyContent="center"
      paddingVertical="xxxLarge"
      marginBottom="xxxLarge"
    >
      {
        items.length < 1 ? (
          // if products havent been loaded, let's show a loader
          <ProgressCircle size="large" />
        ) : (
          // if products have been loaded, let's show the empty
          <InfoIllustration
            icon="empty"
            actionSecondary={{
              text: "Add item",
              onClick: addProductHandler,
            }}
          >
            <Text color="secondary60">
              {
                // differentiate from empty search or empty products and show a loader element if the data is being fetched
                searchValue
                  ? `No products were found for query “${searchValue}”`
                  : "You have no products yet."
              }
            </Text>
          </InfoIllustration>
        )
      }
    </Flex>
  );

  // Bulk actions
  const BulkActionButtons = (
    <StyledBulkActions>
      {selectedItems.length > 0 ? (
        <ButtonGroup
          actions={[
            {
              text: "Delete",
              onClick: () => {
                return deleteItems(selectedItems.map((item) => item.productId));
              },
            },
            { text: "Action 2" },
            { text: "Action 3" },
          ]}
        />
      ) : null}
    </StyledBulkActions>
  );

  //header CTAs
  const PageHeaderCTAs = (
    <>
      <Button
        iconLeft={<AddIcon />}
        variant="primary"
        mobileWidth="100%"
        onClick={addProductHandler}
      >
        Add Item
      </Button>
    </>
  );

  return (
    <>
      <Page
        headerCTAs={PageHeaderCTAs}
        headerTitle="List Page"
        headerBackButtonLabel="Back to patterns"
        onHeaderBackButtonClick={backButtonClickHandler}
        pageDescription={
          <>
            List pages are the bread and butter of an application, where you
            present a number of items to act upon
          </>
        }
      >
        <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
          <FlexItem>
            {
              //The most common way of organizing information within the BigDesign patterns is with the use of panels.
              //In this case we only have one panel, but you can have multiple panels within a page.
            }
            <Panel
              header="Items list"
              description="Common actions you'll create within a page"
            >
              {
                //search
              }
              <Box marginBottom="medium">
                <Search
                  onChange={onSearchChange}
                  onSubmit={onSearchSubmit}
                  value={searchValue}
                />
              </Box>
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
                    onPageChange: setCurrentPage,
                    itemsPerPageOptions,
                    onItemsPerPageChange,
                    itemsPerPage,
                  }}
                  selectable={{
                    selectedItems,
                    onSelectionChange: setSelectedItems,
                  }}
                  sortable={{
                    columnHash,
                    direction,
                    onSort,
                  }}
                  emptyComponent={EmptyState}
                  actions={BulkActionButtons}
                />
              </StyledPanelContents>
            </Panel>
          </FlexItem>
        </Flex>
      </Page>
      <Modal
        actions={[
          {
            text: "Cancel",
            variant: "subtle",
            onClick: () => setModalOpen(false),
          },
          {
            text: "Delete",
            onClick: deleteConfimatonHandler,
            actionType: "destructive",
          },
        ]}
        closeOnClickOutside={false}
        closeOnEscKey={true}
        header="Delete item"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        variant="dialog"
      >
        <Text>
          You are about to delete
          {itemsToDelete.length > 1
            ? ` items ${itemsToDelete
                .map(
                  (id) => items.filter((item) => item.productId === id)[0].name
                )
                .join(", ")}. `
            : ` item ${itemsToDelete
                .map(
                  (id) => items.filter((item) => item.productId === id)[0].name
                )
                .join(", ")}. `}
          This action can't be undone
        </Text>
      </Modal>
    </>
  );
};

export default PageCRUDList;
