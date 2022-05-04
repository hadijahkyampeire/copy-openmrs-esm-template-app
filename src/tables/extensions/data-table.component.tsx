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

// import styles from "../slot/tables.scss";

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
  if (isLoading) {
    return <DataTableSkeleton role="progressbar" />;
  }
  if (rowData.length) {
    return (
      <div className="table">
        <DataTable rows={rowData} headers={commonHeaderData} useZebraStyles>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer
              title={tableTitle}
              // className={styles.tableContainer} // not working yet
            >
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
