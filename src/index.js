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
    console.log(weatherData);
    const today = document.querySelector('.day');
    const date = document.querySelector('.date');
    const address = document.querySelector('.address');
    const condition = document.querySelector('.condition');
    const humidity = document.querySelector('.humidity');
    const pressure = document.querySelector('.press');
    const wind = document.querySelector('.wind');
    const feels = document.querySelector('.feels');
    const temp = document.querySelector('.temp');
    const icon = document.querySelector('.icon');
    const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    today.textContent = days[now.getDay()];
    date.textContent = `${day} ${month} ${year}`;
    address.innerHTML = `
      <img class='pin' src=${icon2}>
      ${weatherData.name}, ${weatherData.sys.country}
    `;
    condition.textContent = weatherData.weather[0].description;
    temp.textContent = `${weatherData.main.temp} \u00B0C`;
    humidity.textContent = `${weatherData.main.humidity}%`;
    pressure.textContent = weatherData.main.pressure;
    wind.textContent = `${weatherData.wind.speed} Km/h`;
    feels.textContent = `${weatherData.main.feels_like} \u00B0C`;

    search.innerHTML = `
      <img class='pin' src=${icon2}>
      CHANGE LOCATION
    `;

    icon.style.backgroundImage = `url(${iconUrl})`;
  } catch (err) {
    errBox.textContent = err;
    form.appendChild(errBox);
  }
};

window.onload = WeatherApp();

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  city = input.value;
  WeatherApp();
  form.reset();
  search.classList.toggle('hidden');
  input.classList.toggle('hidden');

  setTimeout(() => {
    if (errBox) {
      form.removeChild(errBox);
    }
  }, 3000);
});

search.addEventListener('click', () => {
  search.classList.toggle('hidden');
  input.classList.toggle('hidden');
});
