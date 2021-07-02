import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/teh1.jpg";
import image2 from "../images/teh2.jpg";
import image3 from "../images/tex3.jpg";
import image4 from "../images/teh4.jpg";
import image5 from "../images/tex5.jpg";
export default class Carousels extends Component {
  render() {
    return (
      <div id="usaaa" style={{ display: "flex", background: "black" }}>
        <div
          style={{
            width: "70%",
            margin: "0 auto",
            background: "black",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "red", marginBottom: "20px" }}> Галерея</h2>
          <Carousel>
            <div>
              <img style={{ borderRadius: "20px" }} src={image5} alt="one" />
              <p className="legend"> Legend 1</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image4} alt="one" />
              <p className="legend"> Legend 1</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image1} alt="one" />
              <p className="legend"> Legend 1</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image3} alt="two" />
              <p className="legend">Legend 2</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image2} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
