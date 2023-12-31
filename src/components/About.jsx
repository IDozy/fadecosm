import React, { useState } from "react";
import ContainerInfo from "./info/ContainerInfo";
import {
  faMagnifyingGlassChart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./info/Containerabout.css";
import { Valores } from "./valores/Valores";
import { Historia } from "./historia/Historia";
import { Quienes } from "./quienes/Quienes";
import { InfoAbout } from "./infoAbout/InfoAbout";
import { Helmet } from "react-helmet";

export const About = () => {
  const [cards] = useState([
    {
      icon: faMagnifyingGlassChart,

      subtitle: "",
      title: "MISIÓN",
      text: `Somos un equipo de trabajadores 
      enfocados en el bienestar de nuestra 
      sociedad, por ende, ofreciendo productos 
      de calidad cumpliendo la normativa de 
      nuestra empresa.`,
    },
    {
      icon: faStar,
      subtitle: "",
      title: "VISIÓN",
      text: `Ser una empresa reconocida a nivel 
      nacional ofreciendo productos de calidad 
      de acuerdo a los estándares requeridos y las 
      normas vigentes incursionando en los 
      diversos campos como son obras de alcantarillado 
      y saneamiento de agua potable.`,
    },
  ]);
  return (
    <div>
      <Helmet>
      <title>FADECO SAN MARTIN - Nosotros</title>
        <meta
          name="description"
          content="Conoce más sobre FADECO SAN MARTIN. Somos un equipo de profesionales y técnicos con más de 10 años de experiencia en la fabricación de prefabricados de concreto. Comprometidos con el desarrollo de Cajamarca y el país."
        />
      </Helmet>
      <InfoAbout />
      <Quienes />
      <div className="container-mision">
        <div className="card-about">
          <ContainerInfo cards={cards} cardClassName={"card"} />
        </div>
      </div>
      <Historia />
      <Valores />
    </div>
  );
};
