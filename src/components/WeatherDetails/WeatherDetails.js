import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { WeatherContext } from "../WeatherContext/WeatherContext";

const WeatherDetails = () => {
  const { dailyWeather, state, dispatch } = useContext(WeatherContext);
  const { isMetricUnit } = state;

  const changeUnit = () => {
    dispatch({ type: "CHANGE_UNIT" });
  };

  const [today, setToday] = useState();
  const[weekday, setWeekday] = useState();

  useEffect(()=>{
    if(!dailyWeather) return;
    setToday(new Date(dailyWeather.dt*1000+(dailyWeather.timezone*1000)).toLocaleDateString(navigator.language, {
      timeZone: 'UTC'
    }));
    setWeekday(new Date(dailyWeather.dt*1000+(dailyWeather.timezone*1000)).toLocaleDateString(navigator.language, {
      timeZone: 'UTC',
      weekday: 'short'
    }));
  },[dailyWeather])

  return (
    <Container className="mt-5">
      {dailyWeather && (
        <Col xs={12} md={8} className="mx-auto">
          <h3>
            {dailyWeather.name}, {dailyWeather.sys.country}
          </h3>
          <h5>
            {weekday}, {today}
          </h5>
          <Row className="d-flex justify-content-center align-items-center">
            <h1 onClick={changeUnit}>
              {Math.floor(dailyWeather.main.temp)} {isMetricUnit ? "°C" : "°F"}
            </h1>
          </Row>

          <h4 className="mb-5">{dailyWeather.weather[0].main}</h4>
          <Row>
            <Col xs={4}>
              <p>
                Feels like: {dailyWeather.main.feels_like}°{" "}
                {isMetricUnit ? "C" : "F"}
              </p>
              <p>Visibility: {dailyWeather.visibility / 1000} km</p>
            </Col>
            <Col xs={4}>
              <p>
                Wind: {dailyWeather.wind.speed} {isMetricUnit ? "m/s" : "mph"}
              </p>
              <p>Humidity: {dailyWeather.main.humidity} %</p>
            </Col>
            <Col xs={4}>
              <p>Pressure: {dailyWeather.main.pressure} hPa</p>
              <p>Cloud: {dailyWeather.clouds.all} %</p>
            </Col>
          </Row>
        </Col>
      )}
    </Container>
  );
};

export default WeatherDetails;
