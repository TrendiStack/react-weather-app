import React from "react";

import styles from "./WeatherCard.module.css";

const WeatherCard = (props) => {
  const { day } = props;
  const dateObj = new Date(day.dt * 1000);
  const humanFormattedDate = dateObj.toLocaleString();
  const date = new Date(humanFormattedDate);
  const today = new Date();
  let formattedDate = "";
  const daysOfWeek = {
    1: "Mon",
    2: "Tues",
    3: "Wed",
    4: "Thurs",
    5: "Fri",
    6: "Sat",
    0: "Sun",
  };

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const msBetweenDates = Math.abs(date.getTime() - today.getTime());
  const hoursBetweenDates = msBetweenDates / (60 * 60 * 1000);
  if (hoursBetweenDates < 0) {
    formattedDate = "Tomorrow";
  } else {
    formattedDate = `${daysOfWeek[date.getDay()]}, ${date.getDate()} ${
      months[date.getMonth()]
    }`;
  }

  return (
    <div className={styles.cardContainer}>
      <p className={styles.dayText}>{formattedDate}</p>
      <img
        className={styles.image}
        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt=""
      />
      <div className={styles.temperature}>
        <p>{Math.round(day.temp.max)} C</p>
        <p>{Math.round(day.temp.min)} C</p>
      </div>
    </div>
  );
};

export default WeatherCard;
