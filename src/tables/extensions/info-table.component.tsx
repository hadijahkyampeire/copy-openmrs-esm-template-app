import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";

import { InfoDataTable } from "./data-table.component";
import { formatTableData } from "../utils";
import styles from "../slot/tables.scss";

const InfoTables: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<{ data: { systemInfo } }, Error>(
    url,
    openmrsFetch
  );

  const allTableData = data?.data && Object.entries(data?.data.systemInfo);
  const useTitle = {
    "SystemInfo.title.openmrsInformation": "OpenMRS Information",
    "SystemInfo.title.javaRuntimeEnvironmentInformation":
      "Java RunTime Information",
    "SystemInfo.title.memoryInformation": "Memory Information",
    "SystemInfo.title.moduleInformation": "Module Information",
    "SystemInfo.title.dataBaseInformation": "DataBase Information",
  };

  const isLoading = !data && !error;

  return (
    <div className={styles.systemInfoTables}>
      {allTableData?.map(([key, value]) => (
        <div className={styles.systemInfoTable} key={key}>
          <InfoDataTable
            rowData={formatTableData(value)}
            headerData={[]}
            isLoading={isLoading}
            tableTitle={useTitle[key]}
            isValidating={isValidating}
          />
        </div>
      ))}
    </div>
  );
};

export default InfoTables;
