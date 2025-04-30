import React, { FunctionComponent, useEffect, useState } from "react";
import {
  Flex,
  FlexItem,
  Panel,
  Button,
  Checkbox,
  Text,
  OffsetPagination,
  Link,
  ButtonGroup,
} from "@bigcommerce/big-design";
import { MoreHorizIcon } from "@bigcommerce/big-design-icons";
import { Header, Page } from "@bigcommerce/big-design-patterns";
import { useNavigate } from "react-router";
import { theme } from "@bigcommerce/big-design-theme";
import { PanelContents } from "../../../../patterns/src/components/PanelContents/PanelContents";
import {
  StatelessTable,
  Tbody,
  Thead,
  Td,
  Th,
  Tr,
} from "../../../../patterns/src/components/StatelessTable/StatelessTable";

import { StyledStatelessTablePage } from "./StatelessTablePage.styled";
import { getProducts } from "../../data/services";
import { DummyItem as Item } from "../../data/dummyProducts";

const PageStatelessTable: FunctionComponent = () => {
  const navigate = useNavigate();
  const cells = 7;
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [catalogSelected, setCatalogSelected] = useState(false);

  // let's track the checkboxes state
  const [checkboxes, setCheckboxes] = React.useState(
    Array.from({ length: rowsPerPage }).map(() => false)
  );
  const handleCheckboxChange = (index: number) => {
    setCatalogSelected(false);
    setCheckboxes((prev) => {
      const newCheckboxes = [...prev];
      newCheckboxes[index] = !newCheckboxes[index];
      return newCheckboxes;
    });
  };
  const handleSelectAll = () => {
    // let's handle select and deselect all
    setCatalogSelected(false);
    setCheckboxes((prev) => {
      const newCheckboxes = [...prev];
      const allSelected = newCheckboxes.every((c) => c);
      return newCheckboxes.map(() => !allSelected);
    });
    const allSelected = checkboxes.every((c) => c);
    return checkboxes.map(() => !allSelected);
  };

  const selectAllCatalog = () => {
    setCatalogSelected(true);
  };
  const clearAllCatalog = () => {
    setCheckboxes(Array.from({ length: rowsPerPage }).map(() => false));
    setCatalogSelected(false);
  };

  // EFFECTS

  // fetch categories and product all at once

  useEffect(() => {
    Promise.all([getProducts()]).then(([products]) => {
      setItems(products as Item[]);
    });
  }, []);

  const selectedItems = catalogSelected
    ? items.length
    : checkboxes.filter((c) => c).length;

  console.log("checkboxes", checkboxes);
  console.log("selectedItems", selectedItems);

  return (
    <StyledStatelessTablePage>
      <Page
        header={
          <Header
            title="Statless Table"
            description="A component that renders a table without any state management."
            backLink={{
              text: "Back to patterns",
              onClick: () => navigate("/"),
              href: "#",
            }}
          ></Header>
        }
      >
        <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
          <FlexItem>
            <Panel
              header="A table with checkboxes and extra CTAs"
              marginBottom={"xxLarge"}
            >
              <PanelContents padded={false}>
                <Flex
                  className="table-toolbar"
                  flexDirection="row"
                  flexGap={theme.spacing.xSmall}
                  paddingHorizontal={{ mobile: "small", tablet: "xLarge" }}
                  borderBottom="box"
                  paddingVertical="xSmall"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FlexItem flexGrow={0} flexShrink={0}>
                    <Flex flexDirection="row" flexGap={theme.spacing.xxSmall}>
                      <Checkbox
                        label=""
                        checked={checkboxes.every((c) => c)}
                        onChange={handleSelectAll}
                        isIndeterminate={
                          checkboxes.some((c) => c) &&
                          !checkboxes.every((c) => c)
                        }
                      ></Checkbox>
                      <Text>
                        {selectedItems ? selectedItems + " / " : null}
                        {items.length} items
                      </Text>
                    </Flex>
                  </FlexItem>
                  {selectedItems ? (
                    <FlexItem flexGrow={1} flexShrink={1}>
                      <ButtonGroup
                        actions={[
                          { text: "Bulk action 1" },
                          { text: "Bulk action 2" },
                        ]}
                      />
                    </FlexItem>
                  ) : null}
                  <FlexItem flexGrow={0} flexShrink={0} className="pagination">
                    <OffsetPagination
                      totalItems={items.length}
                      itemsPerPage={rowsPerPage}
                      currentPage={page}
                      itemsPerPageOptions={[10, 20]}
                      onPageChange={(page) => {
                        setPage(page);
                        // uncheck checkboxes
                        setCheckboxes(
                          Array.from({ length: rowsPerPage }).map(() => false)
                        );
                      }}
                      onItemsPerPageChange={(pageSize) => {
                        setRowsPerPage(pageSize);
                        setPage(1);
                      }}
                    ></OffsetPagination>
                  </FlexItem>
                </Flex>
                {selectedItems >= rowsPerPage && (
                  <Flex
                    padding="xSmall"
                    justifyContent="center"
                    alignItems="center"
                    alignContent={"center"}
                    backgroundColor="primary10"
                    borderBottom="box"
                    style={{ textAlign: "center" }}
                  >
                    {catalogSelected ? (
                      <Text>
                        All {items.length} products in catalog have been
                        selected.{" "}
                        <Link href="#" onClick={clearAllCatalog}>
                          Clear selection
                        </Link>
                      </Text>
                    ) : (
                      <Text>
                        All {rowsPerPage} products on this page have been
                        selected.{" "}
                        <Link href="#" onClick={selectAllCatalog}>
                          Select all {items.length} products in catalog
                        </Link>
                      </Text>
                    )}
                  </Flex>
                )}
                <StatelessTable>
                  <Thead>
                    <Tr>
                      <Th className="checkbox"></Th>
                      <Th scope="col">Image</Th>
                      <Th scope="col">Name</Th>
                      <Th scope="col">Price</Th>
                      <Th scope="col">SKU</Th>
                      <Th scope="col">Stock</Th>
                      <Th scope="col" className="actions">
                        <span className="sr-only">Actions</span>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {items
                      .slice((page - 1) * rowsPerPage, page * rowsPerPage)
                      .map((item, rowIndex) => (
                        <Tr key={rowIndex}>
                          <Td className="checkbox">
                            <Checkbox
                              value={item.sku}
                              label=""
                              checked={checkboxes[rowIndex]}
                              onChange={() => handleCheckboxChange(rowIndex)}
                            ></Checkbox>
                          </Td>
                          <Td data-label="Image">
                            <img
                              src={`./assets/images/product-images/${item.image}`}
                              width="52"
                              height="52"
                            />
                          </Td>
                          <Td data-label="Name">{item.name}</Td>
                          <Td data-label="Price">$ {item.price}</Td>
                          <Td data-label="SKU">{item.sku}</Td>
                          <Td data-label="Stock">{item.stock}</Td>
                          <Td className="actions">
                            <Button
                              variant="utility"
                              iconOnly={<MoreHorizIcon />}
                              mobileWidth="auto"
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(
                                  `Clicked on action for row ${rowIndex + 1}`
                                );
                              }}
                            />
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </StatelessTable>
              </PanelContents>
            </Panel>
            <Panel
              header="A table with headers in both columns and rows"
              marginBottom={"xxLarge"}
            >
              <PanelContents padded={false}>
                <StatelessTable>
                  <Thead>
                    <Tr>
                      <Th></Th>
                      {Array.from({ length: cells }).map((_, index) => (
                        <Th scope="col" key={index}>
                          Column {index + 1}
                        </Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      // let's create the cells with the contents enumerating "Row X Cell Y"
                      Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
                        <Tr key={rowIndex} tabIndex={0}>
                          <Th scope="row">Row {rowIndex + 1}</Th>
                          {Array.from({ length: cells }).map((_, cellIndex) => (
                            <Td
                              key={cellIndex}
                              data-label={`Column ${cellIndex + 1}`}
                            >
                              Row {rowIndex + 1} Cell {cellIndex + 1}
                            </Td>
                          ))}
                        </Tr>
                      ))
                    }
                  </Tbody>
                </StatelessTable>
              </PanelContents>
            </Panel>
            <Panel
              header="A table with clickable rows"
              marginBottom={"xxLarge"}
            >
              <PanelContents padded={false}>
                <StatelessTable>
                  <Thead>
                    <Tr>
                      {Array.from({ length: cells }).map((_, index) => (
                        <Th scope="col" key={index}>
                          Column {index + 1}
                        </Th>
                      ))}
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      // let's create the cells with the contents enumerating "Row X Cell Y"
                      Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
                        <Tr
                          key={rowIndex}
                          onClick={() =>
                            alert(`Clicked on row ${rowIndex + 1}`)
                          }
                        >
                          {Array.from({ length: cells }).map((_, cellIndex) => (
                            <Td
                              key={cellIndex}
                              data-label={`Column ${cellIndex + 1}`}
                            >
                              Row {rowIndex + 1} Cell {cellIndex + 1}
                            </Td>
                          ))}
                        </Tr>
                      ))
                    }
                  </Tbody>
                </StatelessTable>
              </PanelContents>
            </Panel>
            <Panel
              header="a table with clickable rows and extra CTAs"
              marginBottom={"xxLarge"}
            >
              <PanelContents padded={false}>
                <StatelessTable>
                  <Thead>
                    <Tr>
                      {Array.from({ length: cells - 1 }).map((_, index) => (
                        <Th scope="col" key={index}>
                          Column {index + 1}
                        </Th>
                      ))}
                      <Th scope="col" className="actions">
                        <span className="sr-only">Actions</span>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      // let's create the cells with the contents enumerating "Row X Cell Y"
                      Array.from({ length: rowsPerPage }).map((_, rowIndex) => (
                        <Tr
                          key={rowIndex}
                          onClick={() =>
                            alert(`Clicked on row ${rowIndex + 1}`)
                          }
                        >
                          {Array.from({ length: cells - 1 }).map(
                            (_, cellIndex) => (
                              <Td
                                key={cellIndex}
                                data-label={`Column ${cellIndex + 1}`}
                              >
                                Row {rowIndex + 1} Cell {cellIndex + 1}
                              </Td>
                            )
                          )}
                          <Td className="actions">
                            <Button
                              variant="utility"
                              iconOnly={<MoreHorizIcon />}
                              mobileWidth="auto"
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(
                                  `Clicked on action for row ${rowIndex + 1}`
                                );
                              }}
                            />
                          </Td>
                        </Tr>
                      ))
                    }
                  </Tbody>
                </StatelessTable>
              </PanelContents>
            </Panel>
          </FlexItem>
        </Flex>
      </Page>
    </StyledStatelessTablePage>
  );
};

export default PageStatelessTable;
