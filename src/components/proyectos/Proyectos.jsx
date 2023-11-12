import React from "react";
import styles from "./Proyectos.module.css";
import { useNavigate } from "react-router-dom";
import img1 from "../../images/Proyectos/proyecto3.png";
import img2 from "../../images/Proyectos/proyecto1.jpg";
import img3 from "../../images/Proyectos/proyecto.jpg";
import img4 from "../../images/Proyectos/proyecto2.jpg";
import img5 from "../../images/Proyectos/proyecto4.jpg";

export const Proyectos = () => {
  const navigate = useNavigate();

  const proyectos = [
    {
      id:"0",
      titulo: "FABRICACIÓN DE REJILLAS PLUVIALES, BARANDAS, PORTONES Y CERCOS.",
      imagen: img1,
      empresa: "E.I.G.R CONTRATISTAS S.R.L",
      lugar: "Pampa alegre - José Sabogal - San Marcos 2023",
      proyecto:
        "Entrega 12 intervenciones (IE) en el departamento de Ancash, La Libertad y Cajamarca - Paquete 6",
      imagenes: [img4, img3, img5],
    },
    {
      id:"1",
      titulo: "FABRICACION DE DADOS DE CONCRETO ARMADO TIPO F1",
      imagen: img2,
      empresa: "TECNOFAST",
      lugar: "Cajamarca - 2022",
      proyecto: "CAMP CONSTRUCTION – YANACOCHA SULFIDES PROJECT",
      imagenes: [img1, img2, img3],
    },
    {
      id:"2",
      titulo: "FABRICACIÓN DE BLOQUES DE CONCRETO ARMADO",
      imagen: img3,
      empresa: "EQUANS Perú",
      lugar: "Cajamarca - 2023 ",
      proyecto: "PROYECTO WTP, Yanacocha ",
    },
    {
      id:"3",
      titulo:
        "FABRICACIÓN DE BUZONES ELÉCTRICOS, BUZONETAS",
      imagen: img4,
      empresa: "Consorcio CHAQUICOCHA",
      lugar: "Cajamarca - 2022",
      proyecto:
        "INSTALACIONES DE REDES DE AGUA, RED DESAGÜE, RED PLUVIAL CAMPAMENTO Km 52 - PROYECTO SULFUROS",
    },
    {
      id:"4",
      titulo: "INSTALACIÓN DE POSTE DE ALUMBRADO PÚBLICO EN EL ",
      imagen: img5,
      empresa: "Nombre de la Empresa 2",
      lugar: "Otuzco Cajamarca - 2023",
      proyecto: "INSTALACIÓN DE POSTE",
    },
    {
      id:"5",
      titulo: "FABRICACIÓN DE REJILLAS PLUVIALES, BARANDAS, PORTONES Y CERCOS.",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
    {
      id:"6",
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
    {
      id:"7",
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
    {
      id:"8",
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
  ];

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
