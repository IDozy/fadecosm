import React from "react";
import styles from "./Proyectos.module.css";
import img1 from "../../images/Proyectos/proyecto3.png";
import img2 from "../../images/Proyectos/proyecto1.jpg";
import img3 from "../../images/Proyectos/proyecto.jpg";
import img4 from "../../images/Proyectos/proyecto2.jpg";
import img5 from "../../images/Proyectos/proyecto4.jpg";

export const Proyectos = () => {
  const proyectos = [
    {
      titulo: "Fabricación de rejillas pluviales, barandas, portones y cercos.",
      imagen: img1,
      empresa: "E.I.G.R CONTRATISTAS S.R.L",
      lugar: "Pampa alegre - José Sabogal - San Marcos 2023",
      proyecto:
        "Entrega 12 intervenciones (IE) en el departamento de Ancash, La Libertad y Cajamarca - Paquete 6",
    },
    {
      titulo: "FABRICACION DE DADOS DE CONCRETO ARMADO TIPO F1",
      imagen: img2,
      empresa: "TECNOFAST",
      lugar: "Cajamarca - 2022",
      proyecto: "CAMP CONSTRUCTION – YANACOCHA SULFIDES PROJECT",
    },
    {
      titulo: "FABRICACIÓN DE BLOQUES DE CONCRETO ARMADO",
      imagen: img3,
      empresa: "EQUANS Perú",
      lugar: "Cajamarca - 2023 ",
      proyecto: "PROYECTO WTP, Yanacocha ",
    },
    {
      titulo:
        "FABRICACIÓN DE BUZONES, BUZONETAS, TECHOS PREFABRICADOS Y CAJAS DE VÁLVULA",
      imagen: img4,
      empresa: "Consorcio CHAQUICOCHA",
      lugar: "Cajamarca - 2022",
      proyecto:
        "INSTALACIONES DE REDES DE AGUA, RED DESAGÜE, RED PLUVIAL CAMPAMENTO Km 52 - PROYECTO SULFUROS",
    },
    {
      titulo: "INSTALACIÓN DE POSTE DE ALUMBRADO",
      imagen: img5,
      empresa: "Nombre de la Empresa 2",
      lugar: "Otuzco Cajamarca - 2023",
      proyecto: "INSTALACIÓN DE POSTE",
    },
    {
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
    {
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
    {
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
    },
  ];

  return (
    <section className={styles["nuestros-proyectos"]}>
      <h2 className="text-title" style={{marginBottom:"5rem"}}>Últimos Proyectos </h2>
      <div className={styles["proyectos-container"]}>
        {proyectos.map((proyecto, index) => (
          <article key={index} className={styles["proyecto"]}>
            <img src={proyecto.imagen} alt={proyecto.titulo} />
            <div className={styles["info-proyecto"]}>
              <h3 className={styles["proyecto-titulo"]}>{proyecto.titulo}</h3>
              <p className={styles["proyecto-proyecto"]}>{proyecto.proyecto}</p>
              <p className={styles["proyecto-lugar"]}>{proyecto.lugar}</p>
              <p className={styles["proyecto-empresa"]}>{proyecto.empresa}</p>
            </div>
          </article>
        ))}
      </div>
      <h1 className="text-title" style={{textAlign:'center'}}>Ofrecemos También</h1>
    </section>
  );
};
