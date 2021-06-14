import { Form, Col, Container } from "react-bootstrap";
import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { WeatherContext } from "../WeatherContext/WeatherContext";
import PopUp from "../PopUp/PopUp";

const SearchBar = () => {
  const { dispatch } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const changeCity = (e) => {
    e.preventDefault();
    if (!input) return;
    dispatch({ type: "CHANGE_CITY", city: input });
    setInput("");
  };

  return (
    <>
      <Container className="mt-3">
        <Form onSubmit={changeCity}>
          <Form.Row className="align-items-center">
            <Col xs={1}>
              <FaSearch className="h3 my-0" />
            </Col>
            <Col xs={11}>
              <Form.Control
                placeholder="Search city"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Col>
          </Form.Row>
        </Form>

        <PopUp />
      </Container>
    </>
  );
};

export default SearchBar;
