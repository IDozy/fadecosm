import React from "react";
import "./InfoAbout.css";
import img from "../../images/FadecoLogosinbg.png";

export const InfoAbout = () => {
  return (
    <div className="background-container">
      <div className="content">
        <h1 className="content-h1">Empresa Cajamarquina</h1>
      </div>
      <p className="content-p">
        Que busca generar un gran beneficio a nuestra provincia al producir y distribuir
        variedad de productos de calidad, brindando el mejor servicio y asesoramiento
        personalizado para todos tus proyectos.
      </p>
      <div className="logo-container">
        <figure>
          <img src={img} alt="" className="logo-animation" />
        </figure>
      </div>
    </div>
  );
};

