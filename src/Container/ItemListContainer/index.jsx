import React, { useEffect, useState } from 'react';
import './index.css';
import ItemList from '../../Components/ItemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();
  console.log(categoryId);

  useEffect(()=> {


  (async () => {
    try {
        if (categoryId){
          const response = await fetch(
            "/mocks/productos.json" + categoryId
        );
        const productos = await response.json();
        setProductos(productos);
        }
        else {
          const response = await fetch(
              "/mocks/productos.json"
          );
          const productos = await response.json();
          setProductos(productos);
        }
    } catch (error) {
        console.log(error);
    }
}) ()
  },[categoryId]);

  return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;