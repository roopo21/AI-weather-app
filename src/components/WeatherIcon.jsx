import React from 'react';
const publicUrl = import.meta.env.VITE_PUBLIC_URL;


const WeatherIcon = ({iconNumber, summary}) => {
    const imgUrl = `dist/weather_icons/set04/big/${iconNumber}.png`;
    return (
        <div>
         <img src={imgUrl} alt={summary} draggable='false'/>
        </div>
    );
}

export default WeatherIcon;
