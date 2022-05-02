import React, { useEffect, useState } from 'react';

import { API_FORECAST_WEATHER } from '../reusables/Urls';
import { hourlyDataMockup, dailyDataMockup } from '../reusables/Mockup';

import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';

const Forecast = ({ lat, lon, unit }) => {

  const [forecastDaily, setForecastDaily] = useState(dailyDataMockup);
  const [forecastHourly, setForecastHourly] = useState(hourlyDataMockup);

  useEffect(() => {
    console.log('Forecast useEffect triggered');

    fetch(API_FORECAST_WEATHER(lat, lon, unit))
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

          const filteredData = data.hourly.filter((val, i) => i < 22);

          const hourlyData = filteredData.map((hour) => {
            const date = new Date(hour.dt * 1000);

            return {
              date: date,
              temp: hour.temp,
              weather: hour.weather[0].main,
              wind: hour.wind_speed,
              humidity: hour.humidity
            }
          })

          setForecastHourly(hourlyData);
        }

        handleHourlyData();
      })

  }, [lat, lon, unit])

  return (
    <>
      <HourlyForecast forecastHourly={forecastHourly} />
      <DailyForecast forecastDaily={forecastDaily} />
    </>
  )
}

export default Forecast;