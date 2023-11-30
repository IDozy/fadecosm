import React from "react";

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
              <h3 className="h3-nombre-prod" >{producto.nombre}</h3>
              <img
                src={producto.imagen}
                alt={`Imagen de ${producto.nombre}`}
              />
              <p className="h3-nombre-prod" style={{width:"50%", textAlign:"center", margin:"auto", fontSize:"1.3vw"}}>{producto.descripcion}</p>
            </div>
            {producto.especificaciones && (
              <div className="especificacion__text">
                <img
                  src={producto.especificaciones}
                  alt={`Imagen de ${producto.nombre}`}
                />
              </div>
            )}
            {/* Descomenta la siguiente línea si necesitas renderizar TablaEspec */}
            {/* <TablaEspec datosProductos={producto.especificaciones} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default ImagenesEspc;
