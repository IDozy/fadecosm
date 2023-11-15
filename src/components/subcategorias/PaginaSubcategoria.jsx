import React from "react";
import { useParams } from "react-router-dom";
import ImagenesEspc from "../especificaciones/ImagenesEspc";
import TablaEspec from "../especificaciones/TablaEspec";
import datosProductos from "../especificaciones/datosProductos";

const PaginaSubcategoria = () => {
  const { categoria, subcategoria } = useParams();

  
  const datosSubcategoria = datosProductos[categoria]?.[subcategoria];
  if (!datosSubcategoria) {
    // Manejar el caso donde no se encuentran datos para la subcategoría
    return <div>No se encontraron datos para la subcategoría</div>;
  }


  return (
    <div>
      <h2>{`Detalles de la subcategoría: ${subcategoria}`}</h2>
      {/* Utiliza el componente ImagenEspecificaciones */}
      <ImagenesEspc datosProductos={datosSubcategoria} />

      {/* Utiliza el componente TablaEspecificaciones */}
      <TablaEspec datosProductos={datosSubcategoria.especificaciones} />
    </div>
  );
};

export default PaginaSubcategoria;
