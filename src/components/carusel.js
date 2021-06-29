import Carousel from "react-bootstrap/Carousel";
import slide from "../images/car1.jpg";
import slide2 from "../images/car2.jpg";
import slide3 from "../images/car3.jpg";
import React from "react";

const Carusel = () => {
  return (
    <div
      style={{
        width: "100%",
        background: "black",
        textAlign: "center",
        color: "red",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>наши будни</h2>
      <Carousel
        style={{
          margin: "0 auto",
          width: "50%",
          fontWeight: "bold",
        }}
      >
        <Carousel.Item>
          <img
            style={{ marginBottom: "20px" }}
            className="d-block w-100"
            src={slide}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ marginBottom: "20px" }}
            className="d-block w-100"
            src={slide3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ marginBottom: "20px" }}
            className="d-block w-100"
            src={slide2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carusel;
