import Navbar from './Components/NavBar/Navbar';
import PagPrincipal from './Components/PagPrincipal';
import ItemListContainer from './Container/ItemListContainer'
import ItemDetailContainer from './Container/ItemDetailContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />      
      <Routes>
        
        <Route path="/Tienda" element={<ItemListContainer/>}/>
        <Route path="/Detalle/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<PagPrincipal/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




