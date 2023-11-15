import React from "react";

const ImagenesEspc = ({ subcategoria, datosProductos }) => {

  if (!datosProductos || !subcategoria || !datosProductos[subcategoria]) {
    return <div>No hay datos disponibles</div>;
  }
  const productos = datosProductos[subcategoria];


  return (
    <div>
      {Object.keys(productos).map((productoId) => {
        const producto = productos[productoId];
        return (
          <div key={productoId}>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
            <p>{producto.descripcion}</p>
            {/* Aquí podrías agregar más elementos visuales relacionados con las especificaciones */}
          </div>
        );
      })}
    </div>
  );
};

export default ImagenesEspc;
