import React, { useContext } from "react";
import "./cart.css"
import { PRODUCTS } from "/src/components/ProductList.js";
import { ShopContext } from "/src/components/context/shopContext.jsx";
import CartItem from "/src/components/cart/CartItem.jsx";

const Cart = () => {
  const { cartItems } = useContext(ShopContext)
  return (
    <>
      <div className="cart">
        <div className="heading">
          <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
          {
            PRODUCTS && PRODUCTS.map((elem) => {
              if (cartItems[elem.id] !== 0) {
                return <CartItem key={elem.id} data={elem} />
              }

            })
          }
        </div>
      </div>
    </>
  )
};
export default Cart;