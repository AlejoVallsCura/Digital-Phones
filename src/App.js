import React from "react";

import {CartContext} from "./Context/ShopProvider";
import Routing from "./Components/Routes/Index";
import { useEffect } from 'react'
import algoritmoGuardadoAutomÃ¡tico from './Services/guardarProductos'

function App() {

  
  useEffect(()=> {
    // algoritmoGuardadoAutomÃ¡tico();
    // console.log("Se deberÃ­a ejecutar una sola vez");
  }, []) 

  
  return (
    <CartContext>
      <Routing></Routing>
    </CartContext>
  );
}

export default App;
