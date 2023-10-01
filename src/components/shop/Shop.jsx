import React, {useContext} from "react";
import "./shop.css";
import { PRODUCTS } from "/src/components/ProductList.js";
import Product from "/src/components/shop/Product.jsx"

const Shop = () => {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>Techy Products</h1>
        </div>
        <div className="products">
          {PRODUCTS && PRODUCTS.map((elem) => <Product key={elem.id} data={elem} />
          )}
        </div>
      </div>
    </>
  )
};

export default Shop;