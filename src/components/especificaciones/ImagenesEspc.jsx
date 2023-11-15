import React from 'react'

const ImagenesEspc = ({datosProductos}) => {
  if (!datosProductos) {
    return null;
  }

  const { nombre, imagen, descripcion } = datosProductos;

  return (
   <div>
      <h3>{nombre}</h3>
      <img src={imagen} alt={`Imagen de ${nombre}`} />
      <p>{descripcion}</p>
      {/* Aquí podrías agregar más elementos visuales relacionados con las especificaciones */}
    </div>
  )
}

export default ImagenesEspc