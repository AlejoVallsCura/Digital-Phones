import React, { useState, useContext } from "react";
import { createContext } from "react";

const Shop = createContext([]);
export const useCartContext = () => useContext(Shop);

export const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    const productoRepetido = isInCart(item.id);

    if (productoRepetido) {
      const cartModified = cart.map((product) => {
        if (product.id === item.id) {
          product.quantity += item.quantity;
          return product;
        }
        return product;
      });
      setCart(cartModified);
    } else {
      const cartModificado = [...cart, item];
      setCart(cartModificado);
    }
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const clearCart = () => setCart([]);

  const totalPrice = () => {
    return cart.reduce((prev, act) => +act.quantity * act.price, 0);
  };

  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  return (
    <Shop.Provider value={{
        cart,
        addItem,
        clearCart,
        isInCart,
        removeItem,
        totalPrice,
        totalProducts
      }}
    >
      {children}
    </Shop.Provider>
  );
};

// const addItem = (item, newQuantity) => {
//   const { quantity = 0} = cart.find(prod => prod.item.id === item.id) || {};
//   const newCart = cart.filter(prod => prod.item.id !== item.id);
//   setCart([...newCart, {...item, quantity: quantity + newQuantity}])
// }
