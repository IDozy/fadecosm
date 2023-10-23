import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from '../../images/Slides/Slide_About.jpg';
import img2 from '../../images/Slide3.jpg';
import img3 from '../../images/Slides/Slide2.jpg';

import "react-awesome-slider/dist/captioned.css";
import { CarInfoAbout } from "./CarInfoAbout";

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
        <CarInfoAbout titulo1={"Empresa"} titulo2={"Cajamarquina"} />
        </div>
        <div data-src={img2} > 
        <CarInfoAbout titulo1={"Expertos para"} titulo2={"tus proyectos"} />
        </div>
        <div data-src={img3} >
        <CarInfoAbout titulo1={"Profesionales"} titulo2={"en concreto"} />  
        </div>
      </AutoplaySlider>
    </div>
    
  );
}
export default CarouselAbout;
