import React from "react";

import { Carousel } from "react-bootstrap";

import slide1 from "./Images/TrainWithUs.jpeg";
import slide2 from "./Images/Socialize.jpeg";
import slide3 from "./Images/Coupons.jpeg";
import slide4 from "./Images/SweatPoints.jpeg";

const CustCarousel = () => {
  return (
      <div style={{ display: "block", width: 800, height: 600, padding: 30, margin: "0 auto", marginTop: 35, }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={slide1} alt="First slide" />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={slide2} alt="Second slide" />
            {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={slide3} alt="Third slide" />
            {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100" src={slide4} alt="First slide" />
            {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
  );
};

export default CustCarousel;
