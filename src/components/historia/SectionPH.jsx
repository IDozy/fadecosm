import React from "react";
import "./Historia.css";

// Componente reutilizable para mostrar la historia o productos
const SectionPH = ({ title, image, text }) => (
  <div className="nuestra-historia-card">
    <div className="nuestra-historia-image">
      <img src={image} alt={`Imagen de ${title}`} />
    </div>
    <div className="nuestra-historia-text">
      <div className="card-1" style={{ margin: "0 5px", paddingRight: "7%", height: "auto" }}>
        <h2 className="text-title">{title}</h2>
        <h4 className="text-info" style={{ marginBottom: ".5rem", paddingLeft: "1rem" }}>Fadedo SM</h4>
        <p>{text}</p>
      </div>
    </div>
  </div>
);
export default SectionPH;