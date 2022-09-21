import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const addCart = (quantity) => {
    setQty(quantity);
  };

  const handleFinish = () => {
      navigate("/cart");
  };

  console.log(qty);

  return (
    <div>
      <div className="divDetail">
        <h1 className="h1Detail">{product.name}</h1>
        <img className="imgDetail" src={product.img} />
        <p className="pDetail">{product.description}</p>
        {qty ? (
          <button onClick={handleFinish}>Finalizar compra</button>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={addCart} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
