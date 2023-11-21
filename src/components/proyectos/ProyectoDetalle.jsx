import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProyectoDetalle.css";
import proyectos from "./datosProyectos";

const ProyectoDetalle = () => {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(null);

  useEffect(() => {
    // Lógica para cargar el proyecto con el id correspondiente

    const proyectoEncontrado = proyectos.find((proy) => proy.id === id);

    if (proyectoEncontrado) {
      setProyecto(proyectoEncontrado);
    }
  }, [id]);

  // Si el proyecto aún no se ha cargado, puedes mostrar un mensaje de carga
  if (!proyecto) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="proyecto-detalle-container">
      <h2 className="proyecto-titulo">{proyecto.titulo}</h2>
      <section className="proyecto-info">
        <p>{proyecto.proyecto}</p>
        <p className="proyecto-empresa">{proyecto.empresa}</p>
        <p className="proyecto-producto">{proyecto.producto}</p>
        <p className="proyecto-lugar">{proyecto.lugar}</p>
      </section>
      {/* Otros detalles según sea necesario */}
      {Array.isArray(proyecto.imagenes) && proyecto.imagenes.length > 0 && (
        <section className="imagenes-section">
          <h3>Llamanos: 955445875 - 952066393 - 976631901</h3>
          <div
            className="servicios-container"
            style={{
              gap: "5rem",
              margin: "5rem 0",
              justifyContent: "space-around",
              width: "100%",
            }}
          >
            {proyecto.imagenes.map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                style={{ maxWidth: "700px", margin: "0 10px", height: "600px" }}
              />
            ))}
          </div>
          <button className="button-regresar">
            <a href="/home"> ← Regresar</a>
          </button>
        </section>
      )}
    </div>
  );
};

export default ProyectoDetalle;
