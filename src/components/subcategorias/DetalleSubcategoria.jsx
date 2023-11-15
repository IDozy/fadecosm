import React from 'react'
import { useParams } from 'react-router-dom';






const DetalleSubcategoria = () => {
    const { subcategoria } = useParams();

    // Mapea la subcategoría a la imagen correspondiente
    const imagenesPorSubcategoria = {
      subcategoria1: img,
      subcategoria2: img1,
      // Añade más subcategorías según sea necesario
    };
  
    // Verifica si la subcategoría está definida antes de usarla
    if (!subcategoria || !imagenesPorSubcategoria[subcategoria]) {
      return <div>Subcategoría no válida</div>;
    }
  
    // Obtén la ruta de la imagen para la subcategoría actual
    const imagenUrl = imagenesPorSubcategoria[subcategoria];
    
  return (
    <div>
      <h2>{`Detalles de la subcategoría: ${subcategoria}`}</h2>
      <img src={imagenUrl} alt={`Imagen de ${subcategoria}`} />
      {/* Agrega aquí la tabla de especificaciones u otros detalles */}
    </div>
  )
}

export default DetalleSubcategoria