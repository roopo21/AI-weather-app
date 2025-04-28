import React, { useContext, useState } from 'react';
import "../styles/components/Settings.scss"
import ThemeContext from '../context/theme.context';
import { MEASUREMENT_SYSTEMS } from '../constants';
import WeatherContext from '../context/weather.context';

const Settings = () => {

    const [openSettings, setOpenSettings ] = useState(false);

    const {dark, setDark, saveThemeToLocalStorage} = useContext(ThemeContext);

    const {measurementSystem, setMeasurementSystem } = useContext(WeatherContext);
    // console.log(measurementSystem, "adsfasdf");

    const handleOpenSettings = () => {
        setOpenSettings(!openSettings);
    }

    const toggleTheme = () => {
        setDark((prevDark) => !prevDark);
        saveThemeToLocalStorage(!dark);
    }
    return (
        <div className='Settings'>

            <div className='theme-toggler'>
                <div className='theme-buttons' onClick={toggleTheme}>
                    <div className={`light-theme-btn ${dark? '': 'active'}`}>
                        <i  className='bi bi-sun'></i>
                    </div>
                    <div className={`dark-theme-btn ${dark? 'active': ''}`}>
                        <i  className='bi bi-moon'></i>
                    </div>
                </div>
            </div>

            <div className='settings-btn' onClick={handleOpenSettings}>
                <i className= {`bi bi-gear${openSettings ? '-fill' : ''}`}></i>
            </div>
            <div className={`settings-menu ${openSettings ? 'open' : ''}`}>
                <div className="measurement-systems">
                    <h4> Units:</h4>
                    <div className="systems">
                        {
                            Object.values(MEASUREMENT_SYSTEMS).map((system) =>(
                                <div className={`system ${measurementSystem === system ? 'active': ''}`} key={system} onClick={() => setMeasurementSystem(system)}> {system} </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Settings;
