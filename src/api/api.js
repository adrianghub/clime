import axios from 'axios';
require('dotenv').config()

const { REACT_APP_WEATHER_API_KEY } = process.env;

export const fetchApi = async () => {
  const endpoint = `http://api.openweathermap.org/data/2.5/weather?q=Bydgoszcz&appid=${REACT_APP_WEATHER_API_KEY}`
  const request = axios.get(endpoint)
  const response = await request
  console.log(response)
}


