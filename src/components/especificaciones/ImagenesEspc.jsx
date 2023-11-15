import React from "react";

const ImagenesEspc = ({ datosProductos }) => {

  if (!datosProductos) {
    return <div>No hay datos disponibles</div>;
  }
  

  return (
    <div>
      {Object.keys(datosProductos).map((productoId) => {
        const producto = datosProductos[productoId];
        return (
          <div key={productoId}>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
            <p>{producto.descripcion}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ImagenesEspc;
