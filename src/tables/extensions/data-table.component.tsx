import React from "react";
import {
  DataTable,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHeader,
  TableHead,
  DataTableSkeleton,
} from "carbon-components-react";
import { useLayoutType } from "@openmrs/esm-framework";

interface InfoDataTable {
  headerData: [];
  rowData: [];
  isLoading: boolean;
  tableTitle?: string;
}

const commonHeaderData = [
  {
    header: "Name",
    key: "name",
    id: 0,
  },
  {
    header: "Value",
    key: "value",
    id: 1,
  },
];

const InfoDataTable = ({ rowData, isLoading, headerData, tableTitle = "" }) => {
  const layout = useLayoutType();
  const desktopView = layout === "desktop";
  if (isLoading) {
    return <DataTableSkeleton role="progressbar" />;
  }
  if (rowData.length) {
    return (
      <div className="table">
        <DataTable
          rows={rowData}
          headers={commonHeaderData}
          useZebraStyles
          size={desktopView ? "compact" : "normal"}
        >
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer title={tableTitle}>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, i) => (
                    <TableRow key={i}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>
    );
  }
};

export { InfoDataTable };
