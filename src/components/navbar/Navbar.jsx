import React, { useState } from "react";
import "./navbar.css";
import img from "../../images/FadecoLogosinbg.png";
import { Link } from "react-router-dom";
import SubcategoriaMenu from "./SubCategoriaMenu";

const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const [showSubMenu, setShowSubMenu] = useState({});

  const navToggle = () => {
    setActive(active === "nav__menu" ? "nav__menu nav__active" : "nav__menu");
    setToggleIcon(
      toggleIcon === "nav__toggler" ? "nav__toggler toggle" : "nav__toggler"
    );
  };

  const closeMenu = () => {
    setActive("nav__menu");
    setToggleIcon("nav__toggler");
  };

  const toggleSubMenu = (tipo) => {
    setShowSubMenu((prev) => ({
      ...prev,
      [tipo]: !prev[tipo],
    }));
  };

  // CATEGORÍAS DE PRODUCTOS
  const categorias = {
    "Prefabricados-De-Concreto": [
      "Aguapotable",
      "Alcantarillado",
      "Cercosperimétricos",
      "Pistas-y-carreteras",
      "Jardinería-para-edificaciones",
      "Electrificación",
      "Separadores",
    ],
    "Termoplásticos": ["Aguapotable", "Saneamiento"],
    "Fierro-Fundido": ["Saneamiento"],
  };

  //FUNCION PARA EL TEXTO EN CATEGORÍAS
  const formatCategoria = (categoria) => {
    const palabras = categoria.split('-').filter(Boolean).map(word => word.trim());
    return palabras.map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
  };
  //FUNCION PARA EL TEXTO EN SUBCATEGORÍAS


  return (
    <div data-aos="fade-right" data-aos-duration="3000">
      <nav className="nav">
        <Link to="/" className="nav__brand">
          <img className="logo-nav" src={img} alt="Logo de fadeco" />
        </Link>
        <ul className={active}>
          <li className="nav__item nav__letter">
            <Link to="/inicio" className="nav__link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav__item nav__letter">
            <Link to="/acercade" className="nav__link" onClick={closeMenu}>
              Nosotros
            </Link>
          </li>
          <li className="nav__item nav__letter">
            <div
              className="dropdown nav__link"
              onMouseEnter={() =>
                setShowSubMenu((prev) => ({ ...prev, Productos: true }))
              }
              onMouseLeave={() =>
                setShowSubMenu((prev) => ({ ...prev, Productos: false }))
              }
            >
              <Link>Productos</Link>
              {showSubMenu.Productos && (
                <div className="dropdown-content">
                  {Object.entries(categorias).map(
                    ([tipo, subcategorias]) => (
                      <div
                        key={tipo}
                        className="categoria"
                        onMouseEnter={() => toggleSubMenu(tipo)}
                        onMouseLeave={() => toggleSubMenu(tipo)}
                      >
                        <Link className="tipo-size" style={{margin:"0"}} to={`/productos/${encodeURIComponent(tipo)}`}>{formatCategoria(tipo)}</Link>
                        {showSubMenu[tipo] && (
                          <SubcategoriaMenu
                            categoria={tipo}
                            subcategorias={subcategorias}
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </li>
          <li className="nav__item nav__letter">
            <Link to="/contacto" className="nav__link" onClick={closeMenu}>
              Contacto
            </Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
