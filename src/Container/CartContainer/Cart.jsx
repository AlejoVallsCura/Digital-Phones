import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../Context/ShopProvider";
import ordenGenerada from "../../Services/generarOrden";
import Carro from "../../Components/Cart/Cart";
import "./Cart.css";

import Swal from "sweetalert2";

import { collection, addDoc } from "firebase/firestore";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";

const Cart = () => {
  const { cart, clearCart, totalPrice } = useCartContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBuy = () => {
    setLoading(true);
    const total = totalPrice;

    Swal.fire({
      title: "Termina tu compra!",
      html: ` 
        <input type="text" id="login" class="swal2-input" placeholder="Nombre">
        <input type="tel" id="tel" class="swal2-input" placeholder="Telefono">
        <input type="email" id="email" class="swal2-input" placeholder="Email">
        `,
      confirmButtonText: 'Enviar',
      focusConfirm: false,
      preConfirm: () => {
        const login = Swal.getPopup().querySelector('#login').value;
        const email = Swal.getPopup().querySelector('#email').value; 
        const tel = Swal.getPopup().querySelector('#tel').value;
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$/;
        const regexEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/; 
        const regexTel = /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/;
        if (!login || !email || !tel) Swal.showValidationMessage(`Completa todos los casilleros`);
        if (!regexName.test(login)) Swal.showValidationMessage(`Ingrese un nombre valido`);
        if (!regexEmail.test(email)) Swal.showValidationMessage(`Ingrese un email valido`);
        if (!regexTel.test(tel)) Swal.showValidationMessage(`Ingrese un telefono valido`);
          
       
        return { login: login, email: email, tel: tel}
      },
    }).then((result) => {
      const order = ordenGenerada(
        result.value.login,
        result.value.email,
        result.value.tel,
        cart
      );

      const docRef = addDoc(collection(db, "orders"), order);
      
      cart.forEach(async (productOnCart) => {
        const productRef = doc(db, "products", productOnCart.id);
        const productSnap = await getDoc(productRef);
        await updateDoc(productRef, {
          stock: productSnap.data().stock - productOnCart.quantity,
        });
        console.log(docRef);
      });
      setLoading(false);
      clearCart()
      Swal.fire(`
        Nombre: ${result.value.login}
        Email: ${result.value.email}
        Telefono: ${result.value.tel}
      `.trim())
      navigate("/");
    }).catch(e => {
      Swal.fire('Error', e)
      setLoading(false);
    })
    
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
              <tbody>
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Eliminar</th>
              </tr>
              <Carro/>
              </tbody>
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
