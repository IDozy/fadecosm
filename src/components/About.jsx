import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";

import ContainerInfo from "./info/ContainerInfo";

import {
  faMagnifyingGlassChart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import "./info/Containerabout.css";
import { Valores } from "./valores/Valores";
import Footer from "./footer/Footer";
import { Historia } from "./historia/Historia";
import { Quienes } from "./quienes/Quienes";
import { InfoAbout } from "./infoAbout/InfoAbout";
import Header from "./contacto/Header";

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
      de acuerdo a los estándares de calidad y las 
      normas vigentes incursionando en los 
      diversos campos como los de 
      pavimentación, y servicios de saneamiento.`,
    },
  ]);
  return (
    <div>
      <Header />
      <Navbar />
      <InfoAbout />
      <Quienes />
      <div className="container-mision">
        <div className="card-about">
          <ContainerInfo cards={cards} cardClassName={"card"} />
        </div>
      </div>
      <Historia />
      <Valores />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
