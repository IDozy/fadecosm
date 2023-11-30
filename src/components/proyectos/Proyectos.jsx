import React, { useRef } from "react";
import styles from "./Proyectos.module.css";
import { useNavigate } from "react-router-dom";
import proyectos from "./datosProyectos";

export const Proyectos = () => {
  const navigate = useNavigate();
  const proyectosContainerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleProyectoClick = (proyecto) => {
    navigate(`/proyectos/${proyecto.id}`, {
      state: { proyecto },
    });
    scrollToTop();
  };

  return (
    <section className={styles["nuestros-proyectos"]} ref={proyectosContainerRef}>
      <h2 className="text-title" style={{ marginBottom: "5rem" }}>
        ÚLTIMOS PROYECTOS{" "}
      </h2>
      <div className={styles["proyectos-container"]}>
        {proyectos.map((proyecto, index) => (
          <article
            key={proyecto.id}
            className={styles["proyecto"]}
            onClick={() => handleProyectoClick(proyecto)}
          >
            <img src={proyecto.imagen} alt={proyecto.titulo} />

            <h3 className={styles["proyecto-titulo"]}>{proyecto.titulo}</h3>
          </article>
        ))}
      </div>
    </section>
  );
};
