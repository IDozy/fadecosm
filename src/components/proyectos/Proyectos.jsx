import React from "react";
import styles from "./Proyectos.module.css";
import { useNavigate } from "react-router-dom";
import proyectos from "./datosProyectos";



export const Proyectos = () => {
  const navigate = useNavigate();

  

  const handleProyectoClick = (proyecto) => {
    navigate(`/proyectos/${proyecto.id}`, {
      state: { proyecto },
    });
  };

  return (
    <section className={styles["nuestros-proyectos"]}>
      <h2 className="text-title" style={{marginBottom:"5rem"}}>Últimos Proyectos </h2>
      <div className={styles["proyectos-container"]}>
        {proyectos.map((proyecto, index) => (
          <article key={proyecto.id} className={styles["proyecto"]} onClick={() => handleProyectoClick(proyecto)}>
            <img src={proyecto.imagen} alt={proyecto.titulo} />
           
            <h3 className={styles["proyecto-titulo"]}>{proyecto.titulo}</h3>
         
          </article>
        ))}
      </div>
    </section>
  );
};
