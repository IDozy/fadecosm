import React from "react";
import "./Historia.css";

// Componente reutilizable para mostrar la historia o productos
const SectionPH = ({ title, image, text, clase }) => {
  const shouldAddAosClass = clase;

  return (
    <div className="nuestra-historia-card">
      <div
        className={shouldAddAosClass ? "" : "nuestra-historia-image"}
        data-aos={shouldAddAosClass ? "fade-right" : undefined}
        data-aos-duration="3000"
      >
        {clase ? (
          <div className="contenedor-imagen">
            <div className="rotated-container" >
              <img src={image} alt={`Imagen de ${title}`} height={"300px"} />
            </div>
          </div>
        ) : (
          <img src={image} alt={`Imagen de ${title}`} />
        )}
      </div>
      <div className="nuestra-historia-text">
        <div
          className="card-1"
          style={{ margin: "0 5px", paddingRight: "7%", height: "auto" }}
        >
          <h2 className="text-title">{title}</h2>
          <h4
            className="text-info"
            style={{ marginBottom: ".5rem", paddingLeft: "1rem" }}
          >
            Fadedo SM
          </h4>
          <p>{text}</p>
          {clase ? (
            <div className="text-slide__buttons" style={{ marginTop: "2rem" }}>
              <button className="button-slide">
                <a href="/productos">Mas Productos</a>
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SectionPH;
