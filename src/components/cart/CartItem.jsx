import React, { useState, useContext } from "react";
import { ShopContext } from "/src/components/context/shopContext.jsx";


const CartItem = ({ data }) => {
  const { id, productName, productImage, price } = data
  const { addToCart, cartItems, removeFromCart, updateChanges } = useContext(ShopContext)


  return (
    <>
      <div className="cartItem">

        <img src={productImage} />
        <div className="description">
          <p><b>{productName}</b></p>
          <p>₹ {price}</p>
        </div>

        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input maxLength="2" type="number" min="1" value={cartItems[id]} onChange={(e) => updateChanges(Number(e.target.value), id)} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </>
  )
};

export default CartItem;