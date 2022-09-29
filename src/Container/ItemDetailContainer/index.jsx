import React, { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Firebase/config"

const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({});

  const { productId } = useParams();
  console.log(productId);

  useEffect(()=> {
    const getProducts = async () => {
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProductDetail({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }

    }
    getProducts();
  }, [productId])
 

  return (
    <>
      {Object.keys(productDetail).length === 0 ? (
        <h2> Loading Prodcuts... </h2>
      ) : (
        <ItemDetail product={productDetail} />
      )}
    </>
  );
};

export default ItemDetailContainer;




// useEffect(()=> {
//     (async () => {
//         try {
//             const response = await fetch("/mocks/productos.json");
//             const data = await response.json();
//             const result = data.find(product => product.id === productId);
//             setProductDetail(result);

//         } catch (error) {
//             console.log(error);
//         }
//     }) ()
// }, [productId])



// useEffect(() => {
//     (async () => {
//       try {
//         const docRef = doc(db, "products", productId);
//         const docSnap = await getDoc(docRef);

//         if (docSnap.exists()) {
//           setProductDetail({ id: docSnap.id, ...docSnap.data() });
//         } else {
//           console.log("No such document!");
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, [productId]);



//   useEffect(() => {
//     const querydb = getFirestore();
//     const queryDoc = doc(querydb, "productos", "t0HKMuHvHwvv4XUMZppw");
//     getDoc(queryDoc).then((res) =>
//       setProductDetail({ id: res.id, ...res.data() })
//     );
//   }, []);