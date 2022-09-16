import React, { useEffect, useState } from 'react';
import './index.css';
import ItemList from '../../Components/ItemList/ItemList';
import {useParams} from 'react-router-dom';

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);

  const {categoryId} = useParams();

  useEffect(()=> {

      (async () => {
        try {
            const response = await fetch(`/mocks/productos.json`);
            const data = await response.json();
            setProductos(data);
        } catch (error) {
            console.log(error);
        }
    }) ()
    }, [categoryId])

  return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;