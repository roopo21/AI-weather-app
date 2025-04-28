import React from 'react';
import WeatherContext from '../context/weather.context';
// import "../styles/components/Place.scss";
import { useContext } from 'react';

const Place = () => {

    const {place} = useContext(WeatherContext);
    // console.log(place);
    return (
        <div className='Place'>
            <i className="bi bi-geo-alt"></i>
            <b>{place.name}</b>, {place.country}
        </div>
    );
}

export default Place;
