import React from 'react';
import WeatherIcon from './WeatherIcon';

const DailyForecast = ({ forecastDaily }) => {

  return (
    <section className='daily-forecast__section'>
      <p>5 day forecast</p>
      {forecastDaily.map((day, i) => (
        // Unique key prop not working
        <div className='daily-forecast__container' key={i}>
          <p>{day.date.toLocaleDateString('sv-SE', {weekday: 'long', month: 'numeric', day: 'numeric'})}</p>
          <WeatherIcon weather={day.weather} size="50"/>
          <p>{Math.round(day.temp)}&deg;</p>
        </div>
      ))}
    </section>
  )
}

export default DailyForecast;