import { useState, useEffect } from "react";
import useWoeid from "./useWoeid";
import axios from "axios";
import useGeoLocation from "./useGeoLocation";

const useBlahh = () => {
  const woeid = useWoeid();
  const [weather, setWeather] = useState({
    currentDay: null,
    weekly: null,
  });

  useEffect(() => {
    axios.get(`/api/location/${woeid.woeid}/`).then((res) => {
      const { consolidated_weather } = res.data;
      const currentDay = consolidated_weather[0];
      const weekly = consolidated_weather.filter((day, i) => i !== 0);
      setWeather({
        currentDay,
        weekly,
      });
      console.log(res.data);
    });
    console.log(woeid.city);
  }, [woeid]);

  return weather;
};

export default useBlahh;
