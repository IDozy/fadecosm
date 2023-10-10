import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from '../../images/foto1.jpg';
import img2 from '../../images/Slide3.jpg';
import img3 from '../../images/foto3.jpg';
import './CarouselAbout.css'
import "react-awesome-slider/dist/captioned.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);
function CarouselAbout() {

  return (
    <div>
      <AutoplaySlider
        className="aws-btn aws-sld"
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        bullets={false}
      >
        <div data-src={img1} data-alt="Descripción de la imagen 1">
          <p style={{ position: "relative", zIndex: 900, color: "white" }}>
            Empresa Cajamarquina.
          </p>
        </div>
        <div data-src={img2} />
        <div data-src={img3} />
      </AutoplaySlider>
    </div>
    
  );
}
export default CarouselAbout;
