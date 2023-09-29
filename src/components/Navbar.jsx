import React from "react";
import {Link} from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="links">
        <Link to="/shop">shop</Link>
        <Link to="/contact">contact</Link>
        <Link to="/cart">cart</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar;