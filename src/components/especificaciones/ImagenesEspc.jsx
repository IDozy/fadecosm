import React from "react";
import TablaEspec from "./TablaEspec";


const ImagenesEspc = ({ datosProductos }) => {

  if (!datosProductos) {
    return <div>No hay datos de especificacionesdisponibles</div>;
  }
  
  return (
    <div>
    {Object.keys(datosProductos).map((productoId) => {
      const producto = datosProductos[productoId];
      console.log("Datos del producto:", producto);
      return (
        <div key={productoId}>
          <h3>{producto.nombre}</h3>
          <img src={producto.imagen} alt={`Imagen de ${producto.nombre}`} />
          <p>{producto.descripcion}</p>

          {/* Pasa las especificaciones al componente TablaEspec */}
          <TablaEspec datosProductos={producto.especificaciones} />
        </div>
      );
    })}
  </div>
  );
};

export default ImagenesEspc;
