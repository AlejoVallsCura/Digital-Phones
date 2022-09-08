import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
  return (
    <div>
        <h1>{product.description}</h1>
        <img src={product.img} alt="product-detail"/>
        <ItemCount/>
    </div>
  )
}

export default ItemDetail