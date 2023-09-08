import React, {useState} from 'react'
import "./navbar.css"

const Navbar = () => {
    const [active, setActive]=useState('nav__menu');
    const [toggleIcon, setToggleIcon] =useState('nav__toggler');

    const navToggle = () =>{
        active === 'nav__menu'? setActive ('nav__menu nav__active'): setActive('nav__menu');
        toggleIcon === 'nav__toggler'? setToggleIcon('nav__toggler toggle'): setToggleIcon('nav__toggler')
    }
    return (
        <div>
            <nav className="nav">
                <a href="/" className="nav__brand">Fadeco SM</a>
                <ul className={active}>
                    <li className="nav__item"><a href="/inicio" className="nav__link">Inicio</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Nosotros</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Productos</a></li>
                    <li className="nav__item"><a href="/contacto" className="nav__link">Contacto</a></li>
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
