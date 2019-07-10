import axios from 'axios'
import {FETCH_WEATHER} from "./types";

const API_KEY = '245f56885be0894b0b4c324ba6f51211';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?`;


export const fetchWeather = (city, iso) => async dispatch => {
  const url = `${ROOT_URL}q=${city},${iso}&appid=${API_KEY}`;
  const response = await axios.get(url);

  dispatch({
    type: FETCH_WEATHER,
    payload: response.data
  })
};