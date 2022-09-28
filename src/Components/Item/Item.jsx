import "./Item.css"
import React, {useContext} from 'react'
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
          
        </div>
    </div>
  )
}

export default Item