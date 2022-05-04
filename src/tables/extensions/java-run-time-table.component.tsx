import React from "react";
import useSWR from "swr";
import { pick } from "lodash";
import { openmrsFetch } from "@openmrs/esm-framework";

import { InfoDataTable } from "./data-table.component";
import { formatTableData } from "../utils";
import styles from "../slot/tables.scss";

const JavaruntimeTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<{ data: { systemInfo } }, Error>(
    url,
    openmrsFetch
  );

  const rowData = formatTableData(
    data?.data.systemInfo["SystemInfo.title.javaRuntimeEnvironmentInformation"]
  );
  const isLoading = !data && !error;

  return (
    <div className={styles.table}>
      <InfoDataTable
        rowData={rowData}
        headerData={[]}
        isLoading={isLoading}
        tableTitle="Java RunTime Information"
      />
    </div>
  );
};

export default JavaruntimeTable;
