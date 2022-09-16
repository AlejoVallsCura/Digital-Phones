import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css"
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
  const navigate = useNavigate ()
  const handleNavigate = () => {
    navigate(`/detalle/${product.id}`)
  }
  return (
    
    <div className='cartaItem'>
        <div className='datosItem'>

          <img className='imagenesProductos' src={product.img} alt="" />
          <h3>{product.name}</h3>
          <h3>{product.precio}</h3>
          <button onClick={handleNavigate} className='verMas'>VER MAS</button>
          <ItemCount/>
        </div>
    </div>
  )
}

export default Item