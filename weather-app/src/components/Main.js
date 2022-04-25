import React, { useEffect, useState } from 'react';

import { API_CURRENT_WEATHER } from '../reusables/Urls';

const Main = () => {

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [currentWeather, setCurrentWeather] = useState({
    location: '',
    temp: '',
    weather: '',
    unit: '',
    wind: '',
    humidity: '',
    sunrise: '',
    sunset: ''
  });
  

  useEffect(() => {
    console.log('useEffect triggered');

    const success = (pos) => {
      const coords = pos.coords;
  
      setLat(coords.latitude);
      setLon(coords.longitude);
  
      console.log(lat, lon);
    }
  
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);

    fetch(API_CURRENT_WEATHER(lat, lon))
      .then(res => res.json())
      .then((data) => {
        const apiRes = {
          location: data.name,
          temp: data.main.temp,
          weather: data.weather[0].main,
          unit: 'C',
          wind: data.wind.speed,
          humidity: data.main.humidity,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset
        };

        setCurrentWeather(apiRes);
      })
      .catch(err => console.error(err))
  }, [lat, lon])

  const convertTime = (val) => {
    const time = new Date(val * 1000);

    return time.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }
  

  return (
    <main>
      <h2>{currentWeather.location}</h2>
      <p>{currentWeather.temp} &deg; {currentWeather.unit} <span>{currentWeather.weather}</span></p>
      <p>Wind speed: {currentWeather.wind}</p>
      <p>Humidity: {currentWeather.humidity}</p>
      <p>Sunrise: {convertTime(currentWeather.sunrise)}</p>
      <p>Sunset: {convertTime(currentWeather.sunset)}</p>
    </main>
  )
}

export default Main;