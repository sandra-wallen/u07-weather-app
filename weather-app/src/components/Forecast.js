import React, { useEffect, useState } from 'react';
import { API_FORECAST_WEATHER } from '../reusables/Urls';

const Forecast = ({ lat, lon }) => {

  const [forecastDaily, setForecastDaily] = useState([]);
  const [forecastHourly, setForecastHourly] = useState([]);

  useEffect(() => {
    console.log('Forecast useEffect triggered');

    fetch(API_FORECAST_WEATHER(lat, lon))
      .then(res => res.json())
      .then((data) => {

        console.log(data)
        const dailyData = data.daily.map((day) => {

          console.log(day)
          const date = new Date(day.dt * 1000);

          return {
            date: date,
            temp: day.temp.day,
            weather: day.weather[0].main
          }
        })

        setForecastDaily(dailyData);

        // const hourlyData = data.hourly.map((hour) => {
        //   const date = new Date(hour.dt * 1000);

        //   if (date < forecastDaily[0].date) {
        //     return {
        //       date: date,
        //       temp: hour.temp,
        //       weather: hour.weather[0].main,
        //       wind: hour.wind_speed,
        //       humidity: hour.humidity
        //     }
        //   } else {
        //     return '';
        //   }
        // })

        // setForecastHourly(hourlyData);

      })

  }, [lat, lon])

  console.log('daily' + forecastDaily);
  //console.log('hourly' + forecastHourly);

  return (
    <p>Forecast</p>
  )
}

export default Forecast;