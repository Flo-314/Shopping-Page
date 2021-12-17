import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Home from "./Components/Home";
import ProductDetail from "./Components/shopComponents/productDetail";
import Shop from "./Components/shopComponents/Shop";
import About from "./Components/About";
import Checkout from "./Components/shopComponents/checkout/checkout" 
import "./index.css";
import { useState } from "react";

const App = (props) => {
  const [cart, setCart] = useState([])
 
  const addProductHandler = (product) => {
    setCart((cart) => [...cart, product]);
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
    </BrowserRouter>
  );
};

export default App;
