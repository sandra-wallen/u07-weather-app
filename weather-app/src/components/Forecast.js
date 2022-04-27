import React, { useEffect, useState } from 'react';

import { API_FORECAST_WEATHER } from '../reusables/Urls';

import HourlyForecast from './HourlyForecast';

const Forecast = ({ lat, lon }) => {

  const [forecastDaily, setForecastDaily] = useState([]);
  const [forecastHourly, setForecastHourly] = useState([]);

  useEffect(() => {
    console.log('Forecast useEffect triggered');

    fetch(API_FORECAST_WEATHER(lat, lon))
      .then(res => res.json())
      .then((data) => {

        const handleDailyData = async () => {
          const dailyData = [];
        
          for (const day of data.daily) {
            const date = new Date(day.dt * 1000);
            
            const dayObject = {
              date: date,
              temp: day.temp.day,
              weather: day.weather[0].main
            };

            dailyData.push(dayObject);
          }

          setForecastDaily(dailyData.slice(1, 6));

        } 
        
        const handleHourlyData = async () => {
          await handleDailyData();

          const hourlyData = [];

          for (const hour of data.hourly) {
            const date = new Date(hour.dt * 1000);

            if (date < forecastDaily[0].date) {
              const hourObject = {
                date: date,
                temp: hour.temp,
                weather: hour.weather[0].main,
                wind: hour.wind_speed,
                humidity: hour.humidity
              }

              hourlyData.push(hourObject);
            }

          }

          setForecastHourly(hourlyData);
        }

        handleHourlyData();
      })

  }, [lat, lon])

  console.log(forecastDaily);
  console.log(forecastHourly);

  return (
    <HourlyForecast forecastHourly={forecastHourly} />
  )
}

export default Forecast;