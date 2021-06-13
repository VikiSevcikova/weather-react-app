import React, { useContext } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { WeatherContext } from "../WeatherContext/WeatherContext";

const WeatherDetails = () => {
    const {dailyWeather, state, dispatch} = useContext(WeatherContext);
    const { isMetricUnit } = state;
    
    const changeUnit = () => {
        dispatch({type: 'CHANGE_UNIT'});
    }

    return (
        <Container className="mt-5">
            {dailyWeather &&
            <Col xs={12} md={8} className="mx-auto">
                <h3>{dailyWeather.name}, {dailyWeather.sys.country}</h3>
                <Row className="d-flex justify-content-center align-items-center" >
                    <h1 onClick={changeUnit}>{Math.floor(dailyWeather.main.temp)}° {isMetricUnit? "C" : "F"}</h1>
                </Row>
                
                <h4 className="mb-5">{dailyWeather.weather[0].main}</h4>
                <Row>
                    <Col xs={4}>
                        <p>Feels like: {dailyWeather.main.feels_like}° {isMetricUnit? "C" : "F"}</p>
                        <p>Visibility: {dailyWeather.visibility}</p>
                    </Col>
                    <Col xs={4}>
                        <p>Wind: {dailyWeather.wind.speed} {isMetricUnit? "m/s" : "mph"}</p>
                        <p>Humidity: {dailyWeather.main.humidity} %</p>
                    </Col>
                    <Col xs={4}>
                        <p>Pressure: {dailyWeather.main.pressure} hPa</p>
                        <p>Cloud: {dailyWeather.clouds.all} %</p>
                    </Col>
                </Row>
               
            </Col>
        }
        </Container>
    );
}

export default WeatherDetails;
