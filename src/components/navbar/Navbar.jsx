import React, { useState } from 'react'
import "./navbar.css"
import img from "../../images/FadecoLogosinbg.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [active, setActive] = useState('nav__menu');
    const [toggleIcon, setToggleIcon] = useState('nav__toggler');

    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle') : setToggleIcon('nav__toggler')
    }


    return (
        <div data-aos="fade-rigth"  data-aos-duration="3000" >
            <nav  className="nav">
                <a href="/" className="nav__brand">
                    <img className='logo-nav' src={img} alt='Logo de fadeco'/>         
                </a>
                <ul className={active}>
                    <li className="nav__item"><Link to="/inicio" className="nav__link">Inicio</Link></li>
                    <li className="nav__item"><Link to="/acercade" className="nav__link">Nosotros</Link></li>
                    <li className="nav__item"><Link to="/productos" className="nav__link">Productos</Link></li>
                    <li className="nav__item"><Link to="/contacto" className="nav__link">Contacto</Link></li>
                </ul>
                <div onClick={navToggle} className={toggleIcon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
