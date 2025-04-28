import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherContext from '../context/weather.context';
import { useContext } from 'react';
import { UNITS } from '../constants';

const HourlyForecastWidget = ({data}) => {
    // console.log(data);
    const {date, icon, summary, temperature, precipitation, wind} = data;
    const {units} = useContext(WeatherContext);


    const now = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date()),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date().setMinutes(0))
    };

    const weather_date = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date(date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(date))
    };
    // console.log(weather_date.day , now.day);

    weather_date.day = weather_date.day == now.day ? 'Today' : " ";
    // console.log("NOW", now);

    // us: {
    //     temperature: '°F',
    //     precipitation: 'in/h',
    //     wind_speed: 'mph',
    //     visibility: 'mi',
    //     humidity: '%',
    //     uv_index: '',
    //     cloud_cover: '%',
    //   },

    return (
        <div className='widget'>
            <div className="day">{weather_date.day}</div>
            <div className="time">{weather_date.time}</div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} summary={summary}/>
                </div>
            <div className="temperature">
                {Math.round(temperature)} {units.temperature}
            </div>
            </div>
            <div className="precipitation">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>

            <div className="wind">
                <div className="speed">
                    {Math.round(wind.speed)} {units.wind_speed}
                </div>
                <div className="direction" style={{transform: `rotate(${-45 + wind.angle}deg)`}}>
                    <i className='bi bi-send-fill'></i>
                </div>
            </div>
        </div>
    );
}

export default HourlyForecastWidget;
