import { useState, useEffect } from "react";
import axios from "axios";
import useGeoLocation from "./useGeoLocation";

const useWoeid = () => {
  const [data, setData] = useState({
    woeid: "",
    city: "",
  });
  const currentLocation = useGeoLocation();
  const lat = currentLocation.coordinates.lat.toString();
  const lng = currentLocation.coordinates.lng.toString();
  const isLoaded = data && data.woeid !== "" && data.city !== "";
  // useEffect(() => {
  //   const fetchData = async () => {
  //     await fetch(
  //       `https://www.metaweather.com/api/location/search/?lattlong=${lat},${lng}/`,
  //       {
  //         crossDomain: true,
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) =>
  //         setData({
  //           data: { woeid: data[0].woeid, city: data[0].title },
  //         })
  //       );
  //     console.log(data);
  //   };
  //   if (lat && lng) {
  //     fetchData();
  //   } else {
  //     console.log("error");
  //   }
  // });

  useEffect(() => {
    axios.get(`/api/location/search/?lattlong=${lat},${lng}`).then((res) => {
      setData({
        woeid: res.data[0].woeid,
        city: res.data[0].title,
      });
    });
  }, [lat, lng]);
  return data;
};

export default useWoeid;
