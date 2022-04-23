import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchButton from "../components/SearchButton/SearchButton";
import WeatherCard from "../components/WeatherCard/WeatherCard";

import cloudImage from "../images/cloud_white_24dp.svg";
import styles from "./Home.module.css";
import WeatherHighlights from "../components/WeatherHighlights/WeatherHighlights";
import useGetDate from "../utils/useGetDate";

const Home = () => {
  const date = useGetDate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [location, setLocation] = useState({
    city: "",
    country: "",
  });
  const [coordinates, setCoordinates] = useState({
    longitude: "",
    latitude: "",
  });
  const { longitude, latitude } = coordinates;

  useEffect(() => {
    const apiKey = "8bd397c0608f76a2e6b4d5376a4341ad";
    const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

    const fetchData = async () => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setCoordinates({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      });
      const getWeather = async () => {
        setError(false);
        try {
          if (longitude !== "" && latitude !== "") {
            await axios
              .get(
                `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
              )
              .then((res) => {
                console.log(res.data);
                setLocation({
                  city: res.data.name,
                  country: res.data.sys.country,
                });
                if (res.data) {
                  try {
                    axios
                      .get(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${res.data.coord.lat}&lon=${res.data.coord.lon}&exclude=hourly,minutely,alerts&units=metric&appid=${apiKey}`
                      )
                      .then((res) => {
                        console.log(res.data);
                        setCurrentWeather(res.data.current);
                        setForecastWeather(res.data.daily);
                        setLoading(true);
                      });
                  } catch {
                    console.log(error);

                    setError(true);
                  }
                }
              });
          }
        } catch {
          console.log(error);

          setError(true);
        }
      };
      getWeather();
    };
    fetchData();
  }, [latitude, longitude, error]);

  return (
    <>
      {loading ? (
        <div className={styles.pageContainer}>
          <SearchButton />
          <div className={styles.weatherImageContainer}>
            <img className={styles.cloudsOne} src={cloudImage} alt="" />
            <img className={styles.cloudsTwo} src={cloudImage} alt="" />
            <img className={styles.cloudsThree} src={cloudImage} alt="" />
            <img className={styles.cloudsFour} src={cloudImage} alt="" />
            <img
              className={styles.abbrImage}
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt=""
            />
          </div>
          <div className={styles.todaysWeatherContainer}>
            <h1 className={styles.weatherTemp}>
              {Math.round(currentWeather.temp)}
              <span className={styles.celText}>°C</span>
            </h1>
            <p className={styles.weatherState}>
              {currentWeather.weather[0].main}
            </p>
            <div className={styles.dateContainer}>
              <p>Today</p>
              <p>.</p>
              <p className={styles.month}>{date}</p>
            </div>
            <p className={styles.locationName}>
              <i className={`fa-solid fa-location-dot`} />{" "}
              {`${location.city}, ${location.country}`}
            </p>
          </div>
          <div className={styles.weeklyWeatherContainer}>
            <div className={styles.weeklyWeather}>
              {forecastWeather.map((day) => (
                <WeatherCard day={day} />
              ))}
            </div>
          </div>
          <div className={styles.hightlightContainer}>
            <h1>Todays Highlights</h1>
            <div className={styles.hightlight}>
              <WeatherHighlights stats={currentWeather} />
            </div>
          </div>
          <p className={styles.creator}>Created by @UziStacks</p>
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </>
  );
};

export default Home;
