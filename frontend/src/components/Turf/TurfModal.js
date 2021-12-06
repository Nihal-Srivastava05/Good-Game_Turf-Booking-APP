import React from "react";

import {Modal, Button} from 'react-bootstrap';

const TurfModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.turfs[props.index].name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>Price: ₹{props.turfs[props.index].price}</h3>
        <p>
          {props.turfs[props.index].description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Book</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TurfModal;
