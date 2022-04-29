import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";

import { InfoDataTable } from "./data-table.component";
import styles from "../slot/tables.scss";

const rowData = [
  {
    name: "System Date",
    value: "2022-04-29",
  },
];

const OpenMrsInfoTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<
    { data: { systemInformation } },
    Error
  >(url, openmrsFetch);

  const isLoading = !data && !error;

  return (
    <div className={styles.table}>
      <div className={styles.title}>OpenMRS Information</div>
      <InfoDataTable rowData={rowData} headerData={[]} isLoading={isLoading} />
    </div>
  );
};

export default OpenMrsInfoTable;
