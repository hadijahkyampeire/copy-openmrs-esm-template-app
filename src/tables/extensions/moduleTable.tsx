import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";
import styles from "../slot/tables.scss";

import { InfoDataTable } from "./dataTable";

const ModuleTable: React.FC = () => {
  const url = `/ws/rest/v1/systeminformation`;
  const { data, error, isValidating } = useSWR<
    { data: { systemInformation } },
    Error
  >(url, openmrsFetch);

  const isLoading = !data && !error;

  const headerData = [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Protocol",
      key: "protocol",
    },
    {
      header: "Port",
      key: "port",
    },
    {
      header: "Rule",
      key: "rule",
    },
    {
      header: "Attached Groups",
      key: "attached_groups",
    },
    {
      header: "Status",
      key: "status",
    },
  ];

  const rowData = [
    {
      attached_groups: "Kevins VM Groups",
      id: "a",
      name: "Load Balancer 3",
      port: 3000,
      protocol: "HTTP",
      rule: "Round robin",
      status: "Disabled",
    },
  ];
  return (
    <div className={styles.table}>
      <div className="title">Module Information</div>
      <InfoDataTable
        rowData={rowData}
        headerData={headerData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default ModuleTable;
