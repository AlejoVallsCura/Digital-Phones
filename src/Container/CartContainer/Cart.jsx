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

import React, { useContext, useState } from "react";
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


    const handleBuy = async () => {
        setLoading(true)
        const importeTotal = totalPrice();
        const orden = ordenGenerada(
            "Sebastián",
            "sebas@live.com",
            11111111111,
            cart,
            importeTotal
        );
        console.log(orden);

        const docRef = await addDoc(collection(db, "orders"), orden);

        //Actualizamos el stock del producto
        cart.forEach(async (productoEnCarrito) => {
            //Primero accedemos a la referencia del producto
            const productRef = doc(db, "products", productoEnCarrito.id);
            //Llamamos al snapshot, llamando a firebase
            const productSnap = await getDoc(productRef);
            //En snapshot.data() nos devuelve la información del documento a actualizar
            await updateDoc(productRef, {
                stock: productSnap.data().stock - productoEnCarrito.quantity,
            });
        });
        setLoading(false);
        alert(
            `Gracias por su compra! Se generó la orden generada con ID: ${docRef.id}`
        );
    };


    return (
        <div style={{ height: 400, width: "100%" }}>
            
            <button onClick={clearCart} color="error" variant="outlined">
                Clear cart
            </button>
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
                >
                </div>
            ) : ( <> 
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
                      <Carro/>
                    </table>
                  </div>
                <button onClick={handleBuy}>Confirmar compra</button>
                </>
            )}
        </div>
    );
};

export default Cart;
