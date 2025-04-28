import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE, MEASUREMENT_SYSTEMS } from "../constants";
import { getWeatherData } from "../api";
import { UNITS } from "../constants";
const WeatherContext = createContext();


function WeatherProvider({children}) {

    const [place, setPlace] = useState(DEFAULT_PLACE);
    const [loading , setLoading] = useState(true);

    const [currentWeather, setCurrentWeather] = useState({});
    const [hourlyForecast, setHourlyForecast] = useState({});
    const [dailyForecast, setDailyForecast] = useState({});

    const [units, setUnits] = useState({});

    const [measurementSystem, setMeasurementSystem]  = useState(MEASUREMENT_SYSTEMS.AUTO);
    // console.log(measurementSystem, "AAA");

    useEffect(()=> {
        async function _getWeateherData() {
            setLoading(true);

            const cw = await getWeatherData('current', place.place_id, measurementSystem);
            setCurrentWeather(cw.current);
            setUnits(UNITS[cw.units]);
            
            const hf = await getWeatherData('hourly', place.place_id, measurementSystem);
            setHourlyForecast(hf.hourly.data);

            const df = await getWeatherData('daily', place.place_id, measurementSystem);
            setDailyForecast(df.daily.data);

            setLoading(false);

        }
        _getWeateherData();
    },[place, measurementSystem]);
    return(    
        <WeatherContext.Provider value ={{place, loading, currentWeather, dailyForecast,hourlyForecast, measurementSystem, setMeasurementSystem, units, setPlace}}>
            {children}
        </WeatherContext.Provider>
    );
}

export {WeatherProvider};
export default WeatherContext