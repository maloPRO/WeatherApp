/* eslint-disable no-unused-vars */
import './styles/input.css';

// eslint-disable-next-line no-unused-vars
const WeatherApp = (async () => {
  const response = await fetch(
    'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London,UK?key=K2X54GNUTB3Q7VYRHRCL9ELCK',
    { mod: 'cors' }
  );
  const WeatherData = await response.json();
  console.log(WeatherData);

  const { address } = WeatherData;
  const { conditions } = WeatherData.currentConditions;
  const { humidity } = WeatherData.currentConditions;
  const { datetime } = WeatherData.currentConditions;
  const { temp } = WeatherData.currentConditions;
  const { feelslike } = WeatherData.currentConditions;
  console.log(feelslike);
})();
