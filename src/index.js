import './main.css';
import getWeather from './weather';

getWeather.getWeatherToday('nairobi');
getWeather.handleDates();

const loader = document.querySelector('.page-loader');

setTimeout(() => loader.classList.add('disapper'), 2000);
