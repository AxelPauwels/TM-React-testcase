import axios from 'axios';

const WeatherBaseUrl = "http://taiwan.thomasmore.be/pr2/koen/aa/weather.php";

class WeatherApi  {
    constructor() {
    }

    getWeather(city) {
        return axios.get(WeatherBaseUrl + "?type=forecast&city=" + city);
    }

    getWeatherSlow(city) {
        return axios.get(WeatherBaseUrl + "?type=slow&city=" + city);
    }

    getWeatherError(city) {
        return axios.get(WeatherBaseUrl + "?type=error&city=" + city);
    }

}

export default WeatherApi;
