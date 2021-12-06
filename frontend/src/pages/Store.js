import React from "react";

import { Card, Button, Row, Col, Container } from "react-bootstrap";

import storeData from "./store-data";
// import placeholder from "./images/placeholder286.png";
import VerticallyCenteredModal from "../components/VerticallyCenteredModal/VerticallyCenteredModal";

const Store = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const storeDetailsHandler = (event) => {
    setSelectedIndex(event.target.getAttribute("data-index"));
    setModalShow(true);
  };

  return (
    <React.Fragment>
      <h1>Store</h1>
      <Container>
        <Row xs={1} md={2} lg={3} className="g-4">
          {storeData.map((data, index) => {
            return (
              <React.Fragment key={index}>
                <Col>
                  <Card style={{ width: "18rem", margin: "1.5rem" }}>
                    <Card.Img variant="top" src={data.image_url} />
                    <Card.Body>
                      <Card.Title>{data.title}</Card.Title>
                      <Card.Text>{data.mini_des}</Card.Text>
                      <Button
                        variant="dark"
                        onClick={storeDetailsHandler}
                        key={index}
                        data-index={index}
                      >
                        View
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
      {modalShow && (
        <VerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          index={selectedIndex}
        >
          {"Testing"}
        </VerticallyCenteredModal>
      )}
    </React.Fragment>
  );
};

export default Store;
