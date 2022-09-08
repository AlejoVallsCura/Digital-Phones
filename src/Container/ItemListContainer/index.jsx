import React, { useEffect, useState } from 'react';
import './index.css';
import ItemList from '../../Components/ItemList/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    
    (async ()=> {
    
        try {
          const response = await fetch("../../data/productos.json");
          const productos = await response.json();
          setProductos(productos);
        } catch (error) {
          console.log(error);
        }

      })()

  }, [])

  return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;