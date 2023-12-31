import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import imagen1 from "../../images/Slides/Slide1.jpg";
import imagen2 from "../../images/Slides/Slide2.jpg";
import imagen3 from "../../images/Slides/Slide3.jpg";
import "./Carousel.css";
import "react-awesome-slider/dist/captioned.css";
import CarouselInfo from "./CarouselInfo";

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider = () => (
  <AutoplaySlider
    className="aws-btn aws-sld"
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    bullets={false}
  >
    <div data-src={imagen1} data-alt="Descripcion de la imagen 1">
      <CarouselInfo titulo1={"Más de 12"} titulo2={"Años de experiencia"} />
    </div>
    <div data-src={imagen2} data-alt="imagen2">
      <CarouselInfo
        titulo1={"Líderes en "}
        titulo2={"Prefabricado de Concreto "}
      />
    </div>
    <div data-src={imagen3} data-alt="imagen3">
      <CarouselInfo
        titulo1={"Presente en los"}
        titulo2={"Principales Proyectos"}
      />
    </div>
  </AutoplaySlider>
);
export default slider;
