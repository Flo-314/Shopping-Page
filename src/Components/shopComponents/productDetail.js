import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import uniqid from "uniqid";
const ProductDetail = (props) => {
  const [product, setProduct] = useState([]);
  const productId = useParams();

  useEffect(() => {
    const fechApi = async () => {
      try {
        const link = "https://fakestoreapi.com/products/" + productId.id;
        console.log(link);
        let data = await fetch(link);
        data = await data.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fechApi();
  }, [productId]);

  return (
    <div className="card">
      <div className="imageContainer">
        <img alt="product" src={product.image}></img>
      </div>

      <div className="infoContainer">
        <h3 className="title">{product.title}</h3>
        <h4 className="price">Price: {product.price}$</h4>
        <button className="addBtn">Add to the Cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
