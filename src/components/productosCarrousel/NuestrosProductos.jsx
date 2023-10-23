import React from "react";
import img from "../../images/Elaboracion/calidad1.jpg";

import "../../components/historia/Historia.css";



export const NuestrosProductos = () => {
  const linkStyle = {
    textDecoration: "none", 
    color: "inherit", 
  };
  
  return (
    <div className="card-product-container">
      <div className="card-product-content">
        <div className="card-product-image">
          <img src={img} alt="Empresa" />
        </div>
        <div className="card-product-text">
          <h1>Nuestros Productos</h1>
          <p>
            Son elaborados con un proceso supervisado desde la preparación del
            material, hasta los últimos acabados, contamos con la posibilidad de
            ajustar tu producto acorde a las medidas solicitadas en tus proyectos.
          </p>
          <div className="card-product-button">
          <button>
              <a href="/productos" style={linkStyle}>Ver Productos</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};
