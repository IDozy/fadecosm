import React from "react";
import "./Historia.css";
import img1 from "../../images/fotocorp.png";

export const Historia = () => {
  return (
    <div className="nuestra-historia-card">
      <div className="nuestra-historia-image">
        <img src={img1} alt="Imagen de Nuestra Historia" />
      </div>
      <div className="nuestra-historia-text">
        <h2 className="titulo-historia">Nuestra Historia</h2>
        <p>
          La fábrica de concreto (FADECO) fue creada en el año 2009 , con el fin
          de beneficiar a la ciudad de Cajamarca en los servicios de saneamiento
          y alcantarillado, en sus inicios contaba con dos trabajadores y cuya
          fábrica de concreto no contaba con máquinas tecnológicas para la
          elaboración de ladrillos de techo y otros productos de concreto, así
          que, se elaboraban de una manera precaria, es decir, se realizaban en
          un tronco de madera por vibración con el fin de elaborar los productos
          de concreto, de manera paulatina se implementó la fábrica con modernos
          equipos tecnológicos, ya en el año 2012, el número de trabajadores se
          incrementó a once , por ende ya no solamente se dedicaron a la
          elaboración de ladrillo de techo, sino también a otros productos de
          concreto como son: cajas para desagüe, buzón de desagüe, etc. Al
          incrementarse el nivel de producción la empresa FADECO, fue siendo
          reconocida en toda la región de Cajamarca.
        </p>
      </div>
    </div>
  );
};