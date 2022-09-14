import Navbar from './Components/NavBar/Navbar';
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
    {/* <ItemListContainer/> */}
    
    <BrowserRouter>
      <Navbar />      
      <Routes>
        <Route path="/"/>
        <Route path="/Tienda" element={<ItemListContainer/>}/>
        <Route path="/Detalle" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;




