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
        <p>Proyecto: {proyecto.proyecto}</p>
        <p>Empresa: {proyecto.empresa}</p>
        <p>Lugar: {proyecto.lugar}</p>
      </section>
      {/* Otros detalles según sea necesario */}
      {Array.isArray(proyecto.imagenes) && proyecto.imagenes.length > 0 && (
        <section className="imagenes-section">
          <h3>Imágenes del proyecto</h3>
          <div className="servicios-container" style={{gap:"5rem", margin:"5rem 0", justifyContent:"space-around", width:"100%"}}>
            {proyecto.imagenes.map((imagen, index) => (
              <img
                key={index}
                src={imagen}
                alt={`Imagen ${index + 1}`}
                style={{ maxWidth: "600px", margin: "0 10px", height:"470px" }}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProyectoDetalle;
