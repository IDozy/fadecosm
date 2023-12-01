import React from "react";

const CarouselInfo = ({ titulo1, titulo2 }) => {
  return (
    <>
      <div className="image-overlay"></div>
      <div className="text-slide">
        <div className="text-slide__info">
          <p>{titulo1}</p>
          <p>{titulo2}</p>
        </div>
        <div className="text-slide__buttons">
          <button className="button-slide ">
            <a className="" href="/contacto">
              Cotizar ahora
            </a>
          </button>
          <button className="button-slide">
            <a href="/nosotros">Conócenos</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselInfo;
