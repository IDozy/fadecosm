import React, { useState } from "react";
import Navbar from "./navbar/Navbar";
import WhatsAppButton from "./whatsappbutton/WhatsAppButton";
import CarouselAbout from "./carouselAbout/CarouselAbout";
import ContainerInfo from "./info/ContainerInfo";
import "./info/Containerabout.css";

export const About = () => {
  const [cards] = useState([
    {
      icon: "cube",
      subtitle: "",
      title: "MISIÓN",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas minima fugit accusamus asperiores repellendus cum recusandae hic corporis mollitia molestiae, in deleniti saepe ab vel, neque delectus assumenda distinctio.`,
    },
    {
      subtitle: "",
      title: "VISIÓN",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quas minima fugit accusamus asperiores repellendus cum recusandae hic corporis mollitia molestiae, in deleniti saepe ab vel, neque delectus assumenda distinctio.`,
    },
  ]);
  return (
    <div>
      <Navbar></Navbar>
      <CarouselAbout />
      <div className="card-about">
        <ContainerInfo cards={cards} cardClassName={"card"} />
      </div>
      <WhatsAppButton></WhatsAppButton>
    </div>
  );
};
