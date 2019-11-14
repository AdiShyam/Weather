import axios from 'axios';

const API_KEY = "57fbfb4ed53c7738d8b2f7d7b289b9c1";
const ROOTURL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const actionType = {
    FEATCH_WEATHER : "FEATCH_WEATHER"
};

export const  fetchWeather = (cityName) => {
    const url = `${ROOTURL}&q=${cityName},in`
    const request = axios.get(url);

    return {
        type: actionType.FEATCH_WEATHER,
        payload: request
    }
}