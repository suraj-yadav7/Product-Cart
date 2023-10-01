import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "/src/components/Navbar.jsx"
import Shop from "/src/components/shop/Shop.jsx"
import Cart from "/src/components/cart/Cart.jsx"
import Contact from "/src/components/Contact.jsx"
import { ShopContextProvider } from "/src/components/context/shopContext.jsx";
export default function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  )
};
