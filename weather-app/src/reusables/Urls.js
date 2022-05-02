// Current weather endpoint
export const API_CURRENT_WEATHER = (lat, lon, unit) => `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9ead0c4a1e48e2fe8fa9e8c08c1514ec&units=${unit}`;

// Hourly forecast and daily forecast endpoint
export const API_FORECAST_WEATHER = (lat, lon, unit) => `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=9ead0c4a1e48e2fe8fa9e8c08c1514ec&units=${unit}`;