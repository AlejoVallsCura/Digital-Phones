import React from "react";
import { useCartContext } from "../../Context/ShopProvider";
import {Link} from 'react-router-dom';
import ItemCart from "../ItemCart.jsx/ItemCart";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito!</p>
        <Link to="/Tienda">Tienda</Link>
      </>
    );
  }

  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
    </>
  )
};

export default Cart;
