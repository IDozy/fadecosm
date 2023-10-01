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

export const Clientes = () => {
  return (
    <div>
        <h1 className="tiulo-clientes">Trabajamos con: </h1>
      <section className="client-logos">
        <div className="client-logos-container">
          <img className="client-logo" src={img1} alt="Cliente 1" />
          <img className="client-logo" src={img2} alt="Cliente 2" />
          <img className="client-logo" src={img3} alt="Cliente 3" />
          <img className="client-logo" src={img4} alt="Cliente 4" />
        </div>
      </section>
      <section className="client-logos">
        <div className="client-logos-container">
          <img className="client-logo" src={img5} alt="Cliente 1" />
          <img className="client-logo" src={img6} alt="Cliente 2" />
          <img className="client-logo" src={img7} alt="Cliente 3" />
          <img className="client-logo" src={img8} alt="Cliente 4" />
        </div>
      </section>
      
    </div>
  );
};
