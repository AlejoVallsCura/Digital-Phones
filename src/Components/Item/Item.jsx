import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"

const Item = ({product}) => {
  return (
    
    <div className='cartaItem'>
        <div className='datosItem'>
            <p>imagen del celular</p>
            <h3>{product.description}</h3>
            <h3>{product.precio}</h3>
            <ItemCount/>
        </div>
    </div>
  )
}

export default Item