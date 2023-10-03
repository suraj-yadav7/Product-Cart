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

  const updateChanges = (noOfItmes, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: noOfItmes }))
  }

  const cartTotal = () => {
    let totalAmount = 0;
    let eachItemTotal = 0
    for (let items in cartItems) {
      if (cartItems[items] > 0) {
        let units = PRODUCTS.find((elem) => elem.id === Number(items));
        eachItemTotal += cartItems[items] * units.price
      }
    }
    totalAmount = totalAmount + eachItemTotal
    return totalAmount;
  }



  const contextValue = { cartItems, addToCart, removeFromCart, updateChanges, cartTotal }

  console.log("the cartItem", cartItems)

  return <ShopContext.Provider value={contextValue}> {children}</ShopContext.Provider >
}