import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetail = (props) => {
  const [product, setProduct] = useState([]);
  const productId = useParams();
  useEffect(() => {
    const fechApi = async () => {
      try {
        const link = "https://fakestoreapi.com/products/" + productId.id;
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
    <main id="singleProduct">
      <div className="card">
        <div className="imageContainer">
          <img alt="product" src={product.image}></img>
        </div>

        <div className="infoContainer">
          <h3 className="title">{product.title}</h3>
          <h4 className="price">Price: {product.price}$</h4>
          <h4 className="description">{product.description}</h4>
          <button className="addBtn" onClick={() => props.addProductHandler(product)}>Add to the Cart</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
