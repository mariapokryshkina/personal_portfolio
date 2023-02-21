import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const src= 'https://api.open-meteo.com/v1/forecast?latitude=60.17&longitude=24.94&hourly=temperature_2m&current_weather=true'


function Weather() {

    const [temperature, setTemperature] = useState(0);
   
    useEffect(() => {
        axios 
          .get(src)
          .then(data => {
            setTemperature(data.data.current_weather.temperature)
          });

    }, []);


    return (
        <div className="Weather"> 
            Helsinki weather: {temperature}
        </div>
    );
};

export default Weather;