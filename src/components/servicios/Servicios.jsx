import React from "react";
import "./Servicios.css";
import img from "../../images/Servicios/Estructura.jpeg";
import img1 from "../../images/Servicios/Agua.jpg";
import img2 from "../../images/Servicios/Portatil.jpg";
import img3 from "../../images/Servicios/Calidad.jpg";
import img4 from "../../images/Servicios/Construccion.jpg";
import img5 from "../../images/Servicios/Grua3.png";

const serviciosData = [
  {
    title: "Alquiler de Estructuras Metálicas",
    image: img,
    description: `
        Moldes para buzón.
        Moldes para columnas circulares.
        Moldes para buzo netas.
        Moldes para andamios.
        Moldes para buzones eléctricos.`,
  },
  {
    title: "Alquiler de Equipos para Construcción",
    image: img4,
    description: `Saltarín - Compactador.
        Plancha Compactadora.
        Mezcladora de Concreto.
        Vibradores Eléctricos.
        Balde de Prueba Hidráulico.
        Motobombas.
        Percutor - Roto martillo.
        Martillo Demoledor.`,
  },
  {
    title: "Alquiler de Equipos Topográficos y Control de Calidad",
    image: img3,
    description: `Nivel de Ingeniero.
        Estación Total.
        Olla de Washington.
        Equipo para Prueba Slump.
        Equipo Medidor Espesor de Pintura.
        Termómetro Digital.`,
  },

  {
    title: "ABASTECIMIENTO",
    image: img1,
    description: `Agua Potable.`,
  },
  {
    title: "PORTÁTILES",
    image: img2,
    description: `Alquiler de Baños Portátiles.
        Limpieza de Pozos Sépticos.`,
  },
  {
    title: "GRÚA Y TRANSPORTE",
    image: img5,
    description: `Servicio de transporte de carga.
        Alquiler de grúa.`,
  },
];

const Servicio = ({ title, image, description, imageClassName }) => {
  const descriptionList = description
    .split("\n")
    .filter((item) => item.trim() !== "");

  return (
    <div className="servicio">
      <div className="servicio-front">
        <img src={image} alt={title} className={imageClassName}  style={{height:"30rem ",width:"auto", maxWidth:"40rem"}} />
      </div>
      <div className="servicio-back">
        <h2>{title}</h2>

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
      <h1
        className="text-title"
        style={{ textAlign: "center", margin: "7rem 0 " }}
      >
        SERVICIOS
      </h1>
      <div className="servicios-container">
        {serviciosData.map((servicio, index) => (
          <Servicio key={index} {...servicio} />
        ))}
      </div>
    </>
  );
};

export default Servicios;
