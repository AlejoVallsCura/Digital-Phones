import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar/Navbar";
import PagPrincipal from "./Components/PagPrincipal";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Container/CartContainer/Cart";
import {CartContext} from "./Context/ShopProvider"


function App() {
  return (
    <CartContext>
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<PagPrincipal />} />
            <Route path="/Tienda" element={<ItemListContainer />} />
            <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </CartContext>
  );
}

export default App;
