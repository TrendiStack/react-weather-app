import React from "react";

import styles from "./WeatherHighlights.module.css";

const WeatherHighlights = (props) => {
  const { stats } = props;
  return (
    <>
      <div className={styles.todaysHighlights}>
        <p className={styles.status}>Wind status</p>
        <p className={styles.windSpeed}>
          {Math.round(stats.wind_speed * 3.6)}
          <span>mph</span>
        </p>
        <p className={styles.compass}>
          <i
            className={`fa-solid fa-location-arrow fa-sm ${styles.planeIcon}`}
          />{" "}
          WSW
        </p>
      </div>
      <div className={styles.todaysHighlights}>
        <p className={styles.status}>Humidity</p>
        <p className={styles.speed}>{`${stats.humidity}%`}</p>
        <div className={styles.progressBar}>
          <p className={styles.barText1}>0</p>
          <p className={styles.barText2}>50</p>
          <p className={styles.barText3}> 100</p>
          <p className={styles.barText4}>%</p>
          <div
            className={styles.bar}
            style={{
              width: `${stats.humidity}%`,
            }}
          ></div>
        </div>
      </div>
      <div className={styles.todaysHighlights}>
        <p className={styles.status}>Visibility</p>
        <p className={styles.speed}>
          {`${Math.floor(stats.visibility / 1000)}`}
          <span>Km</span>
        </p>
      </div>
      <div className={styles.todaysHighlights}>
        <p className={styles.status}>Air Pressure</p>
        <p className={styles.speed}>
          {stats.pressure}
          <span>hPa</span>
        </p>
      </div>
    </>
  );
};

export default WeatherHighlights;
