import React, {useState} from "react";

const CartItem = ({ data }) => {
  const { productName, productImage, price } = data
  const [itemVal, setItemVal] = useState(0)

 const handleChange = (e)=>{
   let val = parseInt(e.target.value)
   setItemVal(val)
 }
  console.log("the count", itemVal)
  return (
    <>
      <div className="cartItem">
        <img src={productImage} />
        <div className="description">
          <p><b>{productName}</b></p>
          <p>₹ {price}</p>
        </div>
        <div className="countHandler">
        <button  onClick={()=> setItemVal(itemVal>=1 ? itemVal-1 :0)}>-</button>
        <input maxLength="2" type="number" min="0" value={itemVal} onChange={(e)=> {handleChange(e)}}/>
        <button onClick={()=> setItemVal(itemVal>=0 ? itemVal+1:1)}>+</button>
        </div>
      </div>
    </>
  )
};

export default CartItem;