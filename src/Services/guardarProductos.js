import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/config";

const algoritmoGuardadoAutomático = async () => {

    try {
        //Primero obtenemos los productos que queremos guardar
        const response = await fetch('/mocks/productos.json');
        const productosAGuardar = await response.json();
    
        //
        productosAGuardar.forEach(async (producto) => {
            const docRef = await addDoc(collection(db, "products"), {
                name: producto.name,
                precio: producto.precio,
                description: producto.description,
                img: producto.img,
                stock: 20,
            });
            // console.log("Document written with ID: ", docRef.id);
        })
        
    } catch (error) {
        // console.log(error)
    }
}

export default algoritmoGuardadoAutomático;