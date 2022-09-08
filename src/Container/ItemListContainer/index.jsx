import React, { useEffect, useState } from 'react';
import './index.css';
import { products } from '../../data/productos';
import ItemList from '../../Components/ItemList/ItemList';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([])

  useEffect(()=> {
    (async ()=> {
    const obtenerProductos = new Promise ((accept, reject)=> {
        setTimeout(()=> {
          accept(products)
        }, 1000);
      })
      
        try {
          const productos = await obtenerProductos;
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