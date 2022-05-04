import React from "react";
import useSWR from "swr";
import { pick } from "lodash";
import { openmrsFetch } from "@openmrs/esm-framework";
import styles from "../slot/tables.scss";

import { InfoDataTable } from "./data-table.component";
import { formatTableData } from "../utils";

const ModuleTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<{ data: { systemInfo } }, Error>(
    url,
    openmrsFetch
  );

  const rowData = formatTableData(
    data?.data.systemInfo["SystemInfo.title.moduleInformation"]
  );
  const isLoading = !data && !error;

  return (
    <div className={styles.table}>
      <InfoDataTable
        rowData={rowData}
        headerData={[]}
        isLoading={isLoading}
        tableTitle="Module Information"
      />
    </div>
  );
};

export default ModuleTable;
