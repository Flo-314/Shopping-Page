import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Home from "./Components/Home";
import ProductDetail from "./Components/shopComponents/productDetail";
import Shop from "./Components/shopComponents/Shop";
import About from "./Components/About";
import Checkout from "./Components/shopComponents/checkout/checkout" 
import Footer from "./Components/footer";
import "./index.css";
import { useState } from "react";

const App = (props) => {
  const [cart, setCart] = useState([])
 
  const addProductHandler = (product) => {
    const productIndex = cart.findIndex((e => e.id === product.id))
    if(productIndex === -1){
      product.quantity = 1
      setCart((cart) => [...cart, product]);
    }
else{
  let newCart = cart
  newCart[productIndex].quantity += 1
  setCart(newCart);

} 
    console.log(cart)
  }

  return (
    <BrowserRouter>
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addProductHandler={addProductHandler} />} />
        <Route path="/shop/:id" element={<ProductDetail addProductHandler={addProductHandler} />} />
        <Route path="/shop/checkout" element={<Checkout cart={cart} />} /> 
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
