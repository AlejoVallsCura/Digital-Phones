import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import "./ItemDetail.css";

const ItemDetail = ({product}) => {
  return (
    <div>
      <div className='divDetail'>
        <h1 className='h1Detail'>{product[0].name}</h1>
        <img className='imgDetail' src={product[0].img}/>
        <p className='pDetail'>{product[0].description}</p>
        <ItemCount/>
      </div>
    </div>
  )
}

export default ItemDetail