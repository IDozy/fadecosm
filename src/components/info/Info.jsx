import React, { useState } from "react";

import ContainerInfo from "./ContainerInfo";
import {
  faRankingStar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  const [cards] = useState([
    {
      data: "fade-down",
      icon: "fa-solid fa-cubes-stacked",
      subtitle: "ENCONTRARÁS",
      title: "Calidad",
      text: `Personal técnico altamente calificado para la elaboración de los productos de acuerdo a sus requerimientos.`,
    },
    {
      data: "fade-down",
      subtitle: "OFRECEMOS",
      icon: "fa-solid fa-city",
      title: "Servicios Especiales",
      text: `Fabricamos productos de acuerdo a los requerimientos de nuestros clientes.`,
    },
    {
      data: "fade-up",
      icon: "fa-solid fa-helmet-safety",
      subtitle: "CONTAMOS CON",
      title: "Seguridad",
      text: `Porque la vida es primero, garantizamos un ambiente seguro con el compromiso de todos.`,
    },
    {
      data: "fade-up",
      icon: "fa-solid fa-truck-front",
      subtitle: "CONTAMOS CON",
      title: "Cultura Ambiental",
      text: `Dentro de nuestro equipo calificado, para construir un ambiente laboral sano y un mundo mejor.`,
    },
  ]);
  return (
    <div className="container-info">
      <div
        className="subcontainer-1"
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <div className="card-1">
          <h4 className="text-info">Fadeco SM</h4>
          <h1 className="text-title">¿Por qué elegirnos?</h1>
        </div>
      </div>
      <div className="subcontainer-2">
        <ContainerInfo cards={cards} cardClassName={"card"} />
      </div>
    </div>
  );
};

export default Info;
