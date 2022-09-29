import React from "react";

import {CartContext} from "./Context/ShopProvider";
import Routing from "./Components/Routes/Index";

function App() {
  return (
    <CartContext>
      <Routing></Routing>
    </CartContext>
  );
}

export default App;
