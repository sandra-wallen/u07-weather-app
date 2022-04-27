import React from 'react';

const WeatherIcon = ({ weather }) => {

  const generateWeatherImg = () => {
    let imgSrc = "";

    switch(weather) {
      case "Thunderstorm":
        imgSrc = "/icons/icons8-cloud-lightning-80.png";
        break;
      case "Drizzle":
        imgSrc = "/icons/icons8-light-rain-80.png";
        break;
      case "Rain":
        imgSrc = "/icons/icons8-rain-80.png";
        break;
      case "Snow":
        imgSrc = "/icons/icons8-snow-80.png";
        break;
      case "Clear":
        imgSrc = "/icons/icons8-sun-80.png";
        break;
      case "Clouds":
        imgSrc = "/icons/icons8-clouds-80.png";
        break;
      default:
        imgSrc = "";
    }

    return imgSrc;
  }

  return (
    <img className='current-weather__weather' src={generateWeatherImg()} alt={weather}/>
  )
}

export default WeatherIcon;