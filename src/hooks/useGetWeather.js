import { useState, useEffect } from "react";

const useBlahh = () => {
  const [weather, setWeather] = useState({
    currentDay: null,
    weekly: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://www.metaweather.com/api/location/4118/`)
        .then((response) => response.json())
        .then((data) => {
          const { consolidated_weather } = data;
          const currentDay = consolidated_weather[0];
          const weekly = consolidated_weather.filter((day, i) => i !== 0);
          setWeather({
            currentDay,
            weekly,
          });
        });
    };
    fetchData();
  }, []);

  return weather;
};

export default useBlahh;
