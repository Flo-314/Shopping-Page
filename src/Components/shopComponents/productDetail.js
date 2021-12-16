import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
const ProductDetail = ({match}) => {
    const [product, setProduct] = useState([]);
    console.log({match})

  const fechApi = async () => {
    try {
      const link = "https://fakestoreapi.com/products" 
      let data = await fetch(link);
      data = await data.json();
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
    
  };
  useEffect(() => {
    fechApi();
  }, []);
 
  return (
    <main id="ProductDetail" onClick={() => console.log(product)}>
      <div id="Item">
        <div className="image-container"></div>
        <div className="info-container"></div>
      </div>
    </main>
  );
};

export default ProductDetail;
