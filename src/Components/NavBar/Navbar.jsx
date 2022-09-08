import "./NavBar.css"
import React from 'react'
import logo from "../../Images/LogoDigital.png"
import {FaShoppingCart} from "react-icons/fa"


const NavBar = () => {
  return (
    <header className="contenedor">
        <div className="contenedorNav">
          <div className="contenedorPeque">
        <img className="logo" src={logo} alt="logo" />
        <nav>
            <ul className="nav__links">
                
                <li><a href="#">Tienda</a></li>
                {/* <li><a href="#"><FaShoppingCart/></a></li> */}
                <a className="cta" href="#"><button className="BotonContacto"> Contactame!</button> </a>
            </ul>
        </nav>
        </div>
        </div>
    </header>
  )
}

export default NavBar


