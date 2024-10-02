import './styles/input.css';

let city = 'Nairobi';
const form = document.querySelector('form');
const input = document.querySelector('.input');
const iconImage = document.querySelector('.icon');

const WeatherApp = async () => {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=K2X54GNUTB3Q7VYRHRCL9ELCK`,
      { mod: 'cors' }
    );

    const WeatherData = await response.json();
    const weather = WeatherData.currentConditions;
    const address = document.querySelector('.address');
    const condition = document.querySelector('.condition');
    const humidity = document.querySelector('.hum');
    const datetime = document.querySelector('.datetime');
    const temp = document.querySelector('.temp');
    const feelslike = document.querySelector('.feelslike');
    const { icon } = weather;

    const iconResponse = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=BgT9zSdmRAWyFDU7NEcy31mUcxEZQ3Df=${icon}`,
      { mode: 'cors' }
    );

    const iconData = await iconResponse.json();

    iconImage.src = iconData.data.images.original.url;

    address.textContent = WeatherData.address;
    condition.textContent = weather.conditions;
    humidity.textContent = `Humidity: ${weather.humidity}%`;
    datetime.textContent = weather.datetime;
    temp.textContent = `Temperature: ${weather.temp}\u00B0C`;
    feelslike.textContent = `Feels Like: ${weather.feelslike}\u00B0C`;
  } catch (err) {}
};

window.onload = WeatherApp();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = input.value;
  WeatherApp();
});
