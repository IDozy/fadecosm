import React, { useEffect, useState } from "react";


import img from "../../images/Elaboracion/calidad1.jpg";
import img1 from "../../images/Elaboracion/Elaboracion2.jpg";
import img2 from "../../images/Elaboracion/calidad2.png";

import "../../components/historia/Historia.css";
import SectionPH from "../historia/SectionPH";

export const NuestrosProductos = () => {
  const images = [img, img1, img2,];
  const imageChangeInterval = 3000;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, imageChangeInterval);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  const currentImage = images[currentIndex];

  const title = "Nuestros Productos";
  const text = `Son elaborados con un proceso supervisado desde la preparación del
    material, hasta los últimos acabados, contamos con la posibilidad de
    ajustar tú producto acorde a las medidas solicitadas en tus proyectos.`;

  return (
   
    <SectionPH
      title={title}
      image={currentImage}
      text={text}
      clase={"imagen-prod"}
    />

  );
};
