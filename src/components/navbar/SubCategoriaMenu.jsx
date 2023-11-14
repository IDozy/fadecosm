import React from "react";
import { Link } from "react-router-dom";
import "./SubCategoriaMenu.css";

const SubCategoriaMenu = ({ categoria, subcategorias }) => {
  return (
    <ul className="subcategorias">
      {subcategorias.map((subcategoria) => (
        <li key={subcategoria}>
          <Link className="tipo-size" to={`/productos/${encodeURIComponent(categoria)}/${encodeURIComponent(subcategoria)}`}>
            {subcategoria}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubCategoriaMenu;
