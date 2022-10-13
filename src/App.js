import React from "react";

import {CartContext} from "./Context/ShopProvider";
import Routing from "./Components/Routes/Index";
import { useEffect } from 'react'
import algoritmoGuardadoAutomático from './Services/guardarProductos'

function App() {

  
  useEffect(()=> {
    // algoritmoGuardadoAutomático();
    // console.log("Se debería ejecutar una sola vez");
  }, []) 

  
  return (
    <CartContext>
      <Routing></Routing>
    </CartContext>
  );
}

export default App;
