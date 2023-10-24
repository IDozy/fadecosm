import React from "react";
import "./InfoAbout.css";
import img from "../../images/FadecoLogosinbg.png";

export const InfoAbout = () => {
  return (
    <div className="background-container">
      <div className="content">
        <h1 className="content-h1">Somos una Empresa</h1>
        <h2 className="content-h2">Cajamarquina</h2>
      </div>
      <p className="content-p">
        Generando beneficios a nuestra comunidad al producir y distribuir
        productos prefabricados, dando el mejor servicio y asesoramiento
        personalizado para tus proyectos.
      </p>
      <div className="logo-container">
        <figure>
          <img src={img} alt="" className="logo-animation" />
        </figure>
      </div>
    </div>
  );
};
