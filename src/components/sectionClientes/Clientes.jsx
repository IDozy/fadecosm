import React from "react";
import "./Clientes.css";
import img1 from "../../images/Clientes/CEYCA.png";
import img2 from "../../images/Clientes/CHAQUICOCHA.png";
import img3 from "../../images/Clientes/COVICSA.png";
import img4 from "../../images/Clientes/Deyfor.png";
import img5 from "../../images/Clientes/JINLING.png";
import img6 from "../../images/Clientes/MPC.png";
import img7 from "../../images/Clientes/Ministerio de cultura.png";
import img8 from "../../images/Clientes/TECNOFAST.png";
import img9 from "../../images/Clientes/EIGR.png";
import img10 from "../../images/Clientes/SEDACAJ.png";

export const Clientes = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10
  ];

  return (
    <div className="container-client">
      <h1>Confiaron en nosotros:</h1>
      <div className="slider">
        <div className="slide-track">
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`cliente${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
