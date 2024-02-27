import { popAlert } from "../interface/popup";

/* eslint-disable no-console */
const API_KEY = `6325d8e01df64fdd83b53822240302`;
const API_ADDITIONAL_FLAGS = `&aqi=no&lang=tr`;
const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3${API_ADDITIONAL_FLAGS}`;
export default async function callWeatherApi(cityQuery) {
  try {
    const response = await fetch(
      `${API_URL}&q=${encodeURIComponent(cityQuery)}`,
    );
    if (!response.ok) {
      // Handle fetch call
      if (response.status === 400) {
        console.log(`Bad Request: The request was unacceptable.`);
      } else {
        console.log(`HTTP Error: ${response.status}`);
      }
      popAlert("Please enter a valid city name.", true);
      return null; // Stop Process
    }

    const weatherData = await response.json();
    if (
      !weatherData.current ||
      !weatherData.location ||
      !weatherData.forecast
    ) {
      if (weatherData.error.code === 1006) {
        console.log("Please Enter Valid City Name!");
      }

      return null;
    }
    const { location, current, forecast } = weatherData;

    /*
     * weatherData --> location */
    const { country, name, tz_id: timezone } = location;

    /*
     * weatherData --> current */
    const {
      condition,
      feelslike_c: likeCelsius,
      feelslike_f: likeFahrenheit,
      temp_c: tempCelsius,
      temp_f: tempFahrenheit,
      humidity,
      cloud,
      wind_kph: wind,
      is_day: isDay,
    } = current;
    //! current --> condition
    const { text, code } = condition;

    /*
     * weatherData --> forecast */
    const forecastDays = {
      today: forecast.forecastday[0],
      tomorrow: forecast.forecastday[1],
      other: forecast.forecastday[2],
    };
    const temperatureData = {
      naming: {
        countryName: country,
        cityName: name,
      },
      currentTemp: {
        celsius: tempCelsius,
        fahrenheit: tempFahrenheit,
      },
      feelsLike: {
        celsius: likeCelsius,
        fahrenheit: likeFahrenheit,
      },
      forecastDays,
      weatherContent: {
        text,
        code,
        isDay,
      },
      misc: {
        humidity,
        cloud,
        wind,
        timezone,
      },
    };
    console.log(temperatureData);
    return temperatureData;
  } catch (error) {
    console.log("callWeatherApi function has problem.");
    console.error(error);
    return null;
  }
}
