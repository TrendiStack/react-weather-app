import React from "react";

import styles from "./WeatherHighlights.module.css";

const WeatherHighlights = () => {
  return (
    <div className={styles.todaysHighlights}>
      <p className={styles.status}>Wind status</p>
      <p className={styles.speed}>
        7 <span>mph</span>
      </p>
      <p className={styles.compass}>WSW</p>
    </div>
  );
};

export default WeatherHighlights;
