import React from "react";
import { useParams } from "react-router-dom";
import ImagenesEspc from "../especificaciones/ImagenesEspc";

import datosProductos from "../especificaciones/datosProductos";

const PaginaSubcategoria = () => {
  const { categoria, subcategoria } = useParams();

  
  const datosSubcategoria = datosProductos[categoria]?.[subcategoria];

  if (!datosSubcategoria) {
    // Manejar el caso donde no se encuentran datos para la subcategoría
    return <div>No se encontraron datos para la subcategoría</div>;
  }

  console.log("Datos subcategoría:", datosSubcategoria);
  return (
    <div>
      <h2 className="text-title title-categoria" >{`Subcategoría: ${subcategoria}`}</h2>
      {/* Utiliza el componente ImagenEspecificaciones */}
      <ImagenesEspc datosProductos={datosSubcategoria} />

      
    </div>
  );
};

export default PaginaSubcategoria;
