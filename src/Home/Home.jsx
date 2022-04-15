import React from "react";
import SearchButton from "../components/SearchButton/SearchButton";
import useGetDate from "../hooks/useGetDate";
import WeatherCard from "../components/WeatherCard/WeatherCard";

import cloudImage from "../images/cloud_white_24dp.svg";
import styles from "./Home.module.css";
import WeatherHighlights from "../components/WeatherHighlights/WeatherHighlights";
import useGetWeather from "../hooks/useGetWeather";

const Home = () => {
  const FullDate = useGetDate();
  const forecast = useGetWeather();
  const isLoaded =
    forecast && forecast.currentDay !== null && forecast.weekly !== null;

  const { currentDay, weekly } = forecast;

  return (
    <>
      {isLoaded ? (
        <div className={styles.pageContainer}>
          <SearchButton />
          <div className={styles.weatherImageContainer}>
            <img className={styles.cloudsOne} src={cloudImage} alt="" />
            <img className={styles.cloudsTwo} src={cloudImage} alt="" />
            <img className={styles.cloudsThree} src={cloudImage} alt="" />
            <img className={styles.cloudsFour} src={cloudImage} alt="" />
            <img
              className={styles.abbrImage}
              src={`https://www.metaweather.com/static/img/weather/png/${"lc"}.png`}
              alt=""
            />
          </div>
          <div className={styles.todaysWeatherContainer}>
            <h1 className={styles.weatherTemp}>{currentDay.the_temp}</h1>
            <p className={styles.weatherState}>
              {currentDay.weather_state_name}
            </p>
            <div className={styles.dateContainer}>
              <p>Today</p>
              <p>.</p>
              <p className={styles.month}>{FullDate}</p>
            </div>
            <p className={styles.locationName}>Toronto</p>
          </div>
          <div className={styles.weeklyWeatherContainer}>
            <div className={styles.weeklyWeather}>
              {weekly.map((day) => (
                <WeatherCard day={day} />
              ))}
            </div>
          </div>
          <div className={styles.hightlightContainer}>
            <div className={styles.hightlight}>
              <h1>Todays Highlights</h1>
              <WeatherHighlights />
              <WeatherHighlights />
              <WeatherHighlights />
              <WeatherHighlights />
            </div>
          </div>
          <p className={styles.creator}>Created by @UziStacks</p>
        </div>
      ) : (
        <h1>hi</h1>
      )}
    </>
  );
};

export default Home;
