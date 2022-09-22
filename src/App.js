import Navbar from "./Components/NavBar/Navbar";
import PagPrincipal from "./Components/PagPrincipal";
import ItemListContainer from "./Container/ItemListContainer";
import ItemDetailContainer from "./Container/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Container/CartContainer/Cart";
import ShopProvider from "./Context/ShopProvider";

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Tienda" element={<ItemListContainer />} />
          <Route path="/detalle/:productId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<PagPrincipal />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
