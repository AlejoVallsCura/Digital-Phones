import "./NavBar.css"
import React from 'react'
import logo from "../../Images/LogoDigital.png"

const NavBar = () => {
  return (
    <header className="contenedor">
        <div className="contenedorNav">
        <img className="logo" src={logo} alt="logo" />
        <nav>
            <ul className="nav__links">
                <li><a href="#">Servicio</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Nosotros</a></li>
            </ul>
        </nav>
        <a className="cta" href="#"><button className="BotonContacto"> Contactame!</button> </a>
        </div>
    </header>
  )
}

export default NavBar


