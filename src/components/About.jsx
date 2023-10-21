import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import CarouselAbout from "./carousel/CarouselAbout";
import ContainerInfo from "./info/ContainerInfo";

import { faMagnifyingGlassChart, faStar } from '@fortawesome/free-solid-svg-icons';

import "./info/Containerabout.css";
import { Valores } from "./valores/Valores";
import Footer from "./footer/Footer";
import { Historia } from "./historia/Historia";
import { Quienes } from "./quienes/Quienes";

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
      <Navbar></Navbar>
      <CarouselAbout />
      <div className="container-mision">
        <div className="card-about">
          <ContainerInfo cards={cards} cardClassName={"card"} />
        </div>
      </div>
      <Quienes />
      <Historia />
      <Valores /> 
      <Footer />
      <WhatsAppButton></WhatsAppButton>
    </div>
  );
};
