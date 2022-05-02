import React from 'react';

import WeatherIcon from './WeatherIcon';

const HourlyForecast = ({ forecastHourly }) => {

  const convertTime = (val) => {
     return val.toLocaleTimeString("sv-SE", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    });
  }

  return (
    <section className='hourly-forecast__section'>
      {forecastHourly.map((hour) => (
        <div className='hourly-forecast__container'>
          <p>{convertTime(hour.date)}</p>
          <WeatherIcon weather={hour.weather} size="50" />
          <p>{Math.round(hour.temp)}&deg;</p>
        </div>
      ))}
    </section>
  )
}

export default HourlyForecast;