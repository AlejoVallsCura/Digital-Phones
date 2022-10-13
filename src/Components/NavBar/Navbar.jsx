import "./NavBar.css"
import React from 'react'
import logo from "../../Images/LogoDigital.png"
import {FaShoppingCart} from "react-icons/fa"
import {Link} from 'react-router-dom';


const NavBar = () => {
  return (
    <header className="contenedor">
        <div className="contenedorNav">
          <div className="contenedorPeque">
        <Link to="/" > <img className="logo" src={logo} alt="logo" /> </Link>
        <nav>
            <ul className="nav__links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Tienda">Tienda</Link>
                </li>
                <li>
                  <Link to="/cart"><FaShoppingCart/></Link>
                </li>
                <li>
                  <a className="cta" href="#"><button className="BotonContacto"> Contactame!</button> </a>
                </li>
            </ul>
        </nav>
        </div>
        </div>
    </header>
  )
}

export default NavBar


