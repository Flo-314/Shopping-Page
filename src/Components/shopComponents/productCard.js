import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="imageContainer">
        <img alt="product" src={product.image}></img>
      </div>

      <div className="infoContainer">
        {" "}
        <h3 className="title">{product.title}</h3>
        <h4 className="price">Price: {product.price}$</h4>
        <button className="addBtn">Add to the Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
