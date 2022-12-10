import './main.css';
import getWeather from './weather';

getWeather.getWeatherToday('nairobi');
getWeather.handleDates();

// create an element to hold the loader
const loader = document.createElement('div');

// set the loader's class so that it can be styled with CSS
loader.className = 'loader';

// add the loader to the page
document.body.appendChild(loader);

// remove the loader after a short delay
setTimeout(() => {
  document.body.removeChild(loader);
}, 1000);
