import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import {API_KEY} from "../../config";

export const WeatherContext = React.createContext();

const initialState = {
    isMetricUnit : true,
    city : "Vancouver",
    showPopUp: false
}

const reducer = (state, action) => {
    switch (action.type) {
      case "CHANGE_UNIT":
        return {
            ...state,
            isMetricUnit : !state.isMetricUnit
        }
    case "CHANGE_CITY":
        console.log("WEATHER CONTEXT:"+action.city)
        return {
            ...state,
            city : action.city
        }
    case "SHOW_POPUP":
        return {
            ...state,
            showPopUp : action.show
        }
    default:
        return state;
    }
};

export const WeatherProvider = (props) => {
    const[dailyWeather, setDailyWeather] = useState();
    const[forecastWeather, setForecastWeather] = useState();
    const[state, dispatch] = useReducer(reducer, initialState);

    const fetchWeather = async () => {
        const daily = `https://api.openweathermap.org/data/2.5/weather?q=${state.city.replace(' ','').toLowerCase()}&appid=${API_KEY}&units=${state.isMetricUnit?'metric':'imperial'}`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${state.city.replace(' ','').toLowerCase()}&appid=${API_KEY}&units=${state.isMetricUnit?'metric':'imperial'}`;
        try {
          let d = await axios.get(daily);
          setDailyWeather(d.data);
          let f = await axios.get(forecast);
          setForecastWeather(f.data);
        } catch (error) {
          console.error(error);
          dispatch({type: 'SHOW_POPUP', show: true});
          dispatch({type: 'SHOW_POPUP', city: "Vancouver"});
        }
    }

    useEffect(()=>{
        fetchWeather();
    },[state.isMetricUnit, state.city]);

    return(
        <WeatherContext.Provider value={{dailyWeather, forecastWeather, state, dispatch}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export const WeatherConsumer = WeatherContext.Consumer;