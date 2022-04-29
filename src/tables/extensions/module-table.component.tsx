import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";
import styles from "../slot/tables.scss";

import { InfoDataTable } from "./data-table.component";

const rowData = [
  {
    name: "Atlas Module",
    value: "2.2.5",
  },
];

const ModuleTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<
    { data: { systemInformation } },
    Error
  >(url, openmrsFetch);

  const isLoading = !data && !error;

  return (
    <div className={styles.table}>
      <div className={styles.title}>Module Information</div>
      <InfoDataTable rowData={rowData} headerData={[]} isLoading={isLoading} />
    </div>
  );
};

export default ModuleTable;
