import './styles/input.css';
import icon2 from './assets/pin.png';

let city = 'Nairobi';
const form = document.querySelector('form');
const input = document.querySelector('.input');
const search = document.querySelector('.search');
const now = new Date();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const day = now.getDate();
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const month = months[now.getMonth()];
const year = now.getFullYear();

const errBox = document.createElement('div');
errBox.classList.add('errBox');

const WeatherApp = async () => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=11c9f9d2aa9271d63ff7a170e2ac157f&units=metric`,
      { mod: 'cors' }
    );
    if (!response.ok) {
      throw new Error(`City not found: ${response.status}!!`);
    }
    const weatherData = await response.json();
    document.querySelector('.day').textContent = days[now.getDay()];
    document.querySelector('.date').textContent = `${day} ${month} ${year}`;
    document.querySelector('.press').textContent = weatherData.main.pressure;
    document.querySelector('.address').innerHTML = `
      <img class='pin' src=${icon2}>
      ${weatherData.name}, ${weatherData.sys.country}
      `;
    document.querySelector('.condition').textContent =
      weatherData.weather[0].description;
    document.querySelector('.humidity').textContent =
      `${weatherData.main.humidity}%`;
    document.querySelector('.wind').textContent =
      `${weatherData.wind.speed} Km/h`;
    document.querySelector('.feels').textContent =
      `${weatherData.main.feels_like} \u00B0C`;
    document.querySelector('.temp').textContent =
      `${weatherData.main.temp} \u00B0C`;
    document.querySelector('.icon').style.backgroundImage =
      `url(http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png)`;

    search.innerHTML = `
      <img class='pin' src=${icon2}>
      CHANGE LOCATION
    `;
  } catch (err) {
    errBox.textContent = err;
    form.appendChild(errBox);
    setTimeout(() => errBox.remove(), 3000);
  }
};

window.onload = WeatherApp;

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = input.value;
  WeatherApp();
  form.reset();
  search.classList.toggle('hidden');
  input.classList.toggle('hidden');
});

search.addEventListener('click', () => {
  search.classList.toggle('hidden');
  input.classList.toggle('hidden');
});
