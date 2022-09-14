import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
import {Link} from 'react-router-dom';

const Item = ({product}) => {
  return (
    
    <div className='cartaItem'>
        <div className='datosItem'>

          <img className='imagenesProductos' src={product.img} alt="" />
          <h3>{product.name}</h3>
          <h3>{product.precio}</h3>
          <Link to="/Detalle" ><button className='verMas'>VER MAS</button></Link>
          <ItemCount/>
        </div>
    </div>
  )
}

export default Item