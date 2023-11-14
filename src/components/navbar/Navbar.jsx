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

  //CATEGORÍAS DE PRODUCTOS
  const categorias = {
    PrefabricadosDeConcreto: [
      "Aguapotable",
      "Alcantarillado",
      "Cercosperimétricos",
      "Pistasycarreteras",
      "Jardineríaparaedificaciones",
      "Electrificación",
    ],
    Termoplasticos: ["Aguapotable", "Saneamiento"],
    FierroFundido: ["Saneamiento"],
  };
  

  
  return (
    <div data-aos="fade-right" data-aos-duration="3000">
      <nav className="nav">
        <Link to="/" className="nav__brand">
          <img className="logo-nav" src={img} alt="Logo de fadeco" />
        </Link>
        <ul className={active}>
          <li className="nav__item">
            <Link to="/inicio" className="nav__link" onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/acercade" className="nav__link" onClick={closeMenu}>
              Nosotros
            </Link>
          </li>
          <li className="nav__item">
            <div
              className="dropdown"
              onMouseEnter={() =>
                setShowSubMenu((prev) => ({ ...prev, Productos: true }))
              }
              onMouseLeave={() =>
                setShowSubMenu((prev) => ({ ...prev, Productos: false }))
              }
            >
              <span>Productos</span>
              {showSubMenu.Productos && (
                <div className="dropdown-content">
                  {/* Bloque de código para categorías y subcategorías */}
                  {Object.entries(categorias).map(
                    ([tipo, subcategorias]) => (
                      <div key={tipo} className="categoria">
                        <span onMouseEnter={() => toggleSubMenu(tipo)}>
                          {tipo}
                        </span>
                        {showSubMenu[tipo] && (
                          <SubcategoriaMenu categoria={encodeURIComponent(tipo)} subcategorias={subcategorias} />
                        )}
                      </div>
                    )
                  )}
                  {/* Fin del bloque de código de categorías y subcategorías */}
                </div>
              )}
            </div>
          </li>
          <li className="nav__item">
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
