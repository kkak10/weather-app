import CONSTANTS from './constants';

export function getWeather(lat, lon) {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${CONSTANTS.WEATHER_API_KEY}`)
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err));
}