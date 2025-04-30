import React, { ReactNode, memo, ComponentPropsWithoutRef } from "react";

import { StyledTable, StyledTableBody, StyledTh, StyledTd, StyledTr, StyledThead } from "./StatelessTable.styled";

export interface StatelessTable {
  children?: ReactNode;
}

export interface BodyProps extends ComponentPropsWithoutRef<'tbody'> {
  withFirstRowBorder?: boolean;
}

export const StatelessTable = StyledTable;
StatelessTable.displayName = "StatelessTable";

export const Tbody = StyledTableBody;
Tbody.displayName = "Tbody";

export const Thead = StyledThead;
Thead.displayName = "Thead";

export const Th = StyledTh;
Th.displayName = "Th";

export const Td = StyledTd;
Td.displayName = "Td";

export interface TrProps extends React.HTMLAttributes<HTMLTableRowElement> {
  children?: ReactNode;
}

export const Tr: React.FC<TrProps> = memo(({ onClick, children, ...props }) => {
  return onClick ? (
    <StyledTr onClick={onClick} {...props}>
      {children}
    </StyledTr>
  ) : (
    <StyledTr {...props}>{children}</StyledTr>
  );
});
