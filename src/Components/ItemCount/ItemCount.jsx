import React, {useState} from "react";
import {BsFillCartCheckFill} from "react-icons/bs"
import "./ItemCount.css";

const ItemCount = () => {

    const [count, setCount]= useState(0);

    const handleAdd = () => {
        setCount(count+1)
    }
    const handleMin = () => {
        if (count <= 0 ) return 
        setCount(count-1)
    }


    return (
        <div>
            <div className="cantidad">
            <button onClick={handleMin}>-</button>
            <h2>{count}</h2>
            <button onClick={handleAdd}>+</button>
            </div>
            <button className="addCart"><BsFillCartCheckFill/></button>
        </div>
       
    );
};

export default ItemCount;
