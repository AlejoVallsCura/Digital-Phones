import React, {useState, useEffect} from "react";
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

    useEffect(()=>{
        console.log("Se monto el ItemCount");   
    }, [])


    return (
        <div className="cantidad">
            <button onClick={handleMin}>-</button>
            <h2>{count}</h2>
            <button onClick={handleAdd}>+</button>
        </div>
    );
};

export default ItemCount;
