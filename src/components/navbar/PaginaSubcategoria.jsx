import React from "react";
import { useParams } from "react-router-dom";
import DetalleSubcategoria from "./DetalleSubcategoria";

const PaginaSubcategoria = () => {
  const { categoria } = useParams();
  const { subcategoria } = useParams();

  return (
    <div>
      <h2>{`Detalles de la subcategoría: ${subcategoria}`}</h2>
      <DetalleSubcategoria categoria={categoria} subcategoria={subcategoria} />
      
    </div>
  );
};

export default PaginaSubcategoria;
