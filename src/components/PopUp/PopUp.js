import { Modal, Button } from "react-bootstrap";
import React, { useContext } from "react";
import { WeatherContext } from "../WeatherContext/WeatherContext";
import { FaRegSadCry } from "react-icons/fa";
import "./PopUp.scss";

const PopUp = () => {
  const { state, dispatch } = useContext(WeatherContext);
  const handleClose = () => dispatch({ type: "SHOW_POPUP" });

  return (
    <>
      <Modal show={state.showPopUp} onHide={handleClose}>
        <Modal.Header className="popup-bg border-0">
          <Modal.Title className="popup-bg border-0">No result</Modal.Title>
        </Modal.Header>
        <Modal.Body className="popup-bg border-0">
          <FaRegSadCry /> Sorry, couldn't find the city.
        </Modal.Body>
        <Modal.Footer className="popup-bg border-0">
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PopUp;
