import { useEffect, useState } from "react";

const useGetDate = () => {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const day = currentDate.getDay();
  const [theDate, setTheDate] = useState("");
  const daysOfWeek = {
    1: "Mon",
    2: "Tues",
    3: "Wed",
    4: "Thurs",
    5: "Fri",
    6: "Sat",
    7: "Sun",
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
  const fullDate = `${daysOfWeek[day]}, ${date} ${months[month]}`;
  useEffect(() => {
    setTheDate(fullDate);
  }, [fullDate]);
  return theDate;
};

export default useGetDate;
