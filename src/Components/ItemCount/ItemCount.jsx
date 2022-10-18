import React, { useState, useEffect } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    } else {
      alert("No hay suficiente stock disponible");
    }
  };

  const handleDecrement = () => {
    if (count <= 0) return     
    setCount(count - 1);
  };

  const addCart = () => {
    onAdd(count);
    setCount(initial);
  };

  useEffect(() => {
    // console.log("Se creo el ItemCount");
  }, []);

  useEffect(() => {
    // console.log("Se actualiza el estado");
  }, [count]);

  return (
    <div className="count">
      <div className="cantidad">
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
      </div>
      <div className="aniadir">
        <button onClick={addCart} className="addCart">
          <BsFillCartCheckFill />
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
