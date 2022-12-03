/* eslint-disable no-console */

const getWeather = (function () {
  async function getWeatherToday() {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Nairobi&APPID=11c9f9d2aa9271d63ff7a170e2ac157f', { mode: 'cors' });
    const weatherData = await response.json();

    console.log(weatherData);
    const city = weatherData.name;
    const { country } = weatherData.sys;
    const mainWeather = weatherData.weather[0].main;
    const { temp } = weatherData.main;
    const { humidity } = weatherData.main;
    const { feels_like } = weatherData.main;
    const { pressure } = weatherData.main;

    console.log(`Weather: ${mainWeather}`);
    console.log(`City: ${city}`);
    console.log(`Country: ${country}`);
    console.log(`Temp: ${temp}`);
    console.log(`Humidity: ${humidity}`);
    console.log(`Feels Like: ${feels_like}`);
    console.log(`Pressure: ${pressure}`);
  }

  return { getWeatherToday };
}());

export default getWeather;
