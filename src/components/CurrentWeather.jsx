import React from 'react';
import "../styles/components/CurrentWeather.scss";
import WeatherIcon from './WeatherIcon';
import WeatherContext from '../context/weather.context';
import { useContext } from 'react';


const CurrentWeather = ({data}) => {
    // const data = getCurrentWeather();
    const {
        cloud_cover,
        dew_point,
        feels_like,
        humidity,
        icon,
        icon_num,
        ozone,
        temperature,
        uv_index,
        visibility,
        precipitation,
        wind,
        summary
    } = data;
    const {units} = useContext(WeatherContext);
    const otherInfoWidgets = [
        {
          id: 0,
          icon: 'droplet',
          name: 'Precipitation',
          value: Math.round(precipitation.total),
          unit: units.precipitation,
        },
        {
          id: 1,
          icon: 'wind',
          name: 'Wind',
          value: Math.round(wind.speed),
          unit: units.wind_speed,
        },
        {
          id: 2,
          icon: 'moisture',
          name: 'Humidity',
          value: Math.round(humidity),
          unit: units.humidity,
        },
        {
          id: 3,
          icon: 'sunglasses',
          name: 'UV index',
          value: Math.round(uv_index),
          unit: units.uv_index,
        },
        {
          id: 4,
          icon: 'clouds-fill',
          name: 'Clouds cover',
          value: Math.round(cloud_cover),
          unit: units.cloud_cover,
        },
        {
          id: 5,
          icon: 'eye',
          name: 'Visibility',
          value: Math.round(visibility),
          unit: units.visibility,
        },
      ];
    return (
        <div className='CurrentWeather'>
            <div className="temperature">
                <div className="weather-icon">
                    <WeatherIcon iconNumber = {icon_num }/>
                </div>
                <div className="value">
                <div className="real"> {temperature} °C</div>
                <div className="feels_like"> feels like {feels_like} °C</div>
                <div className="summary">{summary}</div>
            </div>
            </div>
            <div className="other-infos">
                {otherInfoWidgets.map(({id, icon, name, value, unit}) => (
                    <div className="widget" key={id}>
                        <div className="widget-container">
                            <div className="info">
                                <div className="icon">
                                    <i className={`bi bi-${icon}`}></i>
                                </div>
                                <div className="value">
                                    {value} {unit}
                                </div>
                            </div>
                            <div className="name">{name}</div>


                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default CurrentWeather;
