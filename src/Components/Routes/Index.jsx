import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "../NavBar/Navbar";
import PagPrincipal from "../PagPrincipal";
import ItemListContainer from "../../Container/ItemListContainer";
import ItemDetailContainer from "../../Container/ItemDetailContainer";
import NotFound from "../NotFound/NotFound";
import CartContainer from '../../Container/CartContainer/Cart';

const Routing = () => {
  return (
    <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<PagPrincipal />} />
            <Route path="/Tienda" element={<ItemListContainer />} />
            <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  )
}

export default Routing