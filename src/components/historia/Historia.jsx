import React from "react";
import "./Historia.css";
import img1 from "../../images/fotocorp.png";
import SectionPH from "./SectionPH";

export const Historia = () => {
  const title = "Nuestra Historia";
  const text = `FADECO SAN MARTIN es una empresa que tiene sus inicios en el
  año 2009, donde iniciaron con la fabricación de ladrillos y
  bloquetas prefabricadas beneficiando así a la población
  cajamarquina la cual estaba en sus inicios de habilitación
  urbana.
  Después de ello se sumergieron en obras de saneamiento y
  alcantarillado, dando así paso a la fabricación de cajas de
  registro de agua y desague, teniendo desde entonces una
  actividad constante de la fabricación de elementos
  prefabricados como cajas de registros, tapas de buzón, techos
  prefabricados y demás elementos.
  FADECO actualmente es una empresa Cajamarquina, dedicada a
  la fabricación de elementos prefabricados en general.`;

  return <SectionPH title={title} image={img1} text={text} />;
};