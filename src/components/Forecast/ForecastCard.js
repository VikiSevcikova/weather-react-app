import { useEffect, useState, useContext } from "react";
import {Row, Col} from "react-bootstrap";
import { WeatherContext } from "../WeatherContext/WeatherContext";

const ForecastCard = ({forecast}) => {
    const { state } = useContext(WeatherContext);
    const { isMetricUnit } = state;
    const [time, setTime] = useState();
   
    useEffect(()=>{
        let t = new Date(forecast.dt*1000).toLocaleTimeString(navigator.language, {
            hour: '2-digit',
            minute:'2-digit'
          });
        setTime(t);
    },[]);

    return (
        <>
        {forecast &&
            <Col xs={2}>
                <p>{time}</p>
                <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}/>
                <p>{forecast.weather[0].main}</p>
                <Row className="justify-content-center"><span>{Math.floor(forecast.main.temp_max)}°{isMetricUnit? "C" : "F"} / {Math.floor(forecast.main.temp_min)}°{isMetricUnit? "C" : "F"}</span></Row>
            </Col>
        }
        </>
    );
}

export default ForecastCard;
