import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../images/teh1.jpg";
import image2 from "../images/teh2.jpg";
import image3 from "../images/tex3.jpg";
import image4 from "../images/teh4.jpg";
import image5 from "../images/tex5.jpg";
import image6 from "../images/garage1.jpg";
import image7 from "../images/garage2.jpg";
import image8 from "../images/garage3.jpg";
import image9 from "../images/garage4.jpg";
import image10 from "../images/garage5.jpg";
import image11 from "../images/garage6.jpg";
import image12 from "../images/garage7.jpg";

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
              <img style={{ borderRadius: "20px" }} src={image12} alt="one" />
              <p className="legend"> Legend 1</p>
            </div>
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
            <div>
              <img style={{ borderRadius: "20px" }} src={image6} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image7} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image8} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image9} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image10} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
            <div>
              <img style={{ borderRadius: "20px" }} src={image11} alt="three" />
              <p className="legend">Legend 3</p>
            </div>
          </Carousel>
        </div>
      </div>
    );
  }
}
