import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";

import { InfoDataTable } from "./data-table.component";
import styles from "../slot/tables.scss";

const rowData = [
  {
    name: "DataBase Schema Name",
    value: "openmrs-db",
  },
];

const DatabaseTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<
    { data: { systemInformation } },
    Error
  >(url, openmrsFetch);

  const isLoading = !data && !error;

  return (
    <div className={styles.table}>
      <div className={styles.title}>DataBase Information</div>
      <InfoDataTable rowData={rowData} headerData={[]} isLoading={isLoading} />
    </div>
  );
};

export default DatabaseTable;
