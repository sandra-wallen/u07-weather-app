import React from 'react';

import WeatherIcon from './WeatherIcon';

const HourlyForecast = ({ forecastHourly }) => {

  console.log(forecastHourly);
  return (
    <section>
      {forecastHourly.forEach((hour) => (
        <div>
          <p>{hour.date}</p>
          <WeatherIcon weather={hour.weather} />
          <p>{Math.round(hour.temp)}</p>
        </div>
      ))}
    </section>
  )
}

export default HourlyForecast;