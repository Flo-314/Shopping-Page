import React, { useState, useEffect } from "react";
import ProductCard from "./productCard";
import uniqid from "uniqid";
const Shop = (props) => {
  const [products, setProducts] = useState([]);
  const fechApi = async () => {
    try {
      const link = "https://fakestoreapi.com/products";
      let data = await fetch(link);
      data = await data.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fechApi();
  }, []);

  return (
    <main id="shop" >
      <div id="product-container">
        {products !== undefined &&
          products.map((product) => {
            return <ProductCard product={product} key={uniqid()} ProductHandler={props.ProductHandler} />;
          })}
      </div>
    </main>
  );
};

export default Shop;
