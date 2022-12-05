/* eslint-disable camelcase */
/* eslint-disable no-console */
import format from 'date-fns/format';
import './main.css';

const getWeather = (function () {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const cityValue = document.getElementById('city');
  const tempValue = document.getElementById('temp');
  const conditionValue = document.getElementById('condition');
  const humidityValue = document.getElementById('humidity');
  const feelsLikeValue = document.getElementById('feelsLike');
  const pressureValue = document.getElementById('pressure');
  const descValue = document.getElementById('desc');
  const conditionIcon = document.getElementById('conditionIcon');
  const windValue = document.getElementById('wind');
  const centerImg = document.getElementById('centerImg');

  async function getWeatherToday(cityName = 'nairobi') {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=11c9f9d2aa9271d63ff7a170e2ac157f&units=metric`, { mode: 'cors' });
      const weatherData = await response.json();
      const city = weatherData.name;
      const condition = weatherData.weather[0].main;
      const { temp } = weatherData.main;
      const { humidity } = weatherData.main;
      const { feels_like } = weatherData.main;
      const { pressure } = weatherData.main;
      const pic = weatherData.weather[0].icon;
      const wind = weatherData.wind.speed;
      const desc = weatherData.weather[0].description;

      console.log(weatherData);

      cityValue.textContent = city;
      conditionValue.textContent = condition;
      humidityValue.textContent = humidity;
      feelsLikeValue.textContent = Math.ceil(feels_like);
      pressureValue.textContent = pressure;
      tempValue.textContent = Math.round(temp);
      conditionIcon.src = `http://openweathermap.org/img/wn/${pic}@2x.png`;
      centerImg.src = `http://openweathermap.org/img/wn/${pic}@2x.png`;
      windValue.textContent = `${wind}m/s`;
      descValue.textContent = desc;
    } catch (error) {
      console.log('Error');
      console.error(error);
    }
  }
  function handleForm(e) {
    e.preventDefault();
    getWeatherToday(input.value);
  }
  form.addEventListener('submit', handleForm);

  return { getWeatherToday };
}());

const handleDates = () => {
  const dateValue = document.getElementById('date');
  const timeValue = document.getElementById('time');
  const dateToday = format(new Date(), 'eeee, LLL d, yyyy');
  const timeNow = format(new Date(), 'H:mm');

  dateValue.textContent = dateToday;
  timeValue.textContent = timeNow;
};

handleDates();
getWeather.getWeatherToday('nairobi');
