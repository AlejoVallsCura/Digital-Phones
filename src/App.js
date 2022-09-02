import Navbar from './Components/NavBar/Navbar';
import ItemListContainer from './Container/ItemListContainer'
import ItemCount from './Components/ItemCount/ItemCount'

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Hola, bienvenido"}/>
    <ItemCount/>
    </>
  );
}

export default App;




