import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

// import { useStateValue } from "./context/StateProvider";
import globeClime from "./assets/globe.jpg";
import coldClime from "./assets/cold-clime.jpg";
import warmClime from "./assets/warm-clime.jpg";
import warmClouds from "./assets/warm-clouds.jpg";
import coldClouds from "./assets/cold-clouds.jpg";
import warmRain from "./assets/warm-rain.jpg";
import coldRain from "./assets/cold-rain.jpg";
import SearchBox from "./components/SearchBox/SearchBox";
import InfoBox from "./components/InfoBox/InfoBox";
import { useEffect } from "react";

require("dotenv").config();

const { REACT_APP_WEATHER_API_KEY } = process.env;
const ENDPOINT = "https://api.openweathermap.org/data/2.5/";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    backgroundColor: "#282c34",
    backgroundImage: `url(${globeClime})`,
    backgroundSize: "cover",
    backgroundPosition: "bottom",
    transition: ".4s ease-out",
  },
  cold: {
    backgroundImage: `url(${coldClime})`,
  },
  warm: {
    backgroundImage: `url(${warmClime})`,
  },
  coldClouds: {
    backgroundImage: `url(${coldClouds})`,
  },
  warmClouds: {
    backgroundImage: `url(${warmClouds})`,
  },
  coldRain: {
    backgroundImage: `url(${coldRain})`,
  },
  warmRain: {
    backgroundImage: `url(${warmRain})`,
  },
  main: {
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0,0, 0.75))",
    padding: "25px",
  },
});

function App() {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  // const [{ counter }] = useStateValue();
  useEffect(() => {
    const fetchData = async () => {
      const request = axios.get(
        `${ENDPOINT}weather?q=${query}&units=metric&APPID=${REACT_APP_WEATHER_API_KEY}`
      );
      const response = await request;
      setWeather(response);
      setQuery("");
    }
    setTimeout(() => {fetchData()}, 2000);
  }, [query]);

  const handleInputChange = (e) => setQuery(e.target.value);

  return (
    <div className={(typeof weather.data !== "undefined") ? 
    (
      (weather?.data.main.temp > 11 && weather?.data.weather[0].main === "Clear") ? [classes.warm, classes.root].join(' ') : 
      (weather?.data.main.temp > 11 && weather?.data.weather[0].main === "Clouds") ? [classes.warmClouds, classes.root].join(' ')  : 
      (weather?.data.main.temp > 11 && weather?.data.weather[0].main === "Rain") ? [classes.warmRain, classes.root].join(' ') :
      (weather?.data.main.temp <= 11 && weather?.data.weather[0].main === "Clouds") ? [classes.coldClouds, classes.root].join(' ') :
      (weather?.data.main.temp <= 11 && weather?.data.weather[0].main === "Rain") ? [classes.coldRain, classes.root].join(' ') :
      [classes.cold, classes.root].join(' ')
    ) : classes.root}>
      <main className={classes.main}>
        <SearchBox
          query={query}
          handleInputChange={handleInputChange}
        />
        <InfoBox weather={weather}/>
      </main>
    </div>
  );
}

export default App;
