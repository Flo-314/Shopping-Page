import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav"
import Header from "./Components/header";
import Home from "./Components/Home";
import ProductDetail from "./Components/shopComponents/productDetail";
import Shop from "./Components/shopComponents/Shop";
import About from "./Components/About";
import Checkout from "./Components/shopComponents/checkout/checkout";
import Footer from "./Components/footer";
import "./index.css";
import { useState } from "react";

const App = (props) => {
  const [cart, setCart] = useState([]);

  const findProductIndex = (product) => {
    const productIndex = cart.findIndex((e) => e.id === product.id);
    return productIndex;
  };
  const createNewProduct = (product) => {
    product.quantity = 1;
    setCart((cart) => [...cart, product]);
  };
  const deleteProduct = (product) => {
    setCart(cart.filter((Cartproduct) => Cartproduct.id !== product.id));
  };

  const addProduct = (product) => {
    const productIndex = findProductIndex(product);
    let newCart = [...cart];
    newCart[productIndex].quantity += 1;

    setCart(newCart);
  };
  const substractProduct = (product) => {
    const productIndex = findProductIndex(product);
    let newCart = [...cart];
    newCart[productIndex].quantity -= 1;
    setCart(newCart);
  };

  const ProductHandler = (product) => {
    if (findProductIndex(product) === -1) {
      createNewProduct(product);
    } else {
      addProduct(product);
    }
  };

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop ProductHandler={ProductHandler} />}
        />
        <Route
          path="/shop/:id"
          element={<ProductDetail ProductHandler={ProductHandler} />}
        />
        <Route
          path="/shop/checkout"
          element={
            <Checkout
              cart={cart}
              substractProduct={substractProduct}
              addProduct={addProduct}
              deleteProduct={deleteProduct}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
