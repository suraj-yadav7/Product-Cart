import React, { useContext } from "react";
import { ShopContext } from "/src/components/context/shopContext.jsx";


const Product = ({ data }) => {
  const { id, productImage, productName, price } = data
  const { addToCart } = useContext(ShopContext)

  return (
    <div className="product" >
      <img src={productImage} alt="product-img" />
      <div className="description">
        <p><b>{productName}</b></p>
        <p>₹ {price}</p>
        <button className="addToCartBttn" onClick={() => addToCart(id)} >Add to cart</button>
      </div>
    </div >
  )
};
export default Product;