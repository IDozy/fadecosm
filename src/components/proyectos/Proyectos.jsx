import React from "react";
import styles from "./Proyectos.module.css";
import { useNavigate } from "react-router-dom";

//EIGR
import eigr from "../../images/Proyectos/EIGR/EIGR-5.png";
import eigr1 from "../../images/Proyectos/EIGR/EIGR-1.png";
import eigr2 from "../../images/Proyectos/EIGR/EIGR-2.png";
import eigr3 from "../../images/Proyectos/EIGR/EIGR-4.png";
import eigr4 from "../../images/Proyectos/EIGR/EIGR-6.png";
import eigr6 from "../../images/Proyectos/EIGR/EIGR-7.png";
import eigr5 from "../../images/Proyectos/EIGR/EIGR-9.png";
//TECNOFAST
import tecnof from "../../images/Proyectos/TECNOFAST/tecnofast.png";
import tecnof1 from "../../images/Proyectos/TECNOFAST/tecnofast-2.png";
import tecnof2 from "../../images/Proyectos/TECNOFAST/tecnofast-3.png";
import img1 from "../../images/Proyectos/proyecto3.png";
//EQUANS
import equans from "../../images/Proyectos/EQUANS/bloques.png";

//MPC
import mpc from "../../images/Proyectos/MPC/mpc-5.png";
import mpc1 from "../../images/Proyectos/MPC/mpc-1.png";
import mpc2 from "../../images/Proyectos/MPC/mpc2.png";
import mpc3 from "../../images/Proyectos/MPC/mpc-3.png";
import mpc4 from "../../images/Proyectos/MPC/mpc-4.png";
import mpc5 from "../../images/Proyectos/MPC/proyec1.png";
//CHAQUICOCHA
import chaq from "../../images/Proyectos/Chaquicocha/chaquicocha.png";
import chaq1 from "../../images/Proyectos/Chaquicocha/Chaquicocha-2.png";


//BALIP
import balip from "../../images/Proyectos/BALIP/Balip.png";
import balip1 from "../../images/Proyectos/BALIP/Balip-2.png";
//CAM
import cam from "../../images/Proyectos/CAM/CAM.png";


export const Proyectos = () => {
  const navigate = useNavigate();

  const proyectos = [
    {
      id:"0",
      titulo: "SERVICIO DE CONSTRUCCIÓN DE OBRAS CIVILES - I.E. 821356 JOSÉ SABOGAL",
      imagen: eigr,
      empresa: "E.I.G.R CONTRATISTAS S.R.L",
      lugar: "Pampa alegre - José Sabogal - San Marcos 2023 Cajamarca",
      proyecto:
        "Entrega 12 intervenciones (IE) en el departamento de Ancash, La Libertad y Cajamarca - Paquete 6",
      imagenes: [eigr1, eigr2, eigr3,eigr4,eigr5,eigr6],
    },
    {
      id:"1",
      titulo: "FABRICACION DE DADOS DE CONCRETO ARMADO TIPO F1",
      imagen: tecnof,
      empresa: "TECNOFAST",
      lugar: "Cajamarca - 2022",
      proyecto: "CAMP CONSTRUCTION  YANACOCHA SULFIDES PROJECT",
      imagenes: [img1, tecnof1, tecnof2],
    },
    {
      id:"2",
      titulo: "FABRICACIÓN DE BLOQUES DE CONCRETO ARMADO",
      imagen: equans,
      empresa: "EQUANS Perú",
      lugar: "Cajamarca - 2023 ",
      proyecto: "PROYECTO WTP, Yanacocha ",
    },

    {
      id:"3",
      titulo:
        "FABRICACIÓN DE BUZONES ELÉCTRICOS, BUZONETAS",
      imagen: chaq,
      empresa: "Consorcio CHAQUICOCHA",
      lugar: "Cajamarca - 2022",
      proyecto:
        "INSTALACIONES DE REDES DE AGUA, RED DESAGÜE, RED PLUVIAL CAMPAMENTO Km 52 - PROYECTO SULFUROS",
      imagenes:[chaq, chaq1],
    },
    {
      id:"4",
      titulo: "CREACIÓN DEL SERVICIO DE MOVILIDAD URBANA EN LA AV. MIGUEL DE CERVANTES",
      imagen: mpc,
      empresa: "Municipalidad Provincial de Cajamarca",
      lugar: "Otuzco Cajamarca - 2023",
      proyecto: "CREACIÓN DEL SERVICIO DE MOVILIDAD URBANA EN LAS VÍAS LOCALES DE AV. MIGUEL DE CERVANTES DESDE LA CUADRA 12 HASTA LA CUADRA 29, SECTORES 15 SAN VICENTE Y 16 EL ESTANCO EN EL CENTRO POBLADO CAJAMARCA, DISTRITO DE CAJAMARCA, PROVINCIA DE CAJAMARCA, DEPARTAMENTO DE CAJAMARCA",
      imagenes: [mpc1, mpc2, mpc3, mpc4,mpc5],
    },
    {
      id:"5",
      titulo: "BALIP FOTOS",
      imagen: balip,
      empresa: "Nombre de la Empresa 2",
      lugar: "Pampa alegre - José Sabogal - San Marcos",
      proyecto: "",
      imagenes: [balip1],
    },
    {
      id:"6",
      titulo: "CAM ",
      imagen: cam,
      empresa: "CAM servicios del Perú",
      lugar: "No hay",
      proyecto: "",
    },
    {
      id:"7",
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "none",
      proyecto: "",
    },
    {
      id:"8",
      titulo: "Rejillas pluviales, barandas, cercos y portones",
      imagen: img1,
      empresa: "Nombre de la Empresa 2",
      lugar: "None",
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
