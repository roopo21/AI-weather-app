import React from 'react';
import HourlyForecastWidget from './HourlyForecastWidget';
import DailyForecastWidget from './DailyForecastWidget';
import "../styles/components/Forecast.scss";
import HorizontallyScrollable from './HorizontallyScrollable';


const Forecast = ({title, data, type}) => {
    return (
        <div className='Forecast'>
            <div className="forecast-container">
                <h3>{title}</h3>
                    <HorizontallyScrollable className="widget-container">

                    {
                    data.map((singleData) => (
                        <div key={singleData.date || singleData.day}>
                            {
                                type === "hourly" ?( <HourlyForecastWidget data= {singleData} key={data.time}/> ) : (<DailyForecastWidget data={singleData} key={data.day}/>)
                            }

                        </div>
                    ))
                }
                </HorizontallyScrollable>

            </div>
            
        </div>
    );
}

export default Forecast;
