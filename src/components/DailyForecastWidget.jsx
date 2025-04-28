import React, { useContext } from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherContext from '../context/weather.context';

const DailyForecastWidget = ({data}) => {
    const {icon, precipitation, day: weather_date, weather, summary, wind, temperature_max, temperature_min} = data;

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
    const date_formatted = {
        day: new Intl.DateTimeFormat(navigator.language, {
            weekday: "short",
            day: "2-digit",
            month: "2-digit"
        }).format(new Date(weather_date)),
        time: new Intl.DateTimeFormat(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
        }).format(new Date(weather_date))
    };

    date_formatted.day = now.day === date_formatted.day ? 'Today' : date_formatted.day;
    return (
        <div className='widget'>
            <div className="day">{date_formatted.day}</div>
            <div className="icon-temp">
                <div className="icon">
                    <WeatherIcon iconNumber={icon} summary={summary}/>
                </div>
            <div className="temperature">
                <div className="max">
                {Math.round(temperature_max)} {units.temperature}
                </div>
                <div className="min">
                {Math.round(temperature_min)} {units.temperature}
                </div>
            </div>
            </div>
            <div className="precipitation">
                {Math.round(precipitation.total)} {units.precipitation}
            </div>
        </div>
    );
}

export default DailyForecastWidget;
