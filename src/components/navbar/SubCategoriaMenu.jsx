import React from "react";
import { Link } from "react-router-dom";
import "./SubCategoriaMenu.css";

const formatSubcategoria = (subcategoria) => {
  return subcategoria.replace(/-/g, ' ');
};
const SubCategoriaMenu = ({ categoria, subcategorias }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Hace que el desplazamiento sea suave
    });
  };

 
  return (
    <ul className="subcategorias">
      {subcategorias.map((subcategoria) => (
        <li key={subcategoria}>
          <Link className="tipo-size" onClick={scrollToTop}  to={`/productos/${encodeURIComponent(categoria)}/${encodeURIComponent(subcategoria)}`}>
            {formatSubcategoria(subcategoria)}
            
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubCategoriaMenu;
