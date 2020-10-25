import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useStateValue } from "../../context/StateProvider";

const useStyles = makeStyles({
  location: {
    color: "snow",
    fontSize: "2rem",
    fontWeight: "500",
    textAlign: "center",
    textShadow: "3px 3px rgba(50, 50, 70, 0.5)",
  },
  date: {
    color: "snow",
    fontSize: "1.25rem",
    fontWeight: "300",
    fontStyle: "italic",
    textShadow: "3px 3px rgba(50, 50, 70, 0.5)",
  },
  temp: {
    position: "relative",
    display: "inline-block",
    color: "snow",
    margin: "30px auto",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: "16px",
    padding: "15px 25px",
    fontSize: "6.375rem",
    fontWeight: "900",
    textShadow: "3px 6px 6px rgba(50, 50, 70, 0.5)",
    boxShadow: "3px 6px 6px rgba(0, 0, 0, 0.2)",
  },
  weather: {
    color: "snow",
    fontSize: "3rem",
    fontWeight: "700",
    textShadow: "3px 3px 3px rgba(50, 50, 70, 0.5)",
  },
  weatherImg: {
    marginLeft: '20px',
  }
});

// new Date().toDateString()

const date = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  let date = d.getDate();

  return `${day} ${date} ${month} ${year}`;
};

const InfoBox = ({ weather }) => {
  const classes = useStyles();
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  return typeof weather.data !== "undefined" ? (
    <>
      <div className={classes.locationBox}>
        <div className={classes.location}>
          {weather?.data.name}, {weather?.data.sys.country}
        </div>
        <div className={classes.date}>{date(new Date())}</div>
      </div>
      <div className={classes.weatherBox}>
        <div className={classes.temp}>
          {Math.round(weather?.data.main.temp)}&#176;C
        </div>
        <div className={classes.weather}>
          {weather?.data.weather[0].main}
          {weather?.data.weather[0].icon ? (
            <img
              className={classes.weatherImg}
              src={`http://openweathermap.org/img/w/${weather?.data.weather[0].icon}.png`}
              alt="weather condition"
            />
          ) : null}
        </div>
      </div>
    </>
  ) : null;
};

export default InfoBox;
