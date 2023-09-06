import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import imagen1 from "../../asets/imagen-1.jpg"
import imagen2 from "../../asets/imagen-2.jpg"
import imagen3 from "../../asets/imagen-3.jpg"
import "./Carousel.css"
import 'react-awesome-slider/dist/captioned.css';


const AutoplaySlider = withAutoplay(AwesomeSlider);
const slider =() => (
  <AutoplaySlider className="aws-btn aws-sld"
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
    bullets={false}
    
  >
    <div data-src={imagen1} />
    <div data-src={imagen2} />
    <div data-src={imagen3} />
  </AutoplaySlider>
);

export default slider;