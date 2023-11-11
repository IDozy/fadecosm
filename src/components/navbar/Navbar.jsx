import React, { useState } from 'react';
import './navbar.css';
import img from '../../images/FadecoLogosinbg.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState('nav__menu');
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const navToggle = () => {
    setActive(active === 'nav__menu' ? 'nav__menu nav__active' : 'nav__menu');
    setToggleIcon(toggleIcon === 'nav__toggler' ? 'nav__toggler toggle' : 'nav__toggler');
  };

  const closeMenu = () => {
    setActive('nav__menu');
    setToggleIcon('nav__toggler');
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
            <Link to="/productos" className="nav__link" onClick={closeMenu}>
              Productos
            </Link>
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
