import React from 'react'
import './Quienes.css';
import img1 from "../../images/foto1.jpg";

export const Quienes = () => {
  return (
    <div className="quienes-somos-card">
      <div className="text-section">
        <h2>¿Quiénes Somos?</h2>
        <p>
          FADECO SAN MARTIN es una empresa conformada por un equipo de
          profesionales y técnicos con experiencia en la fabricación de
          prefabricados de concreto, la cual cuenta con una experiencia de más
          de 10 años en el rubro, ofreciendo productos de calidad y con la
          puntualidad respectiva. Siempre compromeditos con el desarrollo de
          nuestra ciudad de Cajamarca y de nuestro país, ayudando así a nuestros
          clientes a poder optimizar el tiempo y a reducir costos en sus
          proyectos, obras civiles, contrucciones y en general.
        </p>
      </div>
      <div className="image-section">
        <img src={img1} alt="Imagen de la empresa" className="company-image" />
      </div>
    </div>
  )
}
