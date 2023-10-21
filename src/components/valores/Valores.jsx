import React, { useState } from "react";
import {
  faBusinessTime,
  faHandshake,
  faPeopleCarryBox,
} from "@fortawesome/free-solid-svg-icons";
import './Valores.css'
import ContainerInfo from "../info/ContainerInfo";

export const Valores = () => {
  const [cards] = useState([
    {
      icon: faHandshake,
      animation: 'fade',
      subtitle: "",
      title: "Responsabilidad",
      text: `Nuestros productos cumplen con metricas de cálidad requeridas
      por el sector construcción.`,
    },
    {
      icon: faPeopleCarryBox,
      animation: 'beat',
      subtitle: "",
      title: "Integridad",
      text: `Nuestro equipo de profesionales esta apto para cubrir todo lo
      requerido en cada proyecto.`,
    },
    {
      icon: faBusinessTime,
      animation: 'bounce',
      subtitle: "",
      title: "Puntualidad",
      text: `La Puntualidad es nuestra mejor carta de presentación.`,
    },
  ]);

  return (
    <div className="container-valores" style={{ marginTop: "10%" }}>
      <h2 className="text-title" style={{ textAlign: "center" }}>
        Valores Empresariales
      </h2>
      <div className="card-about" style={{ marginTop: "3%" }}>
        <ContainerInfo cards={cards} cardClassName={"valores"} />
      </div>
    </div>
  );
};
