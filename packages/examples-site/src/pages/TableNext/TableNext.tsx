import React, { FunctionComponent, useState } from "react";
import { Flex, Panel, Box } from "@bigcommerce/big-design";
import { Page } from "bigcommerce-design-patterns";
import { theme } from "@bigcommerce/big-design-theme";
import { TableNext } from "@bigcommerce/big-design/dist/es/components/TableNext";

import { StyledPanelContents } from "./styled";

const PageTableNext: FunctionComponent = () => {
  const [expandedRows, onExpandedChange] = useState<Record<string, true>>({});

  const items = [
    { sku: "SM13", name: "[Sample] Smith Journal 13", stock: 25 },
    {
      sku: "DPB",
      name: "[Sample] Dustpan & Brush",
      stock: 34,
      variants: [
        { sku: "DPB-RED", name: "[Sample] Dustpan & Brush - Red", stock: 34 },
        { sku: "DPB-BLU", name: "[Sample] Dustpan & Brush - Blue", stock: 34 },
      ],
    },
    { sku: "OFSUC", name: "[Sample] Utility Caddy", stock: 45 },
    {
      sku: "CLC",
      name: "[Sample] Canvas Laundry Cart",
      stock: 2,
      variants: [
        {
          sku: "CLC-RED",
          name: "[Sample] Canvas Laundry Cart - Red",
          stock: 2,
        },
        {
          sku: "CLC-GRE",
          name: "[Sample] Canvas Laundry Cart - Green",
          stock: 2,
        },
      ],
    },
    { sku: "CGLD", name: "[Sample] Laundry Detergent", stock: 29 },
  ];

  return (
    <Page
      headerTitle="Table Next Sample"
      pageDescription={<>Table next allows you to do more.</>}
    >
      <Flex flexDirection="column" flexGap={theme.spacing.xLarge}>
        <Panel
          description="Fun with hidden table components."
          header="Table next example"
        >
          <StyledPanelContents>
            <TableNext
              columns={[
                {
                  header: "Sku",
                  hash: "sku",
                  render: ({ sku, isChild }) => {
                    return (
                      <Box paddingLeft={isChild ? "medium" : "none"}>{sku}</Box>
                    );
                  },
                },
                {
                  header: "Name",
                  hash: "name",
                  render: ({ name }) => name,
                },
                {
                  header: "Stock",
                  hash: "stock",
                  render: ({ stock }) => stock,
                },
              ]}
              expandable={{
                expandedRows,
                expandedRowSelector: ({ children }: any) =>
                  children || undefined,
                onExpandedChange,
                getChildren: ({ variants }: any) => {
                  const newVariants = variants?.map((variant: any) => ({
                    ...variant,
                    isChild: true,
                  }));
                  return newVariants || [];
                },
              }}
              items={items}
              keyField="sku"
            />
          </StyledPanelContents>
        </Panel>
      </Flex>
    </Page>
  );
};

export default PageTableNext;
