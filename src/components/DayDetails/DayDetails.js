import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {WiHorizonAlt, WiHorizon, WiDirectionUp, WiDirectionDown} from "react-icons/wi";
import { WeatherContext } from "../WeatherContext/WeatherContext";


const DayDetails = () => {
  const {dailyWeather, state} = useContext(WeatherContext);
  const { isMetricUnit } = state;
  const [sunrise, setSunrise] = useState();
  const [sunset, setSunset] = useState();
  useEffect(()=>{
    if(!dailyWeather) return;
    let sr = new Date(dailyWeather.sys.sunrise*1000+(dailyWeather.timezone*1000)).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit',
      timeZone: 'UTC'
    });
    setSunrise(sr);
    let ss = new Date(dailyWeather.sys.sunset*1000+(dailyWeather.timezone*1000)).toLocaleTimeString(navigator.language, {
      hour: '2-digit',
      minute:'2-digit',
      timeZone: 'UTC'
    });
    setSunset(ss);
  }, [dailyWeather]);

  return (
    <Container className="mt-5">
      {dailyWeather &&
      <>
      <h2 className="text-left">Day Details</h2>

      <Row className="text-left">
        <Col xs={6} md={3}>
          <p>Sunrise</p>
          <h5><WiHorizonAlt className="h1 my-0"/> {sunrise}</h5>
        </Col>
        <Col xs={6} md={3}>
            <p>Sunset</p>
            <h5><WiHorizon className="h1 my-0"/> {sunset}</h5>
        </Col>
        <Col xs={6} md={3}>
          <p>Max temperature</p>
          <h5><WiDirectionUp className="h1 my-0"/> {Math.floor(dailyWeather.main.temp_max)}° {isMetricUnit? "C" : "F"}</h5>
        </Col>
        <Col xs={6} md={3}>
          <p>Min temperature</p>
          <h5><WiDirectionDown className="h1 my-0"/> {Math.floor(dailyWeather.main.temp_min)}° {isMetricUnit? "C" : "F"}</h5>
        </Col>
      </Row>
      </>
}
    </Container>
  );
};

export default DayDetails;
