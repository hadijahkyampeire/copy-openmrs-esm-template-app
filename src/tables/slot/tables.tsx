import React from "react";
import styles from "./tables.scss";
import { Extension, ExtensionSlot } from "@openmrs/esm-framework";
import OpenMrsInfoTable from "../extensions/info-table.component";

export const Tables: React.FC = () => {
  return (
    <div className={styles.container}>
      <ExtensionSlot extensionSlotName="Tables" className={styles.tables}>
        <div className={styles.table}>
          <Extension />
        </div>
      </ExtensionSlot>
    </div>
  );
};
