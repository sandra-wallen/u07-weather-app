import React from 'react';

const WeatherIcon = ({ weather, size, className }) => {

  const generateWeatherImg = () => {
    let imgSrc = "";

    switch(weather) {
      case "Thunderstorm":
        imgSrc = `/icons/icons8-cloud-lightning-${size}.png`;
        break;
      case "Drizzle":
        imgSrc = `/icons/icons8-light-rain-${size}.png`;
        break;
      case "Rain":
        imgSrc = `/icons/icons8-rain-${size}.png`;
        break;
      case "Snow":
        imgSrc = `/icons/icons8-snow-${size}.png`;
        break;
      case "Clear":
        imgSrc = `/icons/icons8-sun-${size}.png`;
        break;
      case "Clouds":
        imgSrc = `/icons/icons8-clouds-${size}.png`;
        break;
      default:
        imgSrc = "";
    }

    return imgSrc;
  }

  return (
    <img className={`${className} weather_icon`} src={generateWeatherImg()} alt={weather}/>
  )
}

export default WeatherIcon;