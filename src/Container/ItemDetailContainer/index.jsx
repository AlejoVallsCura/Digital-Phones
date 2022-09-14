import React, { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})

    const {productId} = useParams();
    console.log(productId);
    
    useEffect(()=> {
        const getProducts = async () => {
            try {
                const response = await fetch(`/mocks/productos.json/${productId}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [productId])

    console.log(productDetail);

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
