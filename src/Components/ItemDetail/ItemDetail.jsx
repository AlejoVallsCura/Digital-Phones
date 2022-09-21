import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import "./ItemDetail.css";
import { Shop } from "../../Context/ShopProvider";

const ItemDetail = ({ product }) => {
  const [qty, setQty] = useState(0);
  const navigate = useNavigate();

  const {addItem} = useContext(Shop);

  const addCart = (quantity) => {
    setQty(quantity);
  };

  const handleFinish = () => {
    const productToSave = {...product, quantity:qty}
    addItem(productToSave)
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
          <ItemCount stock={product.stock} initial={0} onAdd={addCart} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
