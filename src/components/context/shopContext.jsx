import React, { createContext, useState } from "react";
import { PRODUCTS } from "/src/components/ProductList.js";

export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    //for each key "i",  value is begin assigned using for loop
    cart[i] = 0
  }

  return cart
}

export const ShopContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(getDefaultCart())

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = { cartItems, addToCart, removeFromCart }

  console.log("the cartItem", cartItems)

  return <ShopContext.Provider value={contextValue}> {children}</ShopContext.Provider >
}