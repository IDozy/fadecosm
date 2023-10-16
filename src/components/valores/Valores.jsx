import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBusinessTime,
  faHandshake,
  faPeopleCarryBox,
} from "@fortawesome/free-solid-svg-icons";

import ContainerInfo from "../info/ContainerInfo";

export const Valores = () => {
  const [cards] = useState([
    {
      icon: faHandshake,
      subtitle: "",
      title: "Responsabilidad",
      text: `Nuestros productos cumplen con metricas de cálidad requeridas
      por el sector construcción.`,
    },
    {
      icon: faPeopleCarryBox,
      subtitle: "",
      title: "Integridad",
      text: `Nuestro equipo de profesionales esta apto para cubrir todo lo
      requerido en cada proyecto.`,
    },
    {
      icon: faBusinessTime,
      subtitle: "",
      title: "Puntualidad",
      text: `La Puntualidad es nuestra mejor carta de presentación.`,
    },
  ]);


  return (
    <div className="container-valores" style={{ marginTop: "10%",  }}>
      <h2 className="text-title" style={{ textAlign: "center" }}>Valores Empresariales</h2>

      <div className="card-about" style={{ marginTop: "3%" }}>
        <ContainerInfo cards={cards} cardClassName={"valores"}  />
      </div>


    </div>
  );
};


