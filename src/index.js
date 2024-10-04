import './styles/input.css';
import locIcon from './assets/placeholder.png';

let city = 'Nairobi';
const form = document.querySelector('form');
const input = document.querySelector('.input');

const WeatherApp = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11c9f9d2aa9271d63ff7a170e2ac157f&units=metric`,
      { mod: 'cors' }
    );
    if (!response.ok) {
      throw new Error(`City not found: ${response.status}`);
    }
    const weatherData = await response.json();
    console.log(weatherData);
    const address = document.querySelector('.address');
    const condition = document.querySelector('.condition');
    const humidity = document.querySelector('.humidity');
    const temp = document.querySelector('.temp');
    const icon = document.querySelector('.icon');
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    address.innerHTML = `
      <img src=${locIcon}>
      ${weatherData.name}, ${weatherData.sys.country}
    `;
    condition.textContent = weatherData.weather[0].description;
    humidity.textContent = `HUMIDITY ${weatherData.main.humidity}%`;
    temp.textContent = `${weatherData.main.temp}\u00B0C`;

    icon.style.backgroundImage = `url(${iconUrl})`;

    console.log(weatherData.weather[0].icon);
  } catch (err) {}
};

window.onload = WeatherApp();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = input.value;
  WeatherApp();
});
