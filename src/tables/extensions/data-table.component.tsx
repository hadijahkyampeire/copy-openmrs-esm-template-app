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
  InlineLoading,
} from "carbon-components-react";
import { useLayoutType } from "@openmrs/esm-framework";
import styles from "./data-table.scss";

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

const CardHeader = ({ isValidating, title, isTablet }) => {
  return (
    <div className={isTablet ? styles.tabletHeader : styles.desktopHeader}>
      <h4>{title}</h4>
      <span>{isValidating ? <InlineLoading /> : null}</span>
    </div>
  );
};

const InfoDataTable = ({
  rowData,
  isLoading,
  headerData,
  tableTitle = "",
  isValidating,
}) => {
  const layout = useLayoutType();
  const desktopView = layout === "desktop";
  const isTablet = useLayoutType() === "tablet";
  if (isLoading) {
    return <DataTableSkeleton role="progressbar" />;
  }
  if (rowData.length) {
    return (
      <div className="table">
        <CardHeader
          title={tableTitle}
          isTablet={isTablet}
          isValidating={isValidating}
        />
        <DataTable
          rows={rowData}
          headers={commonHeaderData}
          useZebraStyles
          size={desktopView ? "compact" : "normal"}
        >
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer>
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
