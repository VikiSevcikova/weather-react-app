import { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import ForecastCard from "./ForecastCard";
import { WeatherContext } from "../WeatherContext/WeatherContext";

import "./Forecast.scss";

const Forecast = () => {
  const { forecastWeather } = useContext(WeatherContext);
  return (
    <Container className="mt-3">
      {forecastWeather && (
        <>
          <h2 className="text-left">Forecast</h2>
          <Row
            className="py-2"
            style={{ overflow: "auto", flexWrap: "nowrap" }}
          >
            {forecastWeather.list.map((forecast) => (
              <ForecastCard
                key={forecast.dt}
                forecast={forecast}
                timezone={forecastWeather.city.timezone}
              />
            ))}
          </Row>
        </>
      )}
    </Container>
  );
};

export default Forecast;
