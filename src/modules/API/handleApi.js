import { popAlert } from "../interface/popup";
import { getActiveLanguage, getText } from "../lang/language";

/* eslint-disable no-console */

function getURL() {
  const API_KEY = `6325d8e01df64fdd83b53822240302`;
  const API_ADDITIONAL_FLAGS = `&aqi=no&lang=${getActiveLanguage() || "en"}`;
  const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3${API_ADDITIONAL_FLAGS}`;
  return API_URL;
}

export default async function callWeatherApi(cityQuery, isStart) {
  try {
    const response =
      (await fetch(`${getURL()}&q=${encodeURIComponent(cityQuery)}`)) ?? null;

    if (!response?.ok) {
      // Handle fetch call
      if (response.status === 400) {
        console.log(`Bad Request: The request was unacceptable.`);
      } else {
        console.log(`HTTP Error: ${response.status}`);
      }
      popAlert(`${getText(getActiveLanguage(), "validCity")}`);
      return null; // Stop Process
    }

    const weatherData = await response.json();
    if (
      !weatherData.current ||
      !weatherData.location ||
      !weatherData.forecast
    ) {
      if (weatherData.error.code === 1006) {
      }

      return null;
    }
    const { location, current, forecast } = weatherData;

    /*
     * weatherData --> location */
    let { country, name, region, tz_id: timezone } = location;

    if (isStart) {
      name = region;
    }
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
