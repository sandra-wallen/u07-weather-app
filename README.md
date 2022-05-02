# u07-weather-app-sandra-wallen
This project is built as an assignment in the JavaScript course at Chas Academy's fullstack developer program.

The task was to build a weather app with React, displaying information about the current weather and forecast based on the users geographical position.

## Requirements
- The user should see the following weather information based on their current position
  - Temperature
  - Wind speed
  - Humidity
  - Sunrise and sunset
  - Be able to select measurement unit (Celsius or Fahrenheit)

- The user should see a forecast with the following weather information
  - Temperature and another accurate information about the weather for the following 5 days
  - Temperature, weather, wind speed and humidity forecast for every single or third hour of the current day

- The project should use an external API to fetch the weather data (preferably OpenWeatherMap)
- The project should use geolocation in the browser to retrieve the current position of the user
- The design should be based on https://weather.com/weather/today or another similiar looking app (i.e. easy to understand and clear)

## About the project and things I would like to clearify
Overall it went pretty smooth to build the project. I encountered some issues with useEffect going into an endless loop (because I forgot the dependancy array) using up all my api calls 😅. I've had problems with this before and I decided to read up on useEffect and its dependancy array more to really understand how to make it behave how I wanted it to (on mount and state update). However I still have an issue with the dependancy array. As it is now I have left out one dependancy from the array (making react complain about it) because for some reason, which I haven't figured out yet how to solve, one of the states which I set and refer to in the useEffect updates more than I intend to which causes the useEffect to go into an infinity loop. As I am writing this now it just occured to me that both setting the state and depending on it in the useEffect is probably what's causing the infinty loop?

The forecast fetch looks a bit unnecessary at the moment with the async await and callback. This is because initially I tried to make setting the state of the hourly forecast await until the state of the daily forecast was set. The hourly forecast in the api response contains data for the next 48 hours but I didn't want all of those hours, I only want the hours that is left until the first daily forecast (i.e. the next day). So when I looped through the hourly forecast data I only wanted to return the object if object date time < date time of first index in daily forecast. But this condition crashed my app because when the condition was read the daily forecast state wasn't always set, due to async, hence why I experimented with async await and callbacks. This is also the explanation of why I have used a for of loop instead of just a map, I think I have read previously that one of them waits and the other doesn't. But I never made this work so I ended up hardcoding it to return 22 hours instead. I could just rewrite this entire thing to make it easier to read and make more sence but my intention is to make it work when I have more time so I will leave it as is.

Because of the limited allowed api calls I made some very basic mockup data which I set as the initial state in my states, so when I knew I would make things that would call the api a lot of times I commented out the fetches and only worked with the initial states to not max out my api calls again.

There's a "Each child in a list should have a unique "key" prop" warning on the map in daily forecast. Since I haven't stored anything that could be used as a unique identifier in the daily forecast data I used the indexes as the key, but I still get the warning so I'm guessing React doesn't think that's valid? I set process.env.CI = false to make netlify ignore this 😝

The requirements said that we should store temperature, weather, wind speed and humidity for every hour in the hourly forecast. I have stored this in the state, but it didn't make sence to me to show this to the user. When looking at different weather apps basically none of them show this much information about the hourly forecast so I decided to leave it out as well. But as I said, I still store it to meet the requirements.

To be able to put as much of my time into the functionality of the app I put minimal effort into the styling, which probably is obvious when viewing my site 😅

At last I just want to say that even though there are still some questionmarks for me regarding useEffect, I have learned so much about it during this project and really started to see the benefits of it and of React states. I felt real satisfaction when I realised that if I make useEffect depend on the measurement unit state and then update the state in some component, this will trigger useEffect and the api call with the newly set measurement unit automatically 😍

## Watch it live
at https://adorable-licorice-bff0ca.netlify.app/ **There's something wrong with my publish directory in the build on netlify, I will investigate it**