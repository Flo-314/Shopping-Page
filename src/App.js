import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/header";
import Home from "./Components/Home";
import ProductDetail from "./Components/shopComponents/productDetail";
import Shop from "./Components/Shop";
import About from "./Components/About";
import "./index.css";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
