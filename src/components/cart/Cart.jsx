import React, { useContext } from "react";
import "./cart.css"
import { PRODUCTS } from "/src/components/ProductList.js";
import { ShopContext } from "/src/components/context/shopContext.jsx";
import CartItem from "/src/components/cart/CartItem.jsx";

const Cart = () => {
  const { cartItems, cartTotal } = useContext(ShopContext)
  let totalPrice = cartTotal()
  return (

    <>
      {cartItems.length < 0 ? <div><h3>No item in the cart</h3> </div> :
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
          <h3>This is subtotal</h3>
          <div className="checkout">
            <p>Subtotal: $ {totalPrice}</p>
            <button>Continue shopping</button>
            <button>Checkout</button>
          </div>
        </div>}

    </>
  )
};
export default Cart;