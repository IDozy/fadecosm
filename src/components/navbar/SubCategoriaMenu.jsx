import React from 'react'
import { Link } from 'react-router-dom';
import "./SubCategoriaMenu.css";

const SubCategoriaMenu = ({ subcategorias }) => {
  return (
    <ul className="subcategorias">
    {subcategorias.map((subcategoria) => (
      <li key={subcategoria}>
        <Link to={`/productos/${subcategoria}`}>{subcategoria}</Link>
      </li>
    ))}
  </ul>
  )
}

export default SubCategoriaMenu