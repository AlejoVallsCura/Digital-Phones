import React, { useEffect, useState } from 'react';
import './index.css';
import ItemList from '../../Components/ItemList/ItemList';
import {useParams} from 'react-router-dom';


import { db } from "../../Firebase/config";
import { collection, query, where, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  console.log(db);

  const [productos, setProductos] = useState([]);

  const { categoryId } = useParams();

  console.log(categoryId);

  useEffect(() => {
      (async () => {
          try {

              const q = categoryId
                  ? query(
                        collection(db, "products"),
                        where("category", "==", categoryId)
                    )
                  : query(collection(db, "products"));

              const querySnapshot = await getDocs(q);
              const productosFirebase = [];
              querySnapshot.forEach((doc) => {
                  productosFirebase.push({ id: doc.id, ...doc.data() });
              });
              console.log(productosFirebase);
              setProductos(productosFirebase);

          } catch (error) {
              console.log(error);
          }
      })();
  }, [categoryId]);


  return (
    <div className='item-list-container'>
        <ItemList products={productos}/>
    </div>
  )
}

export default ItemListContainer;