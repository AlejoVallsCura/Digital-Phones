import React from "react";
import { useCartContext } from "../../Context/ShopProvider";
import {Link} from 'react-router-dom';
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css"

const Cart = () => {
  const { cart } = useCartContext();

  return ( (cart.length === 0) ? (<>
    <p>No hay elementos en el carrito!</p>
    <Link to="/Tienda"> <button>  Tienda </button></Link>

    
  </>) : ( cart.map(product => <ItemCart cla key={product.id} product={product} />)))
}

export default Cart;
