import { last } from "lodash";

export const formatTableData = (obj = {}) =>
  Object.entries(obj).map(([name, value], i) => ({
    id: i,
    name: last(name.split(".")),
    value,
  }));
