import React from "react";
import { useLocation, useParams } from "react-router-dom";
import "./ProyectoDetalle.css";

const ProyectoDetalle = () => {
  const { state } = useLocation();

  const { id } = useParams();
  // Si no hay estado o si el ID no coincide, puedes manejar el caso apropiado
  if (!state || state.proyecto.id !== id) {
    return <p>Proyecto no encontrado</p>;
  }
  const proyecto = state?.proyecto || {};

  return (
    <div className="proyecto-detalle-container">
      <h2 className="proyecto-titulo">{proyecto.titulo}</h2>
      <section className="proyecto-info">
        <p>Proyecto: {proyecto.proyecto}</p>
        <p>Empresa: {proyecto.empresa}</p>
        <p>Lugar: {proyecto.lugar}</p>
      </section>
      {/* Otros detalles según sea necesario */}
      {Array.isArray(proyecto.imagenes) && proyecto.imagenes.length > 0 && (
        <section className="imagenes-section">
          <h3>Imágenes del proyecto</h3>
          <div style={{ display: "flex" }}>
            {proyecto.imagenes.map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                style={{ maxWidth: "200px", margin: "0 10px" }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProyectoDetalle;
