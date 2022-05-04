import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";

import { InfoDataTable } from "./data-table.component";
import { formatTableData } from "../utils";
import styles from "../slot/tables.scss";

const OpenMrsInfoTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<{ data: { systemInfo } }, Error>(
    url,
    openmrsFetch
  );

  const rowData = formatTableData(
    data?.data.systemInfo["SystemInfo.title.openmrsInformation"]
  );

  const isLoading = !data && !error;

  return (
    <div className={styles.table}>
      <InfoDataTable
        rowData={rowData}
        headerData={[]}
        isLoading={isLoading}
        tableTitle="OpenMRS Information"
      />
    </div>
  );
};

export default OpenMrsInfoTable;
