import React, { useEffect, useState } from 'react';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const Main = ({ unit }) => {

  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  

  useEffect(() => {
    // Get geolocation
    const success = (pos) => {
      const coords = pos.coords;
  
      setLat(coords.latitude);
      setLon(coords.longitude);
    }
  
    const error = (err) => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error); 
  }, [lat, lon])

  return (
    <main className='main'>
      <CurrentWeather lat={lat} lon={lon} unit={unit} />
      <Forecast lat={lat} lon={lon} unit={unit} />
    </main>
  )
}

export default Main;