import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import imagen1 from "../../assets/imagen-1.jpg"
import imagen2 from "../../assets/imagen-2.jpg"
import imagen3 from "../../assets/imagen-3.jpg"
import "./Carousel.css"
import 'react-awesome-slider/dist/captioned.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider =() => (
  <AutoplaySlider className="aws-btn aws-sld"
    play={true}
    cancelOnInteraction={false} 
    interval={6000}
    bullets={false}
  >
    <div data-src={imagen1} data-alt="Descripción de la imagen 1">
    <p style={{ position: 'relative', zIndex: 900, color: 'white' }}>Información adicional para la imagen 1.</p>

</div>
    <div data-src={imagen2} />
    <div data-src={imagen3} />
  </AutoplaySlider>
);

export default slider; 