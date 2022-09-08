import React, { useEffect, useState } from "react";
import ItemDetail from "../../Components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({})
    
    useEffect(()=> {
        const getProducts = async () => {
            try {
                const response = await fetch('../../data/productos.json');
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }
        getProducts();
    }, [])

    console.log(productDetail);

    return <ItemDetail product={productDetail}/>;
};

export default ItemDetailContainer;
