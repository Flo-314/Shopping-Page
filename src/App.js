import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/header";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Shop from "./Components/Shop";
import About from "./Components/About";


const App = () => {
  return (
    <BrowserRouter>
            <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;