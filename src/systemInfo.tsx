/**
 * From here, the application is pretty typical React, but with lots of
 * support from `@openmrs/esm-framework`. Check out `Greeter` to see
 * usage of the configuration system, and check out `PatientGetter` to
 * see data fetching using the OpenMRS FHIR API.
 *
 * Check out the Config docs:
 *   https://openmrs.github.io/openmrs-esm-core/#/main/config
 */

import React from "react";
import styles from "./systemInfo.css";
import { Tables } from "./tables/slot/tables";

const SystemInformation: React.FC = () => {
  return (
    <div className={`omrs-main-content ${styles.container}`}>
      <Tables />
    </div>
  );
};

export default SystemInformation;
