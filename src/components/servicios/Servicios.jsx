import React from "react";
import "./Servicios.css";
import img from "../../images/Servicios/Grua.jpg";
import img1 from "../../images/Servicios/Agua.jpg";
import img2 from "../../images/Servicios/Baños.jpg";

const Servicio = ({ title, image, description, imageClassName }) => {
  return (
    <div className="servicio">
      <div className="servicio-front">
        <img src={image} alt={title} className={imageClassName} />
      </div>
      <div className="servicio-back">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Servicios = () => {
  return (
    <div className="servicios-container">
      <Servicio
        title="Alquiler de Equipos y Moviliario"
        image={img}
        description="En Fadeco tenemos a su disposición equipos topográficos, gruas, moldes para  concreto"
        imageClassName="grua-image"
      />
      <Servicio
        title="Abastecimineto de agua"
        image={img1}
        description="Contamos con cisternas de agua para sus construcciones, brindamos la posibilidad de succionar baños "
      />
      <Servicio
        title="Alquiler de Portátiles"
        image={img2}
        description="Al alquilar algún baño portátil puede incluir el servicio de mantenimineto y limpieza, acorde a su  requerimiento. "
      />
    </div>
  );
};

export default Servicios;
