import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Kullanıcıdan konum izni al
        navigator.geolocation.getCurrentPosition(async position => {
          const { latitude, longitude } = position.coords;

          // API'den hava durumu bilgilerini al
          const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4408404b6e1a5619b80ccb94313db207`);
          
          setWeatherData(data);
          setLoading(false);
        });
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div></div>;
  if (error) return <div>Error: {error.message}</div>;

  let icon = null;
  switch (weatherData.weather[0].main) {
    case 'Clear':
      icon = <FontAwesomeIcon icon={faSun} />;
      break;
    case 'Clouds':
      icon = <FontAwesomeIcon icon={faCloud} />;
      break;
    case 'Rain':
      icon = <FontAwesomeIcon icon={faCloudRain} />;
      break;
    case 'Snow':
      icon = <FontAwesomeIcon icon={faSnowflake} />;
      break;
    default:
      icon = <div>No icon available</div>;
  }

  return (
    <div className='container'>
      {weatherData && (
        <div className='weatherInfo'>
          <p>{weatherData.name}</p>
          <p>{icon}</p>
          <p>{weatherData.weather[0].main}</p>
          <p>{(weatherData.main.temp - 273.15).toFixed(0)} °C</p>
          </div>
      )}
    </div>
  );
};

export default Weather;
