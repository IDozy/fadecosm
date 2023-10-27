import React from 'react'
import './Quienes.css';
import img1 from "../../images/foto1.jpg";

export const Quienes = () => {
  return (
    <div className="quienes-somos-card">
     
        <div className="card-1" style={{width: "auto", marginTop: "2%", marginBottom: "7%" , height:"auto" }}>
        
          <h2 className='text-title'>¿Quiénes Somos?</h2>
          <h4 className='text-info' style={{marginBottom: "2rem", paddingLeft: "2rem"  }}>Fadeco SM</h4>
          <p className='quienes-text' >
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
