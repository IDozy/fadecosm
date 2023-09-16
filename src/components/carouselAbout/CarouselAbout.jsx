import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import foto1 from "../../images/foto1.jpg";
import foto2 from "../../images/foto2.jpg";
import foto3 from "../../images/foto3.jpg";

function CarouselAbout() {
  return (
    <Carousel className="carousel" interval={3000} pause={false}>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-images"
          src={foto1}
          alt="Primera imagen"
        />

        <Carousel.Caption>
          <h3>Primera imagen</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-images"
          src={foto2}
          alt="Segunda imagen"
        />

        <Carousel.Caption>
          <h3>Segunda imagen</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-images"
          src={foto3}
          alt="Tercera imagen"
        />
        <Carousel.Caption>
          <h3>Tercera imagen</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselAbout;
