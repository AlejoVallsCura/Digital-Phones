// import React from "react";
// import Cart from "../../Components/Cart/Cart";
// import {Link} from 'react-router-dom';
// import "./Cart.css";

// const CartContainer = () => {
//   return (
//     <div className="ItemCart">
//       <table>
//         <tr>
//           <th>Imagen</th>
//           <th>Nombre</th>
//           <th>Cantidad</th>
//           <th>Precio</th>
//           <th>Subtotal</th>
//           <th>Eliminar</th>
//         </tr>
//         <Cart />
//       </table>
//     </div>
//   );
// };

// export default CartContainer;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useCartContext } from "../../Context/ShopProvider";
import ordenGenerada from "../../Services/generarOrden";
import Carro from "../../Components/Cart/Cart";
import "./Cart.css";

import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  const handleBuy = async () => {
    setLoading(true);
    const importeTotal = totalPrice();
    clearCart();
    const orden = ordenGenerada(
      "Alejo",
      "alejo@live.com",
      11111111111,
      cart,
      importeTotal
    );
    // console.log(orden);

    const docRef = await addDoc(collection(db, "orders"), orden);

    cart.forEach(async (productoEnCarrito) => {
      const productRef = doc(db, "products", productoEnCarrito.id);
      const productSnap = await getDoc(productRef);
      await updateDoc(productRef, {
        stock: productSnap.data().stock - productoEnCarrito.quantity,
      });
    });
    setLoading(false);
    alert(
      `Gracias por su compra! Se generó la orden generada con ID: ${docRef.id}`
    );
    navigate("/Tienda");
  };




  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        ></div>
      ) : (
        <>
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
              <Carro />
            </table>
          </div>
          <div className="botonesCierre">
            <button onClick={handleBuy}>Confirmar compra</button>
            <button
              onClick={clearCart}
              className="VaciarCarro"
              variant="outlined"
            >
              Vaciar Carrito
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
