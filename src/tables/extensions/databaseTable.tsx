import React from "react";
import useSWR from "swr";
import { openmrsFetch } from "@openmrs/esm-framework";

import { InfoDataTable } from "./dataTable";

const DatabaseTable: React.FC = () => {
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
      attached_groups: "Ronjas VM Groups",
      id: "f",
      name: "Load Balancer 5",
      port: 80,
      protocol: "HTTP",
      rule: "DNS delegation",
      status: "Active",
    },
  ];
  return (
    <div className="table">
      <div className="title">DataBase Information</div>
      <InfoDataTable
        rowData={rowData}
        headerData={headerData}
        isLoading={isLoading}
      />
    </div>
  );
};

export default DatabaseTable;
