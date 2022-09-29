import React from "react";
import Cart from "../../Components/Cart/Cart";
import "./Cart.css"


const CartContainer = () => {
  return (
    <div className="ItemCart">
      <table>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Subtotal</th>
          <th>Eliminar</th>
        </tr>
          <Cart></Cart>
      </table>
    </div>
  );
};

export default CartContainer;
