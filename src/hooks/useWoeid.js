import { useState, useEffect } from "react";
import useGeoLocation from "./useGeoLocation";

const useWoeid = () => {
  const [data, setData] = useState({
    data: { woeid: "", city: "" },
  });
  const currentLocation = useGeoLocation();
  const lat = currentLocation.coordinates.lat;
  const lng = currentLocation.coordinates.lng;
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.metaweather.com/api/location/search/?lattlong=${"43.8286557"},${"-79.5728622"}`
      )
        .then((response) => response.json())
        .then((data) =>
          setData({
            data: { woeid: data[0].woeid, city: data[0].title },
          })
        );
    };
    if (lat && lng) {
      fetchData();
    } else {
      console.log("error");
    }
  });
  return data;
};

export default useWoeid;
