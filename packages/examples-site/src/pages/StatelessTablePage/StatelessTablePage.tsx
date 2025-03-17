import React, { FunctionComponent } from "react";
import { Flex, FlexItem, Panel, Button } from "@bigcommerce/big-design";
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

const PageStatelessTable: FunctionComponent = () => {
  const navigate = useNavigate();
  const [rows, setRows] = React.useState(10);
  const [cells, setCells] = React.useState(7);

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
            <Panel header="A simple table with columns and rows" marginBottom={'xxLarge'}>
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
                      Array.from({ length: rows }).map((_, rowIndex) => (
                        <Tr key={rowIndex}>
                          {Array.from({ length: cells }).map((_, cellIndex) => (
                            <Td key={cellIndex} data-label={`Column ${cellIndex + 1}`}>
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
            <Panel header="A table with headers in both columns and rows" marginBottom={'xxLarge'}>
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
                      Array.from({ length: rows }).map((_, rowIndex) => (
                        <Tr key={rowIndex} tabIndex={0}>
                          <Th scope="row">Row {rowIndex + 1}</Th>
                          {Array.from({ length: cells }).map((_, cellIndex) => (
                            <Td key={cellIndex} data-label={`Column ${cellIndex + 1}`}>
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
            <Panel header="A table with clickable rows" marginBottom={'xxLarge'}>
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
                      Array.from({ length: rows }).map((_, rowIndex) => (
                        <Tr
                          key={rowIndex}
                          onClick={() =>
                            alert(`Clicked on row ${rowIndex + 1}`)
                          }
                        >
                          {Array.from({ length: cells }).map((_, cellIndex) => (
                            <Td key={cellIndex} data-label={`Column ${cellIndex + 1}`}>
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
            <Panel header="a table with clickable rows and extra CTAs" marginBottom={'xxLarge'}>
              <PanelContents padded={false}>
                <StatelessTable>
                  <Thead>
                    <Tr>
                      {Array.from({ length: (cells-1) }).map((_, index) => (
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
                      Array.from({ length: rows }).map((_, rowIndex) => (
                        <Tr
                          key={rowIndex}
                          onClick={() =>
                            alert(`Clicked on row ${rowIndex + 1}`)
                          }
                        >
                          {Array.from({ length: (cells-1) }).map((_, cellIndex) => (
                            <Td key={cellIndex} data-label={`Column ${cellIndex + 1}`}>
                              Row {rowIndex + 1} Cell {cellIndex + 1}
                            </Td>
                          ))}
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
