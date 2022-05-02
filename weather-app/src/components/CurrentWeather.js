import React, { useEffect, useState } from 'react';

import { API_CURRENT_WEATHER } from '../reusables/Urls';

import WeatherIcon from './WeatherIcon';

const CurrentWeather = ({ lat, lon, unit }) => {

  // Initial state used as mockup data
  const [currentWeather, setCurrentWeather] = useState({
    location: 'Älvsjö',
    temp: '12',
    weather: 'Clouds',
    unit: unit === "metric" ? "C" : "F",
    wind: '4.12',
    humidity: '43',
    sunrise: new Date(),
    sunset: new Date()
  });

  useEffect(() => {

    fetch(API_CURRENT_WEATHER(lat, lon, unit))
    .then(res => res.json())
    .then((data) => {
      const apiRes = {
        location: data.name,
        temp: data.main.temp,
        weather: data.weather[0].main,
        unit: unit === "metric" ? "C" : "F", // Show different unit shorthand based on chosen measurement unit
        wind: data.wind.speed,
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
      };
      setCurrentWeather(apiRes);
    })
    .catch(err => console.error(err))
  }, [lat, lon, unit])

  const convertTime = (val) => {
    const time = new Date(val * 1000);

    return time.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }

  return (
    <div className='current-weather__container'>
      <p className='current-weather__location'>{currentWeather.location}</p>
      <p className='current-weather__temp'>{Math.round(currentWeather.temp)}&deg;{currentWeather.unit}</p>
      <WeatherIcon weather={currentWeather.weather} size="80" className="current-weather__weather" />
      <p className='current-weather__wind'>Wind: {currentWeather.wind}{unit === "metric" ? "m/s" : "m/h"}</p>
      <p className='current-weather__humidity'>Humidity: {currentWeather.humidity}%</p>
      <div className='current-weather__sunrise'>
        <img src="/icons/icons8-sunrise-50.png" alt='sunrise'/>
        <p>{convertTime(currentWeather.sunrise)}</p>
      </div>
      <div className='current-weather__sunset'>
        <img src="/icons/icons8-sunset-50.png" alt='sunrise'/>
        <p>{convertTime(currentWeather.sunset)}</p>
      </div>
    </div>
  )
}

export default CurrentWeather;