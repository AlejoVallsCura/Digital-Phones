import React, { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();

    useEffect(()=> {
        (async () => {
            try {
                const response = await fetch("/mocks/productos.json");
                const data = await response.json();
                const result = data.find(product => product.id === productId);
                setProductDetail(result);

            } catch (error) {
                console.log(error);
            }
        }) ()
    }, [productId])

    return (
        <>
        {Object.keys(productDetail).length === 0 ? (
            <h2> Loading Prodcuts... </h2>
        ):(
        <ItemDetail product={productDetail} />
        )}
        </>
    );
};


export default ItemDetailContainer;
