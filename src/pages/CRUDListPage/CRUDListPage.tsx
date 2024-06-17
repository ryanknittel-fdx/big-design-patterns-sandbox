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
} from "@bigcommerce/big-design";
import Page from "../../components/page/Page";
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
import InfoIllustration from "../../components/InfoIllustration/InfoIllustration";

import { DummyItem, dummyProducts as data } from "../../data/dummyProducts";

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

  // DATA INSTANTIATION
  const [items, setItems] = useState(data);

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
      render: ({ categories }: { categories: string }) => categories,
      isSortable: true,
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
      render: ({ price }: { price: string }) => price,
      isSortable: true,
    },
    {
      header: null,
      hash: "actions",
      render: ({ sku }: { sku: string }) => {
        return (
          <Dropdown
            items={[
              {
                content: "Edit",
                onItemClick: (item) => item,
                hash: "edit",
              },
              {
                content: "Delete",
                onItemClick: () => deleteItems([sku]),
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
  const [currentItems, setCurrentItems] = useState<Item[]>(items);

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
      setTableItems(data);
    }
  };
  // search submission handler
  const onSearchSubmit = () => {
    setCurrentItems(() => {
      if (searchValue) {
        // let's do lowercase search
        return items.filter((item) =>
          item.name.toLowerCase().includes(searchValue.toLowerCase())
        );
      }
      return data;
    });
  };

  // TABLE ACTIONS (DELETE ITEM)
  const deleteItems = (skus: string[]) => {
    // lets fire up an alert to confirm the destructive action
    setItemsToDelete(skus);
    setModalOpen(true);
  };
  // delete cofirmation modal
  const [modalOpen, setModalOpen] = useState(false);
  // let's set the item to delete in a state variable
  const emptySkus: string[] = [];
  const [itemsToDelete, setItemsToDelete] = useState(emptySkus);

  const deleteConfimatonHandler = () => {
    // let's delete the item
    setTableItems(items.filter((item) => !itemsToDelete.includes(item.sku)));
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
              ? `Items with SKUs ${itemsToDelete.join(
                  ", "
                )} deleted successfully`
              : `Item with SKU ${itemsToDelete} deleted successfully`,
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

  //HEADER CTAs
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

  // EMPTY STATE
  const EmptyState = (
    <Flex
      justifyContent="center"
      paddingVertical="xxxLarge"
      marginBottom="xxxLarge"
    >
      <InfoIllustration
        icon="empty"
        actionSecondary={{
          text: "Add item",
          onClick: addProductHandler,
        }}
      >
        <Text color="secondary60">
          No products were found for query “{searchValue}”
        </Text>
      </InfoIllustration>
    </Flex>
  );

  //BULK ACTIONS
  const BulkActionButtons = (
    <StyledBulkActions>
      {selectedItems.length > 0 ? (
        <ButtonGroup
          actions={[
            {
              text: "Delete",
              onClick: () => {
                return deleteItems(selectedItems.map((item) => item.sku));
              },
            },
            { text: "Action 2" },
            { text: "Action 3" },
          ]}
        />
      ) : null}
    </StyledBulkActions>
  );

  // EFFECTS

  useEffect(() => {
    // pagination
    setTableItems(data);
    console.log("pagination effect");
  }, [currentPage, itemsPerPage]);
  useEffect(() => {
    // alerts
    console.log("alerts effect");
    const alert = location.state?.alert;
    alert && alertsManager.add(alert);
  }, [location]);

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
                  columns={columns}
                  itemName="Products"
                  items={currentItems}
                  keyField="sku"
                  pagination={{
                    currentPage,
                    totalItems: data.length,
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
            ? ` items with SKUs ${itemsToDelete.join(", ")}. `
            : ` the item with SKU ${itemsToDelete}. `}
          This action can't be undone
        </Text>
      </Modal>
    </>
  );
};

export default PageCRUDList;
