import React from "react";
import  "./Servicios.css";
import img from "../../images/Servicios/Grua.jpg";
import img1 from "../../images/Servicios/Agua.jpg";
import img2 from "../../images/Servicios/Portatiles1.jpg";
import img3 from "../../images/Servicios/EquiposCalidad2.jpg";


const Servicio = ({ title, image, description, imageClassName }) => {

  const descriptionList = description.split("\n").filter(item => item.trim() !== "");

  return (
    <div className="servicio">
      <div className="servicio-front">
        <img src={image} alt={title} className={imageClassName} />
      </div>
      <div className="servicio-back">
        <h2>{title}</h2>
        {/* Muestra la descripción como una lista */}
        <ul>
          {descriptionList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Servicios = () => {
  return (
    <>
      <h1 className="text-title" style={{ textAlign: "center", margin:"7rem 0 " }} >
        Ofrecemos También
      </h1>
      <div className="servicios-container">
        <Servicio
          title="Fabricación y Alquiler de Estructuras Metálicas"
          image={img}
          description={`
          Moldes para buzón.
          Moldes para columnas circulares.
          Moldes para buzo netas.
          Moldes para andamios.
          Moldes para buzones eléctricos.`}
          imageClassName="grua-image"
        />
        <Servicio
          title="Alquiler de Equipos para Construcción"
          image={img}
          description={`Saltarín - Compactador.
          Plancha Compactadora.
          Mezcladora de Concreto.
          Vibradores Eléctricos.
          Balde de Prueba Hidráulico.
          Motobombas.
          Percutor - Roto martillo.
          Martillo Demoledor.`}
        />
        <Servicio
          title="Alquiler de Equipos Topográficos y Control de Calidad"
          image={img3}
          description={`Nivel de Ingeniero.
          Estación Total.
          Olla de Washington.
          Equipo para Prueba Slump.
          Equipo Medidor Espesor de Pintura.
          Termómetro Digital.`}
        />
        <Servicio
          title="Abastecimiento"
          image={img1}
          description={`Agua Potable.`}
        />
        <Servicio
          title="Portátiles"
          image={img2}
          description={`Alquiler de Baños Portátiles.
          Limpieza de Pozos Sépticos.`}
        />
        
      </div>
    </>
  );
};

export default Servicios;
