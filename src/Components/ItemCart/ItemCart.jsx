import React from "react";
import { useCartContext } from "../../Context/ShopProvider";
import "./ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeItem } = useCartContext();

  return (
    <tr>
      <td>
        <img className="imgDetail2" src={product.img} />
      </td>
      <td>
        <p>{product.name}</p>
      </td>
      <td>
        <p>{product.quantity}</p>
      </td>
      <td>
        <p>{product.precio}</p>
      </td>
      <td>
        <button onClick={() => removeItem(product.id)} className="eliminar">Eliminar</button>
      </td>
    </tr>
  );
};

export default ItemCart;
