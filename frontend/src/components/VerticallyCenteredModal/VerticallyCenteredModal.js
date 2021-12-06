import React from "react";
import { Modal, Button, Image } from "react-bootstrap";

import storeData from "../../pages/store-data";

function VerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {storeData[props.index].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          src={storeData[props.index].image_url}
          fluid
          className="rounded mx-auto d-block"
        />
        <br />
        <p>{storeData[props.index].description}</p>
        <h2>Cost: {storeData[props.index].price} Sweatpoints</h2>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={props.onHide}>Buy</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VerticallyCenteredModal;
