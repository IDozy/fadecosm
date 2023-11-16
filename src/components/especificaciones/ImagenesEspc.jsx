import React from "react";
import TablaEspec from "./TablaEspec";
import "./Especificaciones.css";

const ImagenesEspc = ({ datosProductos }) => {
  if (!datosProductos) {
    return <div>No hay datos de especificaciones disponibles</div>;
  }

  return (
    <div>
      {Object.keys(datosProductos).map((productoId) => {
        const producto = datosProductos[productoId];
        console.log("Datos del producto:", producto);
        return (
          <div className="especificacion__card" key={productoId}>
            <div className="especificacion__image">
              <h3>{producto.nombre}</h3>
              <img
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
              />
              <p>{producto.descripcion}</p>
            </div>
            <div className="especificacion__text">
              <img
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
              />
            </div>
            {/* Descomenta la siguiente línea si necesitas renderizar TablaEspec */}
            {/* <TablaEspec datosProductos={producto.especificaciones} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default ImagenesEspc;
