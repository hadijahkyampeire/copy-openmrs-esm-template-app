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

interface InfoDataTable {
  headerData: [];
  rowData: [];
  isLoading: boolean;
}

const InfoDataTable = ({ headerData, rowData, isLoading }) => {
  if (isLoading) {
    return <DataTableSkeleton role="progressbar" />;
  }
  if (rowData.length) {
    return (
      <div className="table">
        <DataTable rows={rowData} headers={headerData} useZebraStyles>
          {({ rows, headers, getHeaderProps, getTableProps }) => (
            <TableContainer title="DataTable">
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
                  {rows.map((row) => (
                    <TableRow key={row.id}>
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
